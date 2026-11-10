export const base = '/demo/cleaning/';
export const photos = {
  hero:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1700&q=82',
  room:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82',
  kitchen:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82',
  house:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=82',
  office:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=82',
  window:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1100&q=82',
  bathroom:'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1100&q=82',
  renovation:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=82',
  living:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=82',
  plant:'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1000&q=82'
};
export const services = [
 {id:'standard',name:'Підтримувальне прибирання',short:'Для регулярної свіжості без зайвого клопоту.',detail:'Пил на відкритих поверхнях, підлога, кухня, санвузол і видимі забруднення.',price:38,photo:photos.room,tag:'Щоденний комфорт'},
 {id:'general',name:'Генеральне прибирання',short:'Глибоке очищення кожної важливої зони.',detail:'Ретельна робота з кухнею, санвузлом, меблями та складними ділянками.',price:65,photo:photos.kitchen,tag:'Найпопулярніше'},
 {id:'post',name:'Після ремонту',short:'Повертаємо простору затишок після оновлення.',detail:'Будівельний пил, сліди оздоблення, підлога та доступні поверхні.',price:85,photo:photos.renovation,tag:'Складні завдання'},
 {id:'office',name:'Прибирання офісу',short:'Охайний простір для людей та ідей.',detail:'Робочі місця, спільні зони, кухня, санвузол та догляд за підлогою.',price:42,photo:photos.office,tag:'Для бізнесу'},
 {id:'windows',name:'Миття вікон',short:'Більше світла в кожній кімнаті.',detail:'Скло, рами, підвіконня та доступні зовнішні поверхні.',price:95,photo:photos.window,tag:'За одиницю'}
];
export const extras=[{id:'fridge',name:'Холодильник зсередини',price:260},{id:'oven',name:'Духовка зсередини',price:320},{id:'windows',name:'Вікна (пакет)',price:480},{id:'cabinets',name:'Шафи зсередини',price:300},{id:'balcony',name:'Балкон / лоджія',price:280},{id:'pet',name:'Прибирання після тварин',price:170}];
export const faqs=[
 ['Чи входять засоби та обладнання у вартість?','У демонстраційному розрахунку ми виходимо з того, що базові засоби й інвентар включено. У реальному замовленні це залежить від погодженого пакета.'],
 ['Скільки часу триває прибирання?','Залежить від площі, рівня забруднення та переліку робіт. Для квартири 50–70 м² це може бути кілька годин, але точний термін визначають після уточнення деталей.'],
 ['Чи потрібно бути вдома?','Реальні компанії зазвичай погоджують доступ і спосіб передачі ключів окремо. Цей сайт є демонстрацією, тому жодних ключів чи адрес не приймаємо.'],
 ['Чи можна додати окремі послуги?','Так. У калькуляторі можна вибрати миття вікон, очищення духовки, холодильника та інші опції.'],
 ['Чи це остаточна ціна?','Ні. Цифри на демосайті умовні та ілюструють роботу калькулятора. Фактичну пропозицію клінінгової компанії потрібно узгоджувати окремо.'],
 ['Чи можна оформити реальне замовлення?','Ні. Це інтерактивний концепт від Noryvio. Демо-заявка показує підтвердження лише в браузері й нікуди не надсилається.']
];
