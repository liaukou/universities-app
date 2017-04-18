import { URL } from '../constants/App.Constants';

export const getData = (config) => {
    return fetch(`${URL}/search?name=${config.name}&country=${config.country}`)
        .then(response => response.json());
};
