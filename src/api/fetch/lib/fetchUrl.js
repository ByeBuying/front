/**
 * History
 ** 2023-03-24: 임주형 - 최초생성
 * @param {string} login /api/login 
 * @param {string} myInformation /api/v1/pub/accounts/my-information
 * @param {string} logout /api/logout
 * @param {string} accountsNormal /api/v1/auth/accounts/normal
 * @param {string} updateActivated /api/v1/pub/accounts/update:activated
 * @param {string} updatePassword /api/v1/pub/accounts/update:password
 * @param {string} checkPassword /api/v1/pub/accounts/check:password
 */

const fetchUrl = {
    base: "/api",
    login: "/login",
    logout: "/logout",
    myInformation: "/v1/pub/accounts/my-information",
    accountsNormal: "/v1/auth/accounts/normal",
    updateActivated: "/v1/pub/accounts/update:activated",
    updatePassword: "/v1/pub/accounts/update:password",
    checkPassword: "/v1/pub/accounts/check:password"
}
export default fetchUrl;