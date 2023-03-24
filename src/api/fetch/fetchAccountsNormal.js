import axios from './lib/axios';

async function fetchAccountsNormal({ email, name, password, birthDay }) {
    await axios.post('/v1/auth/accounts/normal', {
        "email": email,
        "name": name,
        "password": password,
        "birthDay": birthDay

    }, {
        headers: {
            "Content-Type": "application/json"
            
        }

    }).then(response => {
        console.log("success");
        console.log(response);

    }).catch(error => {
        console.log(error);
        debugger;

    });
}
export default fetchAccountsNormal;