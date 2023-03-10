import { RootState } from 'store/store';
import { Monster, MonsterBox } from './CalendarStyles';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as API from 'api';
import { setMainCharacter } from './slice/mainCharacter';

const MainMonster = () => {
  const dispatch = useDispatch();
  const monster = useSelector(
    (state: RootState) => state.mainCharacterSlice.main,
  );
  const [move, setMove] = useState<string>('/MonsterGoing.gif');
  const [number, setNum] = useState<number>(1000);
  const email = useSelector((state: RootState) => state.persistedReducer.email);
  //최초 number State만큼 로딩 이미지 보여준 후에 setInterval 시간 재설정

  const getMainChar = async () => {
    try {
      const mainChar = await API.get(`/characterlist/pick/${email}`);
      dispatch(setMainCharacter(mainChar.image.imageGifs));
    } catch (e) {
      setMove('/pokeball.png');
    }
  };

  useEffect(() => {
    getMainChar();
    const time = setTimeout(() => {
      setNum(5000);
    }, number);

    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    if (!move) {
      
      if(!monster.front_default){
        setMove('/pokeball.png');
      }else{
      setMove(monster.front_default);}
    }
    const interval = setInterval(() => {
      const num = Math.floor(Math.random() * 10);
      if (num <= 3) {
        setMove(monster.front_default);
      } else if (4 <= num && num < 7) {
        setMove(monster.front_shiny);
      } else if (7 <= num && num < 10) {
        setMove(monster.back_default);
      }
    }, number);

    return () => clearInterval(interval);
  }, [move]);

  return (
    <MonsterBox>
      <Monster src={move} alt="" />
    </MonsterBox>
  );
};

export default MainMonster;
