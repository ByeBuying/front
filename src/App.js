import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Main from './pages/Main';
import Login from './components/Login';
import RegisterTerms from './components/register/RegisterTerms';
import Header from './components/Header';
import Footer from './components/Footer';
import TextEvent from './components/TextEvent';
import RegisterForm from './components/register/RegisterForm';

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
        </Route>
      </Routes>

    </div>
  );
}

export default App;
