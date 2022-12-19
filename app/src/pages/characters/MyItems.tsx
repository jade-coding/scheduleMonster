import React from 'react';
import ItemCard from '../../components/characters/ItemCard';
import { ContentsBox, MonsterProfile, MonsterStatus, MonsterImage, ItemList, ItemBox, CategoryBox } from '../../components/characters/StoreStyle';

export default function MyItems() {
    return (
        <ContentsBox>
            
            <ItemList>내가 보유한 아이템들
                <ItemCard></ItemCard>
            </ItemList>

            <MonsterProfile>
                <MonsterImage>
                    <img style={{width:'15rem', height:"15rem"}} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png" />
                </MonsterImage>

                <MonsterStatus>
                    <ul>
                        <li>이름 : 메타몽</li>
                        <li>애정도 : ❤️ 200  </li>
                    </ul>
                </MonsterStatus>
            </MonsterProfile>

        </ContentsBox>
    );
}

