import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';

export const ModalContainer = styled.div`
  width: 397px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  padding: 20px;
  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  border-radius: 14px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 25px;
`;

export const TabBox = styled.div`
  display: flex;
  padding: 0;
  width: 150px;
  margin-bottom: 20px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
`;

export const Tab = styled.div<{ active: boolean }>`
  display: flex;

  cursor: pointer;
  font-size: 20px;
  line-height: 20px;
  width: 50%;
  padding: 0;

  ${(props) =>
    props.active &&
    css`
      color: #a2bcfe;
      font-weight: bold;
    `}
`;

export const PickColor = styled.button<{ labelColor: string }>`
  cursor: pointer;
  margin-left: 10px;
  width: 55px;
  height: 33px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  ${(props) =>
    props.labelColor &&
    css`
      background-color: ${props.labelColor};
    `}
`;

export const SchedulePicker = styled(DatePicker)`
  width: 100%;
  height: 33px;
  font-size: 12px;
  border: 1px solid #a2bcfe;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: center;
`;
export const ScheduleBox = styled.div`

  display: flex;
  height: 33px;
  align-items: center;
  justify-content: center;
`;

export const SelectCal = styled.select`
  width: 332px;
  height: 33px;
  border: 1px solid #a2bcfe;
  border-radius: 8px;
  text-indent: 15px;
`;

export const ErrorWord=styled.small`
margin-left: 14px;
color: #D83167;
font-weight: bold;
`