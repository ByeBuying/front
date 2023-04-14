/**
 * History
 ** 2023-04-14: 임주형 - 로그아웃API 호출 구현
 */

import axios from "./lib/axios"
import fetchUrl from "./lib/fetchUrl"

async function fetchLogout() {
    return await axios.post(fetchUrl.logout, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}
export default fetchLogout;