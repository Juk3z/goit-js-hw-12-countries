
import listTemplate from './templates/list.hbs';
import itemTemplate from './templates/item.hbs'
import errorNotify from './pnotify.js';

const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');


function htmlBuilder(data) {
    if (!data) {
        return
    };  

    if (data.length > 10) {
        ulEl.innerHTML = '';
        errorNotify('Слишком мало символов');
        return;
    };

    if (data.length > 1) {
        ulEl.innerHTML = '';
        data.forEach(item => ulEl.insertAdjacentHTML('beforeend', listTemplate(item)));
        return
    };

    if (data.length === 1) {
        data.forEach(item => ulEl.innerHTML = itemTemplate(item));
        return;
    };
};

export { htmlBuilder, inputEl, ulEl };








