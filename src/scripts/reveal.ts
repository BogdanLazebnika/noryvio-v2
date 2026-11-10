/**
 * Noryvio Reveal 3.0 — one scroll/resize scheduler, separate enter/exit zones.
 * Elements are never persistently hidden. A reveal is re-armed only after the
 * complete element leaves the viewport with a generous buffer. This prevents
 * the animation itself from flipping the observer at its threshold.
 */
type RevealTarget = {
  element: HTMLElement;
  delay: number;
  duration: number;
  state: "fresh" | "shown" | "outside";
  running?: Animation;
};

const targets = new Map<HTMLElement, RevealTarget>();
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let listening = false;
let scheduled = false;
let previousY = window.scrollY;
let lastDirection = 1;

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, Number.isFinite(value) ? value : minimum));

function update() {
  scheduled = false;
  const currentY = window.scrollY;
  const delta = currentY - previousY;
  if (Math.abs(delta) > 2) lastDirection = delta > 0 ? 1 : -1;
  previousY = currentY;

  const viewportHeight = window.innerHeight;
  // Entry is slightly inside the viewport; exit requires the ENTIRE element
  // to clear the screen plus 96px, regardless of scroll direction.
  const enterInset = Math.min(48, viewportHeight * .08);
  const exitBuffer = 96;

  for (const [node, target] of targets) {
    if (!node.isConnected) { target.running?.cancel(); targets.delete(node); continue; }
    const box = node.getBoundingClientRect();
    const whollyOutside = box.bottom < -exitBuffer || box.top > viewportHeight + exitBuffer;
    if (whollyOutside) {
      // Never interrupt an entry animation just because the user scrolls away.
      // Replay is allowed only on a genuinely new entry after full exit.
      target.state = "outside";
      continue;
    }
    const entered = box.bottom > enterInset && box.top < viewportHeight - enterInset;
    if (!entered || target.state === "shown") continue;
    target.state = "shown";
    if (reducedMotion.matches || typeof node.animate !== "function") continue;

    target.running?.cancel();
    const animation = node.animate([
      { opacity: .74, transform: `translate3d(0, ${lastDirection > 0 ? 16 : -13}px, 0)` },
      { opacity: 1, transform: "translate3d(0, 0, 0)" }
    ], {
      duration: target.duration,
      delay: target.delay,
      easing: "cubic-bezier(.2,.8,.2,1)",
      fill: "backwards"
    });
    target.running = animation;
    animation.addEventListener("finish", () => {
      if (target.running === animation) target.running = undefined;
    }, { once: true });
  }
}
function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(update);
}

function listenOnce() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
      for (const target of targets.values()) {
        target.running?.cancel();
        target.running = undefined;
      }
    }
    schedule();
  });
}

export function registerReveals(
  scope: ParentNode | null,
  selector: string,
  delayAttribute: string,
  duration = 680
): void {
  if (!scope) return;
  for (const element of scope.querySelectorAll<HTMLElement>(selector)) {
    if (targets.has(element)) continue;
    const rawDelay = Number(element.getAttribute(delayAttribute) ?? 0);
    targets.set(element, {
      element,
      duration,
      delay: clamp(rawDelay, 0, 220),
      state: "fresh"
    });
  }
  listenOnce();
  schedule();
}
