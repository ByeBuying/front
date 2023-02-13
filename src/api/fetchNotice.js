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

    // 데이터 가공 후 바로 return하면 Promise 객체가 아니기 때문에 컴포넌트에서 못받음
    // (Notice 컴포넌트에서 fetchNotice() 호출해도 즉시 다음코드 실행하기때문에 빈 배열로 인식함)
    return new Promise((resolve, reject) => {
        resolve(array);
    });
}
export default fetchNotice;