import axios from '../api/axios';

async function fetchLoginState(_email, _password) {
    await axios.post('/login', {
        email: _email,
        password: _password
    },{
        withCredentials: true
    }).then(data => {
        console.log("success");

    }).catch(error => {
        console.log(error);
    })
}
export default fetchLoginState;