const mapButton = document.querySelector('.mapButton');
const btnContainer = document.querySelector('.buttons_container');

ymaps.ready(init);

const arrCoord = [];

function createFileForm(id) {
  const form = document.createElement('form');
  form.className = 'upload-photo';
  form.action = `http://localhost:3000/way/addphoto/${id}`;
  form.enctype = 'multipart/form-data';
  form.method = 'POST';
  const labelPhoto = document.createElement('label');
  labelPhoto.innerText = 'Загрузите фотографию';
  labelPhoto.className = 'labelPhoto';
  const inputFile = document.createElement('input');
  inputFile.className = 'input-file';
  inputFile.type = 'file';
  inputFile.name = 'photo';
  const button = document.createElement('button');
  button.innerText = 'Сохранить';
  button.type = 'submit';
  button.className = 'flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
  form.appendChild(labelPhoto);
  form.appendChild(inputFile);
  form.appendChild(button);
  const container = document.querySelector('.forUploadFile');
  container.appendChild(form);
}

async function saveRoute(title, city, picture_data, way_time, way_length, way_data,) {
  const response = await fetch('http://localhost:3000/way/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      city,
      picture_data,
      way_time,
      way_length,
      way_data,
    }),
  });
  // const response = await fetch('http://localhost:3000/way/add');
  const result = await response.json();
  console.log(result);
  createFileForm(result.id);
  const form = document.querySelector('.upload-photo');
  // form.addEventListener('submit', ((e) => {
  //   e.preventDefault();
  // }));
  //document.location.href = 'http://localhost:3000/profile/myway';
}

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
      console.log(
        'Улица: ' + activeRoute.properties.get('street')
      );
      //TODO
      // const activeRoutePaths = activeRoute.getPaths();
      // activeRoutePaths.each((path) => {
      //   console.log('path', path.getSegments());
      //   var segments = path.getSegments();
      //   segments.each((segment) => {
      //     console.log('запрос', segment.properties);
      //   });
      // });
      
      //const title = activeRoute.properties.get('duration').text;
      // const city = 'Test city';
      // const picture_data = 'image';
      // const way_time = activeRoute.properties.get('duration').text;
      // const way_length = activeRoute.properties.get('distance').text;
      // const way_data = [...arrCoord];
      const coord = activeRoute.properties.get('wayPoints');
      //console.log(coord);
      // var wayPoints = multiRoute.getWayPoints();
      // wayPoints.each((point) => console.log(point.geometry._coordinates));
      //console.log(wayPoints);
      const inputWayName = document.createElement('input');
      inputWayName.className = 'way-title';
      inputWayName.type = 'text';
      const saveButton = document.createElement('button');
      saveButton.className = 'button-save-map flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
      saveButton.innerText = 'Далее';
      let checkSaveBtn = document.querySelector('.button-save-map');
      console.log('BUTTON', checkSaveBtn);
      if (!checkSaveBtn) {
        const labelInput = document.createElement('label');
        labelInput.className = 'labelPhoto';
        labelInput.innerText = 'Придумайте название маршрута';
        btnContainer.appendChild(labelInput);
        btnContainer.appendChild(inputWayName);
        const inputWayTitle = document.querySelector('.way-title');
        btnContainer.appendChild(saveButton);
        const newSaveButton = document.querySelector('.button-save-map');
        newSaveButton.addEventListener('click', ((e) => {
          saveButton.remove();
          let title = inputWayTitle.value;
          //let city = 'Test city';
          let picture_data = 'image';
          let way_time = activeRoute.properties.get('duration').text;
          let way_length = activeRoute.properties.get('distance').text;
          let way_data = [];
          
          const wayPoints = multiRoute.getWayPoints();
          wayPoints.each((point) => {
            way_data.push(point.geometry._coordinates);
          });
          
          ymaps.geocode(way_data[ 0 ]).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            //return firstGeoObject.properties._data.description;
            const city = firstGeoObject.properties._data.description;
            saveRoute(title, city, picture_data, way_time, way_length, way_data);
          });
          
          
          //saveRoute(title, city, picture_data, way_time, way_length, way_data);
        }));
      }
      
      
      // Сохранение маршрута
      // await fetch('http://localhost:3000/way/add', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     title,
      //     city,
      //     picture_data,
      //     way_time,
      //     way_length,
      //     way_data,
      //   }),
      // });
      if (activeRoute.properties.get('blocked')) {
        console.log('На маршруте имеются участки с перекрытыми дорогами.');
      }
    });
  });
  
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
  });
}


