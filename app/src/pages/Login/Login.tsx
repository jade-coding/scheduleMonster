import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import * as API from '../../api';
import * as Style from './Form';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import { IUser, ILogin, IRegister } from '../../types/userInterface';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errorContent, setErrorContent] = useState('');
  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  let userInfo: ILogin = { userEmail: '', userPw: '' };

  const loginSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    userInfo = { userEmail: email, userPw: pw };
    console.log('userInfo : ', userInfo);

    //로그인 토큰 확인 후 정보 있으면 ok 없으면 정보 없음 띄어주기
    //에러 항목 어떻게 오는지 보고 띄워주기
    const { token, auth, nickname, point } = await API.post(
      '/users/login',
      userInfo,
    );

    if (!token) {
      const error = '아이디 또는 비밀번호가 일치하지 않습니다.';
      setErrorContent(error);
    }
    console.log('auth', auth);
    if (token) {
      const user: IUser = {
        email,
        nickname,
        point,
        auth,
      };
      dispatch(login(user));
    }
    //경로확인하기
    //관리자,일반사용자 구분해서 경로 변경
    // if (auth === 'user') {
    //   navigate('/calendar');
    // } else if (auth === 'admin') {
    //   navigate('/admin');
    // }
  };
  return (
    <Style.Form onSubmit={loginSubmitHandler}>
      <Style.Label htmlFor="userId">아이디</Style.Label>
      <Style.Input
        type="email"
        name="userId"
        placeholder="이메일 형식의 아이디를 입력해주세요"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Style.Label htmlFor="userPw">비밀번호</Style.Label>
      <Style.Input
        type="password"
        name="userPw"
        placeholder="비밀번호를 입력해주세요"
        required
        onChange={(e) => setPw(e.target.value)}
      />
      {errorContent}
      <Style.SubminInput type="submit" value="로그인" />
    </Style.Form>
  );
};

const Resgister = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [isEqual, setIsEqual] = useState(false);

  let registerInfo: IRegister = { nickname: '', email: '', password: '' };

  const registerSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    registerInfo = {
      nickname,
      email,
      password: pw,
    };
    console.log('register info : ', registerInfo);

    //회원가입 api 요청
    //회원가입시 발생할 수 있는 오류
    //이미 있는 이메일인 경우,
    //닉네임중복?
    await API.post('/users', registerInfo);

    //회원가입 시 경로 변경
  };

  useEffect(() => {
    if (confirmPw === pw) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  }, [confirmPw]);

  return (
    <Style.Form onSubmit={registerSubmitHandler}>
      <Style.Label htmlFor="nickname">닉네임</Style.Label>
      <Style.Input
        type="text"
        name="nickname"
        placeholder="닉네임을 작성해주세요"
        required
        onChange={(e) => {
          setNickname(e.target.value);
        }}
      />
      <Style.Label htmlFor="email">아이디</Style.Label>
      <Style.Input
        type="email"
        name="email"
        placeholder="이메일 형식의 아이디를 입력해주세요"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Style.Label htmlFor="password">비밀번호</Style.Label>
      <Style.Input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        required
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <Style.Label htmlFor="confirmPassword">비밀번호 재확인</Style.Label>
      <Style.Input
        type="password"
        name="confirmPassword"
        placeholder="비밀번호를 다시 입력해주세요"
        required
        onChange={(e) => {
          setConfirmPw(e.target.value);
        }}
      />
      <Style.Error>{!isEqual && '비밀번호가 일치하지 않습니다.'}</Style.Error>
      <Style.SubminInput type="submit" value="회원가입" />
    </Style.Form>
  );
};

export const LoginRegister = () => {
  const [currTab, setCurrTab] = useState('login');

  return (
    <Style.Container>
      <Style.Title>로그인 또는 회원가입</Style.Title>
      <Style.Tabs>
        <Style.Tab
          active={currTab === 'login'}
          onClick={() => setCurrTab('login')}
        >
          로그인
        </Style.Tab>
        <Style.Tab
          active={currTab === 'register'}
          onClick={() => setCurrTab('register')}
        >
          회원가입
        </Style.Tab>
      </Style.Tabs>
      {currTab === 'login' ? <Login /> : <Resgister />}
    </Style.Container>
  );
};
