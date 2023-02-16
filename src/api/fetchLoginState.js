import axios from '../api/axios';

async function fetchLoginState(_email, _password) {
    const response = await axios.post('/login', {
        email: _email,
        password: _password
    }, {
        withCredentials: true
    })

    console.log(response);
}
export default fetchLoginState;