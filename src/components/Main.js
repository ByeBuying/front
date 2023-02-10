import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Outlet } from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header />

            <section>
                {/* Components */}
                <Outlet />
            </section>

            <Footer />
        </div>
    );
}
export default Main;