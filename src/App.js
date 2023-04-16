import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './view/pages/Main';
import Login from './view/components/Login';
import RegisterTerms from './view/components/register/RegisterTerms';
import RegisterForm from './view/components/register/RegisterForm';
import MyPage from './view/pages/MyPage';
import AccountActivation from './view/components/AccountActivation';
import Layout from './view/pages/Layout';

/**
 * 
 * @returns 
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
            <Route path="myPage" element={<MyPage />} />
            <Route path="inActivate" element={<AccountActivation />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
