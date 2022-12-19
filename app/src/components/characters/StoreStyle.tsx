import styled from 'styled-components';

//나브바 메인
export const Main = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5rem;
`

//상점 메인 페이지
export const ContentsBox = styled.div`
    background-color: #85A6FC;
    border-radius: 1rem;
    height: 75vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: 0 2rem;
    padding: 1rem;
`
export const MonsterProfile = styled.div`
    background-color: white;
    width: 30%;
    height: 80%;
    border-radius: 1rem;
    padding: 1rem;
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: hidden;

`

export const MonsterImage = styled.div`
    width: 15rem;
    height: 15rem;
    background-color: aliceblue;
    border-radius: 50%;
    margin-bottom: 1.5rem;
`

export const MonsterStatus = styled.div`
    background-color: aliceblue;
    width: 15rem;
    height: 10rem;
    border-radius: 1rem;
    padding: 1rem;
`

export const ItemList = styled.div`
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 60%;
    height: 80%;

`

//아이템 리스트

export const ItemContainer = styled.div`
    /* background-color: cadetblue; */
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow: hidden;
    overflow-y: hidden;

`

export const CategoryBox = styled.div`
    background-color: #A2BCFE;
    box-sizing: border-box;
    width: 100%;
    border-radius: 1rem;

    flex-shrink: 0;

    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    /* align-items: center; */

    overflow-x: scroll;

`
export const ItemBox = styled.div`
    background-color: aliceblue;
    width: 130px;
    height: 150px;
    margin: 1rem;

    flex-shrink: 0;
    
`

//수집도감 리스트

export const CharacterContainer = styled.div`
    background-color: white;
    border-radius: 1rem;
    width: 95%;
    height: 80%;

    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    padding: 1rem;
`
export const CharacterBox = styled.div`
    background-color: aliceblue;
    width: 6rem;
    height: 8rem;
    margin: 1rem 0.5rem;
    flex-shrink: 0;

`