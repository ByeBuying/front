/**
 * History
 ** 2023-03-24: 임주형 - 최초생성
 * @param {string} login /api/login 
 * @param {string} myInformation /api/v1/pub/accounts/my-information
 * @param {string} logout /api/logout
 * @param {string} accountsNormal /api/v1/auth/accounts/normal
 */

const fetchUrl = {
    base: "/api",
    login: "/login",
    logout: "/logout",
    myInformation: "/v1/pub/accounts/my-information",
    accountsNormal: "/v1/auth/accounts/normal"
}
export default fetchUrl;