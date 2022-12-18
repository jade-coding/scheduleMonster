import styled from 'styled-components';

export const TabWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 20px;
  > div:first-child {
    border: none;
  }
`;

export const Tab = styled.div`
  padding: 0 20px;
  border-left: 1px solid #999;

  :hover {
    text-decoration: underline;
  }
`;
