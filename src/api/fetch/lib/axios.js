import axios from 'axios';
import fetchUrl from './fetchUrl';

const instance = axios.create({
    baseURL: fetchUrl.base,
    headers: {
        
    }

});
export default instance;