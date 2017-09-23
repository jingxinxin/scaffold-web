import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import { cube } from './routerConfig.jsx';

function component() {

  var element = document.createElement('pre');

  var btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;

  element.appendChild(btn);

  element.classList.add('hello');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('!!!!!Accepting the updated printMe module!');
    printMe();
  })
}