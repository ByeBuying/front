import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './view/pages/Main';
import Login from './view/components/login/Login';
import RegisterTerms from './view/components/register/RegisterTerms';
import RegisterForm from './view/components/register/RegisterForm';
import MyPage from './view/pages/MyPage';
import Layout from './view/pages/Layout';
import UnregisterComplete from './view/components/unregister/UnregisterComplete';
import Inactivate from './view/components/login/Inactivate';
import RegisterComplete from './view/components/register/RegisterComplete';

/**
 ** History
 * 2023-01-26: 임주형 - 최초 생성
 * 2023-04-16: 임주형 - Layout 컴포넌트와 분리
 * 설명
 ** 라우팅 전용 컴포넌트
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterTerms />} />
            <Route path="registerForm" element={<RegisterForm />} />
            <Route path="registerComplete" element={<RegisterComplete />} />
            <Route path="myPage" element={<MyPage />} />
            <Route path="inactivate" element={<Inactivate />} />
          </Route>
          <Route path="unregisterComplete" element={<UnregisterComplete />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
