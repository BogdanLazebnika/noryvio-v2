
export type CatalogLang = "uk" | "en";

export type CatalogCategory =
  | "auto"
  | "coffee"
  | "cleaning"
  | "beauty"
  | "commerce";

export type LocalText = Readonly<
  Record<CatalogLang, string>
>;

export interface TemplateConcept {
  id: string;
  category: CatalogCategory;
  image: string;
  imageAlt: LocalText;
  categoryLabel: LocalText;
  title: LocalText;
  description: LocalText;
  highlight: LocalText;
  status: "concept";
}

export const templateConcepts: readonly TemplateConcept[] = [
  {
    id: "detailing",
    category: "auto",
    image: "/images/templates/detailing.webp",
    imageAlt: {
      uk: "Візуальний концепт сайту автодетейлінгу з темним автомобілем",
      en: "Dark automotive detailing website design concept"
    },
    categoryLabel: {
      uk: "АВТО",
      en: "AUTOMOTIVE"
    },
    title: {
      uk: "Автодетейлінг",
      en: "Auto Detailing"
    },
    description: {
      uk: "Ефектна презентація послуг, робіт і способів запису для автомобільного бізнесу.",
      en: "A striking presentation of automotive services, work and booking options."
    },
    highlight: {
      uk: "Послуги та запис",
      en: "Services & booking"
    },
    status: "concept"
  },
  {
    id: "coffee",
    category: "coffee",
    image: "/images/templates/coffee.webp",
    imageAlt: {
      uk: "Візуальний концепт сайту кав'ярні з чашкою кави",
      en: "Coffee shop website design concept featuring coffee"
    },
    categoryLabel: {
      uk: "ЗАКЛАДИ",
      en: "HOSPITALITY"
    },
    title: {
      uk: "Кав'ярня",
      en: "Coffee Shop"
    },
    description: {
      uk: "Атмосфера закладу, меню, інформація для гостей і зручний зв'язок.",
      en: "A welcoming atmosphere, menu, guest information and easy contact."
    },
    highlight: {
      uk: "Меню та контакти",
      en: "Menu & contact"
    },
    status: "concept"
  },
  {
    id: "cleaning",
    category: "cleaning",
    image: "/images/templates/cleaning.webp",
    imageAlt: {
      uk: "Візуальний концепт сайту клінінгової компанії",
      en: "Cleaning service website design concept"
    },
    categoryLabel: {
      uk: "ПОСЛУГИ",
      en: "SERVICES"
    },
    title: {
      uk: "Клінінг",
      en: "Cleaning Service"
    },
    description: {
      uk: "Зрозуміла подача послуг, переваг компанії та можливості залишити заявку.",
      en: "A clear presentation of services, company benefits and enquiries."
    },
    highlight: {
      uk: "Послуги та заявки",
      en: "Services & enquiries"
    },
    status: "concept"
  },
  {
    id: "beauty",
    category: "beauty",
    image: "/images/templates/beauty.webp",
    imageAlt: {
      uk: "Візуальний концепт сайту салону краси у рожевих тонах",
      en: "Beauty salon website design concept in soft pink tones"
    },
    categoryLabel: {
      uk: "КРАСА",
      en: "BEAUTY"
    },
    title: {
      uk: "Салон краси",
      en: "Beauty Salon"
    },
    description: {
      uk: "Вишукане представлення процедур, атмосфери салону та онлайн-звернень.",
      en: "An elegant presentation of treatments, atmosphere and enquiries."
    },
    highlight: {
      uk: "Процедури та запис",
      en: "Treatments & booking"
    },
    status: "concept"
  },
  {
    id: "commerce",
    category: "commerce",
    image: "/images/templates/commerce.webp",
    imageAlt: {
      uk: "Візуальний концепт інтернет-магазину сучасної електроніки",
      en: "Modern electronics online store design concept"
    },
    categoryLabel: {
      uk: "ТОРГІВЛЯ",
      en: "E-COMMERCE"
    },
    title: {
      uk: "Інтернет-магазин",
      en: "Online Store"
    },
    description: {
      uk: "Концепція сучасної вітрини товарів зі структурою для майбутніх продажів.",
      en: "A modern storefront concept with a structure for future online sales."
    },
    highlight: {
      uk: "Каталог товарів",
      en: "Product catalogue"
    },
    status: "concept"
  }
];
