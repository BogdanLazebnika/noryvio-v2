export type CoffeeCategory = 'Кава' | 'Авторські напої' | 'Чай' | 'Сніданки' | 'Десерти';
export type CoffeeItem = { id: string; name: string; category: CoffeeCategory; price: number; desc: string; image: string; badge?: string; popular?: boolean; vegan?: boolean };
export const photo = {
  hero: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1900&q=85',
  interior: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85',
  counter: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85',
  beans: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85',
  coffee: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85',
  latte: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85',
  espresso: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85',
  matcha: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85',
  croissant: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85',
  cheesecake: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85',
  breakfast: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85',
  toast: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
  tea: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85',
  pastry: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85',
};
export const menu: CoffeeItem[] = [
  {id:'flat-white',name:'Флет-вайт',category:'Кава',price:105,desc:'Подвійний еспресо, шовковисте молоко, насичений смак.',image:photo.latte,popular:true,badge:'Хіт'},
  {id:'cappuccino',name:'Капучино',category:'Кава',price:95,desc:'Збалансована класика з ніжною молочною пінкою.',image:photo.coffee,popular:true},
  {id:'espresso',name:'Еспресо',category:'Кава',price:65,desc:'Щільне тіло, шоколадні ноти й короткий післясмак.',image:photo.espresso},
  {id:'americano',name:'Американо',category:'Кава',price:75,desc:'Еспресо з гарячою водою для м’якого щоденного ритуалу.',image:photo.coffee},
  {id:'iced-latte',name:'Айс-лате',category:'Авторські напої',price:125,desc:'Еспресо, охолоджене молоко й лід.',image:photo.latte,badge:'Сезонне'},
  {id:'caramel',name:'Солона карамель',category:'Авторські напої',price:145,desc:'Кава, натуральна карамель та делікатна морська сіль.',image:photo.coffee,popular:true},
  {id:'matcha',name:'Матча-лате',category:'Авторські напої',price:145,desc:'Церемоніальна матча та молоко на вибір.',image:photo.matcha,vegan:true},
  {id:'filter',name:'Фільтр дня',category:'Кава',price:90,desc:'Зерно дня, чистий смак, фруктові відтінки.',image:photo.beans,vegan:true},
  {id:'earl-grey',name:'Ерл Грей',category:'Чай',price:85,desc:'Чорний чай із виразним ароматом бергамота.',image:photo.tea,vegan:true},
  {id:'berry-tea',name:'Ягідний чай',category:'Чай',price:105,desc:'Теплий мікс ягід та трав, без кофеїну.',image:photo.tea,vegan:true},
  {id:'croissant',name:'Мигдалевий круасан',category:'Десерти',price:125,desc:'Хрусткий, із мигдалевим кремом та пелюстками.',image:photo.croissant,popular:true},
  {id:'cheesecake',name:'Баскський чизкейк',category:'Десерти',price:165,desc:'Ніжна текстура, карамелізована скоринка.',image:photo.cheesecake,badge:'Улюблений'},
  {id:'granola',name:'Гранола з йогуртом',category:'Сніданки',price:175,desc:'Домашня гранола, сезонні ягоди, грецький йогурт.',image:photo.breakfast},
  {id:'avocado',name:'Авокадо-тост',category:'Сніданки',price:235,desc:'Зерновий хліб, авокадо, яйце пашот та зелень.',image:photo.toast,popular:true},
  {id:'french',name:'Французький тост',category:'Сніданки',price:195,desc:'Бріош, крем і сезонні фрукти.',image:photo.pastry},
];
export const money = (n: number) => `${n.toLocaleString('uk-UA')} ₴`;
