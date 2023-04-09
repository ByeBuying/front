import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Main from './view/pages/Main';
import Login from './view/components/Login';
import RegisterTerms from './view/components/register/RegisterTerms';
import Header from './view/components/Header';
import Footer from './view/components/Footer';
import TextEvent from './view/components/TextEvent';
import RegisterForm from './view/components/register/RegisterForm';
import MyPage from './view/pages/MyPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MessageToastState from './model/common/messageToast/code/MessageToastState';
import MessageToast from './view/components/modal/MessageToast';
import fetchMyInformation from './api/fetch/fetchMyInformation';

function Layout() {
  const [openMessageToast, setOpenMessageToast] = useState(false);
  const messageToast = useSelector(state => state.MessageToast);
  const loginUser = useSelector(state => state.LoginUser);
  const dispatch = useDispatch();

  // 로그인 상태 확인
  useEffect(() => {
    if(loginUser.data !== null) {
      dispatch(fetchMyInformation(loginUser.data));
    }
  }, [loginUser]);

  // MessageToast
  useEffect(() => {
    if (messageToast.code === MessageToastState.SHOW) setOpenMessageToast(true);
    else if (messageToast.code === MessageToastState.CLOSE) setOpenMessageToast(false);
  }, [messageToast]);

  return (
    <div>
      <div className='flex justify-center'>
        {openMessageToast && (<MessageToast message={messageToast.message} />)}
      </div>
      <TextEvent pageLink={'/'} />
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterTerms />} />
          <Route path="/registerForm" element={<RegisterForm />} />
          <Route path="/myPage" element={<MyPage />} />
        </Route>
      </Routes>

    </div>
  );
}
export default App;
