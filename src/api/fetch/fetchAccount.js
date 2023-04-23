import { loginUserSlice } from '../../model/accounts/reducer/accountReducers';
import { myInformationSlice } from '../../model/accounts/reducer/accountReducers';
import axios from './lib/axios'
import fetchUrl from './lib/fetchUrl'

/**
 * History
 ** 2023-03-24: 임주형 - 로그인API 호출 구현
 ** 2023-04-14: 임주형 - 로그아웃API 호출 구현
 */

const fetchAccount = {
    login({ email, password }) {
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
    },

    async logout() {
        return await axios.post(fetchUrl.logout, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    },

    myInformation(loginUser) {
        return async dispatch => {
            await axios.get(fetchUrl.myInformation, loginUser)
                .then(response => dispatch(myInformationSlice.actions.myInformation(response.data)))
                .catch(error => {
                    console.log(error);
                    debugger;
                });
        }
    },

    async accountsNormal({ email, name, password, birthDay }) {
        return await axios.post(fetchUrl.accountsNormal, {
            "email": email,
            "name": name,
            "password": password,
            "birthDay": birthDay
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },

    async updateActivated({ loginUser, activated }) {
        return await axios.put(fetchUrl.updateActivated, {
            "loginUser": loginUser,
            "": {
                "activated": activated
            }
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
export default fetchAccount;