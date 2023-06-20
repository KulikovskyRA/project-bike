require('@babel/register'); // библиотека для работы react
const React = require('react');
const ReactDOMServer = require('react-dom/server'); // ReactDOMServer

module.exports = function render(component, props, res) {
  // передаём компонент и props, таким образом создаём react елемент
  const main = React.createElement(component, props);
  // в функцию renderToStaticMarkup(main) передаём main для
  //   отрисовки компонента Home с props(создание верстки)
  const html = ReactDOMServer.renderToStaticMarkup(main);

  // экспортировали в эндпоинт

  res.write('<!DOCTYPE html>'); // метотег
  res.write(html); // отправляем на страницу
  res.end(); // опционально, можно выполнить в эндпоинте
};
