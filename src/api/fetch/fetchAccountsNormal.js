import axios from './lib/axios';
import fetchUrl from './lib/fetchUrl';

/**
 * History
 ** 2023-03-24: 임주형 - 일반회원가입 호출 API 구현
 */

async function fetchAccountsNormal({ email, name, password, birthDay }) {
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
}
export default fetchAccountsNormal;