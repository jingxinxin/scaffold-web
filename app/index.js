import './main.scss';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';
import 'imports?jQuery=jquery!./plugin.js';

import path from 'path';
let ROOT_PATH = path.resolve(__dirname);

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
  $('p').greenify();
  app.innerHTML = '<h1>Hello World it</h1>';
  document.body.appendChild(app);
  app.appendChild(generateText());
});
