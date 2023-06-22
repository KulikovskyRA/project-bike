ymaps.ready(init);
const currentUrl = window.location.href;
const idUrl = currentUrl.split('/').pop();

async function init() {
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
  
  const response = await fetch(`http://localhost:3000/description/route/${idUrl}`);
  const wayData = await response.json();
  let arrCoord = wayData.way_data;
  arrCoord = await JSON.parse(arrCoord);
  console.log(arrCoord);
  
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
  // Добавление маршрута на карту.
  myMap.geoObjects.add(multiRoute);
};
