let strings = {
  "ru": {
      "welcome": "Главная",
      "about": "О нас",
      "contact": "Контакты",
      "additional-services":"Дополнительные услуги",
      "title": "Пассажирские перевозки!",
      "title-information": "Наша компания предлагает комфортабельные пассажирские и грузовые перевозки по Европе",
      "about-title":"ДОБРО ПОЖАЛОВАТЬ НА НАШ САЙТ, СПЕЦИАЛИЗИРУЮЩИЙСЯ НА ПАССАЖИРСКИХ И ГРУЗОВЫХ ПЕРЕВОЗКАХ ПО ЕВРОПЕ!",
      "about-title_information":"Мы предлагаем широкий спектр услуг, чтобы удовлетворить любые потребности наших клиентов.",
      "about-title_freight": "Грузовые перевозки",
      "about-title_passenger": "Пассажирские перевозки",
      "about-information_freight": "Мы предлагаем грузовые перевозки по всей Европе. Независимо от того, какой груз вы хотите перевезти и куда, наши профессионалы помогут вам выбрать оптимальный маршрут и наиболее подходящий вид транспорта. Мы гарантируем своевременную доставку вашего груза в целости и сохранности.",
      "about-information_passenger": "Мы предлагаем комфортабельные автобусы и микроавтобусы различной вместимости для перевозки пассажиров по Европе. Наша команда профессионалов обеспечит безопасную и комфортную поездку, а наши водители имеют многолетний опыт работы и отличное знание местных дорог.",
      "services-text_right": "Обеспечение страховки на груз и пассажиров",
      "services-text_center": "Оформление всех необходимых документов",
      "services-text_left":"Круглосуточная поддержка клиентов",
      "testimonials":"Отзывы",
      "testimonials-text_firts":"Я заказал машину для моей семьи, чтобы добраться до аэропорта. Водитель был очень приятным ипомог нам с нашим багажом. В целом, это было очень приятное и безопасное путешествие.",
      "testimonials-text_second":"Я путешествую довольно часто, и могу сказать, что это была одна из лучших поездок. Машина пришлавовремя, водитель был профессиональным и очень доброжелательным.",
      "testimonials-text_third":"Очень доволен работой компании. Груз был доставлен вовремя и без повреждений. Операторы связибыли всегда на связи, чтобы дать мне информацию о моем грузе.",      
      "parallax1-text_first":"Пассажиров перевезено",
      "parallax1-text_second":"Постоянных клиентов",
      "parallax1-text_third":"Рейстов сделано",
      "parallax1-text_fours":"Лет на рынке",
      "section-contact-title":"СВЯЗАТЬСЯ С НАМИ",
      "section-contact-info":"Свяжитесь с нами сегодня, чтобы получить более подробную информацию о наших услугах и начать сотрудничество!",
    },
  "pl": {
      "welcome": "Główny",
      "about": "O nas",
      "contact": "Kontakt",
      "additional-services":"Dodatkowe usługi",
      "title": "Transport pasażerski!",
      "title-information": "Nasza firma oferuje komfortowy przewóz osób i towarów na terenie Europy",
      "about-title":"WITAMY NA NASZEJ STRONIE SPECJALIZUJĄCEJ SIĘ W TRANSPORCIE OSOBOWYM I TOWAROWYM W EUROPIE!",
      "about-title_information":"Oferujemy szeroki zakres usług, aby zaspokoić wszystkie potrzeby naszych klientów.",
      "about-title_freight": "Transport towarowy",
      "about-title_passenger": "Transport pasażerski",
      "about-information_freight": "Oferujemy transport towarów na terenie całej Europy. Bez względu na to, jaki ładunek chcesz przewieźć i gdzie, nasi fachowcy pomogą Ci wybrać najlepszą trasę i najodpowiedniejszy środek transportu. Gwarantujemy terminową dostawę Twojego ładunku w dobrym stanie.",
      "about-information_passenger": "Oferujemy komfortowe busy i minibusy o różnej pojemności do przewozu pasażerów na terenie całej Europy. Nasz zespół fachowców zadba o bezpieczną i komfortową jazdę, a nasi kierowcy posiadają wieloletnie doświadczenie i doskonałą znajomość lokalnych dróg.",
      "services-text_right": "Ubezpieczenie ładunku i pasażerów",
      "services-text_center":"Przygotowanie wszystkich niezbędnych dokumentów",
      "services-text_left": "Całodobowa obsługa klienta",
      "testimonials":"Opinie",
      "testimonials-text_firts":"Zarezerwowałem samochód dla mojej rodziny, aby dostać się na lotnisko. Kierowca był bardzo miły i pomógł nam z bagażem. Podsumowując, była to bardzo przyjemna i bezpieczna podróż.",
      "testimonials-text_second":"Podróżuję dość często i mogę powiedzieć, że był to jeden z najlepszych wyjazdów. Samochód przyjechał na czas, kierowca był profesjonalny i bardzo przyjazny.",
      "testimonials-text_third":"Jestem bardzo zadowolony z pracy firmy. Przesyłka została dostarczona na czas i bez uszkodzeń. Operatorzy telekomunikacyjni byli zawsze w kontakcie, aby udzielić mi informacji o moim ładunku.",      
      "parallax1-text_first":"Pasażerowie przewożeni",
      "parallax1-text_second":"Stali klienci",
      "parallax1-text_third":"Wyścigi zrobione",
      "parallax1-text_fours":"Lata na rynku",
      "section-contact-title":"POŁĄCZ SIĘ Z NAMI",
      "section-contact-info":"Skontaktuj się z nami już dziś, aby uzyskać więcej informacji o naszych usługach i rozpocząć współpracę!",
    }
};

function changeLanguage(language) {
  let elements = document.querySelectorAll("[data-string]");
  for (let i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute("data-string");
      elements[i].innerHTML = strings[language][key];
  }
}

// получаем все ссылки в списке
var links = document.querySelectorAll('ul li');
console.log(links)
// создаем функцию для изменения класса ссылки
function changeLinkClass(event) {
  event.preventDefault(); // отменяем действие ссылки по умолчанию
  event.target.classList.toggle('active'); // добавляем или удаляем класс "active"
}

// добавляем обработчик события "click" для каждой ссылки в списке
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', changeLinkClass);
}