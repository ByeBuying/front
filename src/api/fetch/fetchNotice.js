import axios from 'axios';

// TODO: 실제 공지 데이터 호출 API로 구현 필요
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