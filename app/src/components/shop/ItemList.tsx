import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import filterCategory from '../../util/filterCategory';
import { createFuzzyMatcher } from '../../util/filterHangul';
import { ItemBox, ItemButton, QuanButton } from './../characters/StoreStyle';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { buyItem, applyItem } from 'pages/characters/statusReducer';
import { useDispatch } from 'react-redux';

function Item({ setItem, item, purpose }: any) {
  const dispatch = useDispatch();
  const currentCoin = useSelector((state: any) => state.statusReducer.coin);
  const [count, setCount] = useState(1);
  return (
    <ItemBox
      onClick={(): void => {
        setItem(item);
      }}
      key={item._id}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '0.3rem',
        }}
      >
        {purpose !== '사용' ? <span>💰 {item.price}</span> : null}
        <span>❤️ +{item.exp}</span>
      </div>

      <div>{item.itemName}</div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {purpose === '구매' ? (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '0.3rem',
              }}
            >
              <QuanButton
                onClick={(e) => {
                  count >= 2
                    ? setCount((cur) => cur - 1)
                    : setCount((cur) => cur);
                }}
              >
                <AiOutlineMinus />
              </QuanButton>
              <span style={{ margin: '0 1.5rem' }}>{count}</span>
              <QuanButton onClick={() => setCount((cur) => cur + 1)}>
                <AiOutlinePlus />
              </QuanButton>
            </div>

            <ItemButton
              onClick={() => {
                const isPurchase = window.confirm(
                  `'${item.itemName}' 아이템을 구매하시겠습니까?`,
                );
                if (isPurchase && currentCoin >= item.price) {
                  dispatch(buyItem(item.price));
                }
              }}
            >
              {`${purpose}`}
            </ItemButton>
          </>
        ) : null}

        {purpose === '사용' ? (
          <>
            <ItemButton
              onClick={() => {
                const isPurchase = window.confirm(
                  `'${item.itemName}' 아이템을 시용하시겠습니까?`,
                );
                if (isPurchase && currentCoin >= item.price) {
                  dispatch(applyItem(item.exp));
                }
              }}
            >
              {`${purpose}`}
            </ItemButton>
          </>
        ) : null}
      </div>
    </ItemBox>
  );
}

function ItemList({ category, inputValue, url, purpose, setItem }: any) {
  const reducerData = useSelector((state: any) => state.itemListReducer);
  const data = reducerData.itemList;
  const itemList =
    inputValue === ''
      ? filterCategory(category, data)
      : data.filter((val: any) => {
          return createFuzzyMatcher(inputValue, val.itemName);
        });
  return (
    <>
      {itemList.map((item: any): JSX.Element => {
        return <Item item={item} setItem={setItem} purpose={purpose}></Item>;
      })}
    </>
  );
}
export default ItemList;
