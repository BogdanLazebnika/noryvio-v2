
/**
 * NORYVIO 2.0
 * Centralized translations
 *
 * uk — default language
 * en — English
 */

export const languages = {
  uk: "Українська",
  en: "English"
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "uk";

export const ui = {
  uk: {
    brand: "Noryvio",

    nav: {
      home: "Головна",
      templates: "Шаблони",
      pricing: "Тарифи",
      process: "Процес",
      faq: "FAQ",
      contacts: "Контакти",
      blog: "Блог",
      cta: "Обговорити проєкт"
    },

    accessibility: {
      openMenu: "Відкрити меню",
      closeMenu: "Закрити меню",
      mainNavigation: "Головна навігація",
      changeLanguage: "Змінити мову"
    },

    hero: {
      eyebrow: "ВЕБСТУДІЯ NORYVIO",

      title: "Сайти, які працюють",
      titleAccent: "на ваш бізнес.",

      description:
        "Створюємо сучасні, швидкі та адаптивні сайти з продуманим дизайном і зрозумілими умовами співпраці.",

      primaryCta: "Обговорити проєкт",
      secondaryCta: "Переглянути шаблони",

      benefitOne: "Адаптивний дизайн",
      benefitTwo: "Зрозумілі умови",
      benefitThree: "Підтримка після запуску"
    },

    seo: {
      homeTitle: "Noryvio — створення сучасних сайтів для бізнесу",

      homeDescription:
        "Noryvio — розробка сучасних адаптивних сайтів для бізнесу. Лендинги, бізнес-сайти, індивідуальний дизайн і підтримка після запуску."
    }
  },

  en: {
    brand: "Noryvio",

    nav: {
      home: "Home",
      templates: "Templates",
      pricing: "Pricing",
      process: "Process",
      faq: "FAQ",
      contacts: "Contact",
      blog: "Blog",
      cta: "Let's talk"
    },

    accessibility: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNavigation: "Main navigation",
      changeLanguage: "Change language"
    },

    hero: {
      eyebrow: "NORYVIO WEB STUDIO",

      title: "Websites built",
      titleAccent: "for your business.",

      description:
        "We create modern, fast, responsive websites with thoughtful design and transparent collaboration terms.",

      primaryCta: "Discuss a project",
      secondaryCta: "Explore templates",

      benefitOne: "Responsive design",
      benefitTwo: "Transparent terms",
      benefitThree: "Post-launch support"
    },

    seo: {
      homeTitle: "Noryvio — Modern Websites for Businesses",

      homeDescription:
        "Noryvio creates modern, responsive websites for businesses, including landing pages and business websites, with custom design and post-launch support."
    }
  }
} as const;
