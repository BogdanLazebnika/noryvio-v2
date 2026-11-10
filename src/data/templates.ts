export type TemplateType = "landing" | "business" | "commerce";
export type TemplateStatus = "offered" | "planned";

export interface TemplateItem {
  id: TemplateType;
  number: string;
  title: string;
  tagline: string;
  description: string;
  status: TemplateStatus;
  features: readonly string[];
}

export const templates: readonly TemplateItem[] = [
  {
    id: "landing",
    number: "01",
    title: "Landing Page",
    tagline: "Одна сторінка. Сильне враження.",
    description:
      "Лаконічний односторінковий сайт для презентації бізнесу, послуг і зв’язку з клієнтами.",
    status: "offered",
    features: [
      "Адаптація дизайну під бренд",
      "Коректна робота на телефонах",
      "Контакти та кнопки зв’язку",
      "Базова SEO-підготовка",
    ],
  },
  {
    id: "business",
    number: "02",
    title: "Business Website",
    tagline: "Більше простору для бізнесу.",
    description:
      "Багатосторінковий сайт з окремими розділами для послуг, портфоліо та корисного контенту.",
    status: "planned",
    features: [
      "Окремі сторінки послуг",
      "Продумана навігація",
      "Галереї та портфоліо",
      "Структура для розвитку SEO",
    ],
  },
  {
    id: "commerce",
    number: "03",
    title: "E-commerce",
    tagline: "Продажі в цифровому просторі.",
    description:
      "Майбутній напрямок: інтернет-магазини з каталогом товарів, кошиком і оформленням замовлень.",
    status: "planned",
    features: [
      "Каталог і картки товарів",
      "Кошик покупця",
      "Оформлення замовлення",
      "Платіжні інтеграції після реалізації",
    ],
  },
];
