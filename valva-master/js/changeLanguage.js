let strings = {
  "uk": {
      "welcome": "Головна",
      "about": "Про нас",
      "contact": "Контакт",
      "title": "Пасажирські перевезення!",
      "title-information": "Наша компанія пропонує комфортабельні пасажирські та вантажні перевезення Європою",
  },
  "pl": {
      "welcome": "Główny",
      "about": "O nas",
      "contact": "Kontakt",
      "title": "Transport pasażerski!",
      "title-information": "Nasza firma oferuje komfortowy przewóz osób i towarów na terenie Europy"
  }
};

function changeLanguage(language) {
  let elements = document.querySelectorAll("[data-string]");
  for (let i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute("data-string");
      elements[i].innerHTML = strings[language][key];
  }
}