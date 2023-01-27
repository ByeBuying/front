import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Outlet } from 'react-router-dom';

function Main() {
    const [hiddenSearchBar, setHiddenSearchBar] = useState(false);
    const [searchText, setSearchText] = useState("");

    return (
        <div>
            <Header
                hiddenSearchBar={false}
                setHiddenSearchBar={setHiddenSearchBar}
                searchText={""}
                setSearchText={setSearchText}
            />

            <section className="mx-100">
                {/* Components */}
                <Outlet />
            </section>

            <Footer />
        </div>
    );
}
export default Main;