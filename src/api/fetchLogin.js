import { login } from '../modules/accounts/accountReducers';
import axios from './axios';

const Code = {
    SUCCESS: "CMN-001",
    BAD_CREDENTIALS: "ATE-004"
}
Object.freeze(Code);

// Thunk Function
const fetchLogin = ({ email, password }) => {
    return async (dispatch, getState) => {
        await axios.post('/login', {
            "email": email,
            "password": password
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            switch (response.data.code) {
                case Code.SUCCESS:
                    dispatch(login(response.data.data));
                    break;

                case Code.BAD_CREDENTIALS:
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