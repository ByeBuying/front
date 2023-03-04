import axios from 'axios';

const instance = axios.create({
    baseURL: "/api",
    headers: {
        
    }

});
export default instance;