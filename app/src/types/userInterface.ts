export interface IUser {
  nickname: string;
  email: string;
  point: number;
  auth: string;
}

export interface ILogin {
  userEmail: string;
  userPw: string;
}

export interface IRegister {
  nickname: string;
  email: string;
  password: string;
}
