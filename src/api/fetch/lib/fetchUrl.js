/**
 * History
 ** 2023-03-24: 임주형 - 최초생성
 * @param {string} login /api/login 
 * @param {string} myInformation /api/v1/pub/accounts/my-information
 * @param {string} logout /api/logout
 * @param {string} accountsNormal /api/v1/auth/accounts/normal
 * @param {string} updateActivated /api/v1/pub/accounts/update:activated
 */

const fetchUrl = {
    base: "/api",
    login: "/login",
    logout: "/logout",
    myInformation: "/v1/pub/accounts/my-information",
    accountsNormal: "/v1/auth/accounts/normal",
    updateActivated: "/v1/pub/accounts/update:activated"
}
export default fetchUrl;