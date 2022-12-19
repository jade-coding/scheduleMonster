import React from 'react';
import { ItemBox,ItemContainer,CategoryBox } from './StoreStyle';

export default function ItemCard() {
    return (
        <ItemContainer>
            <CategoryBox>
            <ItemBox></ItemBox>
            <ItemBox></ItemBox>
            <ItemBox></ItemBox>
            </CategoryBox>
        
        </ItemContainer>
    );
}

