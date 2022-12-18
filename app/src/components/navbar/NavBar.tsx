import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../pages/Login/userSlice';
import * as Nav from './nav';

type IProps = {
  nickname: string;
  point: number;
  onClick: () => void;
};

export const NavBar = () => {
  const user = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  console.log(user);
  const { nickname, point } = user;

  const clickLoginHandler = () => {
    const isLogout = confirm('로그아웃하시겠습니까?');
    if (isLogout) {
      dispatch(logout());
    }
    return;
  };

  return (
    <div>
      {user.isLogin && (
        <StateLogin
          nickname={nickname}
          point={point}
          onClick={clickLoginHandler}
        />
      )}
      {!user.isLogin && <StateLogout />}
    </div>
  );
};

const StateLogin = ({ nickname, point, onClick }: IProps) => {
  return (
    <Nav.TabWrapper>
      <Nav.Tab>{nickname}님 마이페이지</Nav.Tab>
      <Nav.Tab>캐릭터관리</Nav.Tab>
      <Nav.Tab>💰{point}</Nav.Tab>
      <Nav.Tab onClick={onClick}>로그아웃</Nav.Tab>
    </Nav.TabWrapper>
  );
};

const StateLogout = () => {
  return (
    <Nav.TabWrapper>
      <Nav.Tab>로그인</Nav.Tab>
    </Nav.TabWrapper>
  );
};
