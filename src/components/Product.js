import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
        <Container>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg' />
            <ActionSection>
                <ProductInfo>
                    <Title>
                        2020 Apple iPad Pro
                    </Title>
                    <Rating>
                        ⭐⭐⭐⭐⭐ 9,846
                    </Rating>
                    <Price>
                        $1,099.00
                    </Price>
                </ProductInfo>
                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    );
}

export default Product;

// STYLED COMPONENTS BELOW:

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    padding-bottom: 10px;
    max-height: 200px;
    object-fit: contain;
`;

const ActionSection = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductInfo = styled.div`
`;

const Title = styled.span`
    font-weight: 500;
`;

const Price = styled.span`
    margin-top: 3px;
    font-size: 0.90rem;
`;

const Rating = styled.div`
    font-size: small;
    padding: 5px 0;
`;

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`;


