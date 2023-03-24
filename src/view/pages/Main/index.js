import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchNotice from '../../../api/fetch/fetchNotice';
import ImgEvent from '../../components/ImgEvent';
import Notice from '../../components/Notice';
import ProductRanking from '../../components/ProductRanking';
import Products from '../../components/Products';

function Main() {
    const [notice, setNotice] = useState([]);
    const [popularItems, setPopularItems] = useState([]);
    const [newItems, setNewItems] = useState([]);
    const [rankingItems, setRankingItems] = useState([]);

    useEffect(() => {
        // Fetch Datas
        fetchNotice().then(data => {
            setNotice(data);
            setPopularItems(data);
            setNewItems(data);
            setRankingItems(data);
        });
    }, []);

    return (
        <Contents>
            <Notice notice={notice}/>
            <StyledHeaderText>인기 상품</StyledHeaderText>
            <Products products={popularItems}/>
            <StyledHeaderText>신상품</StyledHeaderText>
            <Products products={newItems}/>
            <StyledHeaderText></StyledHeaderText>
            <ProductRanking products={rankingItems}/>
            <StyledHeaderText></StyledHeaderText>
            <ImgEvent />
        </Contents>
    );
}
export default Main;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px;
`

const StyledHeaderText = styled.h2`
    margin-top: 80px;
    margin-bottom: 40px;
    font-weight: 600;
`