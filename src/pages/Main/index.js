import React, { useEffect, useState } from 'react';
import fetchNotice from '../../api/fetchNotice';
import Notice from '../../components/Notice';
import Products from '../../components/Products';
import './index.css';

function Main() {
    const [notice, setNotice] = useState([]);
    const [popularItems, setPopularItems] = useState([]);
    const [newItems, setNewItems] = useState([]);

    useEffect(() => {
        // Fetch Datas
        fetchNotice().then(data => {
            // Mock Data
            setNotice(data)
            setPopularItems(data);
            setNewItems(data);
        });
    }, []);

    return (
        <div className="Main">
            <Notice notice={notice}/>
            <h2 className="mt-20 mb-10 font-semibold">인기 상품</h2>
            <Products products={popularItems}/>
            <h2 className="mt-20 mb-10 font-semibold">신상품</h2>
            <Products products={newItems}/>
        </div>
    );
}
export default Main;