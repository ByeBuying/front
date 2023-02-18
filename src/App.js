import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Main from './pages/Main';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import TextEvent from './components/TextEvent';

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
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
