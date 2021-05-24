import './sass/main.scss';
import findCountries from './fetchCountries';
import { htmlBuilder, inputEl, ulEl } from './htmlBuilder';
var debounce = require('lodash.debounce');


inputEl.addEventListener('input', debounce(inputHandler, 500));



function inputHandler(e) {
    let searchingName;
    searchingName = e.target.value;
    const spaceChecker = searchingName.trim();

    ulEl.innerHTML = '';
    if (!searchingName || !spaceChecker) {
        return
    };  

    findCountries(searchingName)
    .then(htmlBuilder);
};






