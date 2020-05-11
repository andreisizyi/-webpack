import _ from 'lodash';
import '../css/bootstrap.min.css';
import '../css/fa/fontawesome.css';
import '../css/fa/solid.css';
import '../css/fa/brands.css';
import '../css/index.css';
import '../scss/index.scss';
import popper from 'popper.js';
import bootstrap from './bootstrap';
 
  function component() {
    const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());