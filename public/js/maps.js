const mapButton = document.querySelector('.mapButton');
ymaps.ready(init);

const arrCoord = [];

function init() {
  var myMap = new ymaps.Map(
    'YMapsID',
    {
      center: [55.751574, 37.573856],
      zoom: 10,
      controls: [],
    },
    {
      balloonMaxWidth: 200,
      searchControlProvider: 'yandex#search',
    }
  );

  mapButton.addEventListener('click', (e) => {
    var multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        // Точки маршрута.
        // Обязательное поле.
        referencePoints: [...arrCoord],
        params: {
          // Тип маршрута: на общественном транспорте.
          routingMode: 'bicycle',
        },
      },
      {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true,
      }
    );
    console.log('ROUTE', multiRoute.referencePoints);
    multiRoute.editor.start();
    // Добавление маршрута на карту.
    myMap.geoObjects.add(multiRoute);
    console.log(myMap.geoObjects);

    multiRoute.model.events.add('requestsuccess', function () {
      // Получение ссылки на активный маршрут.
      var activeRoute = multiRoute.getActiveRoute();
      // Вывод информации о маршруте.
      console.log('Длина: ' + activeRoute.properties.get('distance').text);
      console.log(
        'Время прохождения: ' + activeRoute.properties.get('duration').text
      );
      // Для автомобильных маршрутов можно вывести
      // информацию о перекрытых участках.
      if (activeRoute.properties.get('blocked')) {
        console.log('На маршруте имеются участки с перекрытыми дорогами.');
      }
    });
  });

  // Создание экземпляра маршрута.

  // // // Добавление маршрута на карту.
  // myMap.geoObjects.add(multiRoute);

  // Обработка события, возникающего при щелчке
  // левой кнопкой мыши в любой точке карты.
  // При возникновении такого события откроем балун.

  let count = 1;
  myMap.events.add('click', function (e) {
    console.log(e);
    var coords = e.get('coords');

    arrCoord.push(coords);
    console.log(arrCoord);
    myPlacemark = new ymaps.Placemark(coords, {
      iconContent: count,
    });
    myMap.geoObjects.add(myPlacemark);
    count++;

    // if (!myMap.balloon.isOpen()) {
    //   var coords = e.get('coords');
    //   console.log(coords);
    //   myMap.balloon.open(coords, {
    //     contentHeader: 'Событие!',
    //     contentBody: '<p>Кто-то щелкнул по карте.</p>' +
    //       '<p>Координаты щелчка: ' + [
    //         coords[ 0 ].toPrecision(6),
    //         coords[ 1 ].toPrecision(6)
    //       ].join(', ') + '</p>',
    //     contentFooter: '<sup>Щелкните еще раз</sup>'
    //   });
    // } else {
    //   myMap.balloon.close();
    // }
  });

  // Обработка события, возникающего при щелчке
  // правой кнопки мыши в любой точке карты.
  // При возникновении такого события покажем всплывающую подсказку
  // в точке щелчка.
  myMap.events.add('contextmenu', function (e) {
    myMap.hint.open(e.get('coords'), 'Кто-то щелкнул правой кнопкой');
  });

  // Скрываем хинт при открытии балуна.
  myMap.events.add('balloonopen', function (e) {
    myMap.hint.close();
  });
}
