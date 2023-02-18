import axios from 'axios';

/**
 * 신상, 홍보 브랜드, 이벤트 등
 * response
 * id - key
 * imgUrl - 이미지 표시
 * pageUrl - 클릭 시 페이지 이동
 * ?
 */

async function fetchNotice() {
    // Mock
    const axiosInstance = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        params: {
            api_key: "ab5746220110e42f4244c4297285c189",
            language: "ko-KR"
        }
    });

    // HTTP 통신
    const { data: notice } = await axiosInstance.get('/movie/now_playing');

    // 데이터 가공
    const array = [];
    notice.results.map((object) => {
        array.push({
            "id": Math.floor(Math.random()*10000), // test
            "imgUrl": object.poster_path,
            "url": "https://naver.com" // test
        });
    });

    // * async 함수는 항상 Promise를 반환한다.
    return array; // Promise.resolve
}
export default fetchNotice;