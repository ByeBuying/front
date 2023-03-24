import { login } from '../../model/accounts/accountReducers';
import axios from './lib/axios';
import AccountsCode from '../../model/accounts/code/AccountsCode';

// Thunk Function
const fetchLogin = ({ email, password }) => {
    return async dispatch => {
        await axios.post('/login', {
            "email": email,
            "password": password
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            switch (response.data.code) {
                case AccountsCode.SUCCESS:
                    console.log("test:", response);
                    dispatch(login(response.data));
                    break;

                case AccountsCode.BAD_CREDENTIALS:
                    dispatch(login(response.data));
                    break;

                default: ;
            }

        }).catch(error => {
            console.log(error);
            debugger;
        });
    }
}
export default fetchLogin;