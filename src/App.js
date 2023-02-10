import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Main /> }>
          {/* 인덱스 컴포넌트(주소변경없이 화면출력 가능): <Route index element={ <Login /> } /> */}
          <Route path="/login" element={ <Login /> }/>
          <Route path="/register" element= { <Register /> }/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
