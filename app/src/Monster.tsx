import React from 'react';
import styled, {css} from 'styled-components';
import axios from 'axios';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Items from './pages/characters/Items';
import MyItems from './pages/characters/MyItems';
import CharactersList from './pages/characters/CharactersList';
import Root from './pages/characters/Root';

const router = createBrowserRouter([
  {
    path:'/',
    element: <h1>메인페ㅇㅣ지</h1>
},
  {
    path:'/store',
    element: <Root />,
    errorElement : <p>페이지를 찾을 수 없습니다😭</p>,
    children: [
      {index : true, element : <Items></Items>},
      {path : '/store/characters', element:<CharactersList></CharactersList>},
      {path : '/store/myitems', element:<MyItems></MyItems>}
    ]
  }

])


export default function Monster() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}



{/* <Main>
<Store>
  <Menubar>
    <li>상점</li>
    <li>도감</li>
    <li>내 아이템</li>
    <div>리스트

    </div>
  </Menubar>

  <MonsterProfile>
    <MonsterImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png">
    </MonsterImage>
  </MonsterProfile>

              
</Store>
</Main> */}