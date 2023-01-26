import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [hiddenSearchBar, setHiddenSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header
        hiddenSearchBar={hiddenSearchBar}
        setHiddenSearchBar={setHiddenSearchBar}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <section className="mx-100">
        {/* Components */}
        <Login />
      </section>

      <Footer />

    </div>
  );
}

export default App;
