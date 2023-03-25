import { loginUserSlice } from '../../model/accounts/accountReducers';
import axios from './lib/axios';
import fetchUrl from './lib/fetchUrl';

// Thunk Function
const fetchLogin = ({ email, password }) => {
    return async dispatch => {
        await axios.post(fetchUrl.login, {
            "email": email,
            "password": password
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        
        .then(response => dispatch(loginUserSlice.actions.login(response.data)))
        
        .catch(error => {
            console.log(error);
            debugger;
        });
    }
}
export default fetchLogin;