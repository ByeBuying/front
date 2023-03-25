import React, { useRef } from 'react'
import styled from 'styled-components';

function Products({ products }) {
    const productDivRef = useRef(null);

    const scrollTo = (direction) => {
        if (direction === "right") {
            productDivRef.current.scrollTo({
                left: productDivRef.current.scrollLeft + productDivRef.current.offsetWidth,
                behavior: "smooth"
            });
        } else if (direction === "left") {
            productDivRef.current.scrollTo({
                left: productDivRef.current.scrollLeft - productDivRef.current.offsetWidth,
                behavior: "smooth"
            });
        }
    }

    return (
        <Contents>
            <NavigationDiv>
                <span className="cursor-pointer font-semibold text-xl" onClick={() => scrollTo("left")}>{"<"}</span>
            </NavigationDiv>

            <ProductDiv ref={productDivRef}>
                {products.map((data) => (
                    <SliderDiv>
                        <ProductImg
                            key={data.id}
                            src={`https://image.tmdb.org/t/p/original/${data.imgUrl}`}
                            alt="Product"
                        />
                        <ProductInfoDiv>
                            <p>피그먼트</p>
                            <p>골덴셔링원피스</p>
                            <p className=" line-through">50,000원</p>
                            <p className="">49,300</p>
                        </ProductInfoDiv>
                    </SliderDiv>
                ))}
            </ProductDiv>

            <NavigationDiv>
                <span className="cursor-pointer font-semibold text-xl" onClick={() => scrollTo("right")}>{">"}</span>
            </NavigationDiv>
        </Contents>
    )
}
export default Products;

const Contents = styled.div`
    display: flex;
    width: 100%;
    height: 350px;
`

const ProductDiv = styled.div`
    display: flex;
    width: 90%;
    overflow-x: hidden;
    gap: 20px;
`

const SliderDiv = styled.div`
    min-width: max-content;
`

const ProductImg = styled.img`
    width: 200px;
    height: 60%;
    border-radius: 15px;
`

const ProductInfoDiv = styled.div`
    height: 40%;
`

const NavigationDiv = styled.div`
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`