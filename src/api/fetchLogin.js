import axios from './axiosSettings';

async function fetchLogin({ email, password }) {
    await axios.post('/login', {
        "email": email,
        "password": password

    }, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"

        }
    }).then(response => {
        console.log("success");
        console.log(response);

    }).catch(error => {
        console.log(error);
        debugger;

    });


}
export default fetchLogin;