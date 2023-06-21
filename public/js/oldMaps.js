const mapDiv = document.querySelector('#YMapsID');
console.log(mapDiv);

ymaps.ready(function () {
  var myMap = new ymaps.Map('YMapsID', {
    center: [55.751574, 37.573856],
    zoom: 10,
    controls: ['routePanelControl'],
  });
  
  // Получение ссылки на панель.
  var control = myMap.controls.get('routePanelControl');
  
  control.routePanel.state.set({
    // Список всех настроек см. в справочнике.
    // Тип маршрутизации, который будет использоваться по умолчанию.
    type: "bicycle", // велосипед
  });
  
  control.routePanel.options.set({
    // Типы маршрутизации, которые будут доступны
    // для выбора пользователям.
    // В примере можно построить
    // автомобильный маршрут с вызовом такси и пешеходный маршрут.
    // При использовании CSP, убедитесь что у вас подключена последняя версия правил.
    // В противном случае, маршрутизация с типом "taxi" не будет работать.
    types: {
      "bicycle": true,
      // "taxi": true
    }
  });
  
  
  // Создание экземпляра маршрута.
  // var multiRoute = new ymaps.multiRouter.MultiRoute({
  //   // Точки маршрута.
  //   // Обязательное поле.
  //   // referencePoints: [
  //   //   'Москва, метро Смоленская',
  //   //   'Москва, метро Арбатская',
  //   //   [55.734876, 37.59308], // улица Льва Толстого.
  //   // ]
  // }, {
  //   // Автоматически устанавливать границы карты так,
  //   // чтобы маршрут был виден целиком.
  //   boundsAutoApply: true
  // });
  //myMap
  
  
  // Добавление маршрута на карту.
  //myMap.geoObjects.add(multiRoute);
  // myMap.addEventListener('click', ((e) => {
  //   console.log(e.target);
  // }));
});


mapDiv.addEventListener('click', ((e) => {
  ymaps.events.add('click', function (e) {
    // Получение координат щелчка
    var coords = e.get('coords');
    alert(coords.join(', '));
  });
  console.log(ymaps.event);
}));


// ymaps.events.add('click', function (e) {
//   map.balloon.open(e.get('coords'), 'Щелк!');
// });
// //
// mapDiv.events.add('click', function (e) {
//   myMap.balloon.open(e.get('coords'), 'Щелк!');
// });

// ymaps.events.add('click', function (e) {
//   // Получение координат щелчка
//   var coords = e.get('coords');
//   alert(coords.join(', '));
// });

// function getSome() {
//   console.log(myMap);
// }

console.log(ymaps.Event);

