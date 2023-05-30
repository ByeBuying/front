import { loginUserSlice } from '../../model/accounts/reducer/accountReducers';
import { myInformationSlice } from '../../model/accounts/reducer/accountReducers';
import axios from './lib/axios'
import fetchUrl from './lib/fetchUrl'

/**
 * History
 ** 2023-03-24: 임주형 - 로그인API, 회원정보API 호출 구현
 ** 2023-04-14: 임주형 - 로그아웃API 호출 구현
 ** 2023-04-26: 임주형 - updateActivated(회원탈퇴)API 호출 구현
 ** 2023-04-26: 임주형 - authorityCheck
 ** 2023-05-06: 임주형 - updatePassword
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

    async authorityCheck(email, password) {
        return await axios.post(fetchUrl.login, {
            "email": email,
            "password": password,
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    },

    async checkPassword(loginUser, password) {
        return await axios.get(fetchUrl.checkPassword, {
            "loginUser": loginUser,
            "password": password
        });
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

    async updateActivated(activated) {
        return await axios.put(fetchUrl.updateActivated, {
            "activated": activated
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },

    /** 
     * @param {string} newPassword 변경할 패스워드
     * @param {string} confirmPassword 비밀번호 일치 확인
    */
    async updatePassword(newPassword, confirmPassword) {
        return await axios.put(fetchUrl.updatePassword, {
            "newPassword": newPassword,
            "confirmPassword": confirmPassword
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },

}
export default fetchAccount;