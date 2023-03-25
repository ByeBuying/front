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

function Layout() {
  return (
    <div>
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
          <Route index element={<Main />}/>
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
