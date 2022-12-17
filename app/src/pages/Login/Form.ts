import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  cursor: pointer;
  width: 200px;
`;

export const Tab = styled.p<{ active: boolean }>`
  text-align: center;
  font-size: 20px;
  ${(props) =>
    props.active &&
    css`
      color: #a2bcfe;
    `}
`;

export const Label = styled.label`
  font-size: 13px;
  display: inline-block;
`;

export const Input = styled.input`
  width: 330px;
  height: 28px;
  text-indent: 15px;
  border: 1px solid #a2bcfe;
  border-radius: 8px;
  margin: 12px 0;
  box-sizing: border-box;
`;

export const SubminInput = styled.input.attrs({ type: 'submit' })`
  width: 330px;
  height: 30px;
  margin-top: 18px;
  background-color: #a2bcfe;
  border: none;
  border-radius: 8px;
  :hover {
    background-color: #85a6fc;
  }
`;

export const Title = styled.h5`
  font-size: 20px;
`;

export const Error = styled.p`
  color: #d23e3e;
  font-size: 13px;
  margin-left: 15px;
`;
