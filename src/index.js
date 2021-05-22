import './sass/main.scss';
import findCountries from './fetchCountries';
import { htmlBuilder, inputEl } from './htmlBuilder';
var debounce = require('lodash.debounce');


inputEl.addEventListener('input', debounce(inputHandler, 500));



function inputHandler(e) {
    let searchingName;
    searchingName = e.target.value;

    if (!searchingName) {
        inputEl.innerHTML = '';
        return
    };  

    findCountries(searchingName)
    .then(htmlBuilder);
};







