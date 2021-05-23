const BASIC_URL = 'https://restcountries.eu';

export default function fetchCountriesAPI(searchQuery) {
    return fetch(`${BASIC_URL}/rest/v2/name/${searchQuery}`)
        .then(r => r.json())
        .then(obj => obj)
        .catch(error => console.log(error, 'ошибка'))
};

