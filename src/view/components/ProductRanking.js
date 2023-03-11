import React from 'react';
import styled from 'styled-components';

function ProductRanking({ products }) {
    return (
        <Contents>
            <TextDiv>
                <p className="font-semibold">실시간 쇼핑몰 랭킹</p>
                <p className="text-xs">더보기{" >"}</p>
            </TextDiv>
            <ProductsDiv>
                {products.map((data) => (
                    <ImgDiv>
                        <StyledImg
                            key={data.id}
                            src={`https://image.tmdb.org/t/p/original/${data.imgUrl}`}
                            alt="Product"
                        />
                    </ImgDiv>
                ))}
            </ProductsDiv>
        </Contents>
    )
}

export default ProductRanking;

const Contents = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    overflow: hidden;
    gap: 30px;
`

const TextDiv = styled.div`
    min-width: max-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`

const ProductsDiv = styled.div`
    min-width: max-content;
    height: 100%;
    display: flex;
    gap: 30px;
`

const ImgDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`