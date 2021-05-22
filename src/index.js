import './sass/main.scss';
import fetchCountries from './fetchCountries';
import listTemPlate from './templates/list.hbs';
import itemTemplate from './templates/item.hbs'
var debounce = require('lodash.debounce');


const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');



inputEl.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(e) {
    let searchingName;
    searchingName = e.target.value;

    if (!searchingName) {
        ulEl.innerHTML = '';
        return
    };
    
    fetchCountries(searchingName)
        .then(r => r.json())
        .then(data => {
            if (data.length > 10) {
                console.log('error')
                ulEl.innerHTML = '';
                return;
            };

            if (data.length > 1) {
                listMaking(data);
                return;
            };
            console.log(data);
            if (data.length === 1) {
                itemMaking(data);

            };
        })
        .catch(error => console.log(error));
};

function listMaking(arr) {
    ulEl.innerHTML = '';
    arr.forEach(item => {
        ulEl.insertAdjacentHTML('beforeend', listTemPlate(item))
    });
};

function itemMaking(arr) {
    arr.forEach(item => {
        ulEl.innerHTML = itemTemplate(item);
    });
};





import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';

// import { error } from '@pnotify/core';

defaults.styling = 'material';

defaults.icons = 'material';


const { alert, notice, info, success, error } = require('@pnotify/core');
const myError = error({
  text: "I'm an error message."
});

console.log(defaults);