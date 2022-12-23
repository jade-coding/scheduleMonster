import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContentsBox, CharacterContainer, CharacterBox, MonsterStatus} from '../../components/characters/StoreStyle';
import MonsterProfile from 'components/characters/MonsterProfile';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mainImage, mainName } from 'pages/characters/statusReducer';

export default function CharactersList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/pokeMockData/pokemon.json')
        .then((res) => {
            setPokemons(res.data.pokedata);
            setIsLoading(!isLoading);
        });
    }, []);

    // console.log(pokemons);
     
    return (
        <>
            <ContentsBox>
                <CharacterContainer>
                    {isLoading ? 
                    <div style={{display:'flex', alignItems:'center', alignSelf:'center', margin: '0 auto'}}>
                        <h3>Loading...</h3>
                        <img style={{width:'6rem', height:'3rem'}} src="https://weichiachang.github.io/pokemon-master/img/loading.45600eb9.gif" />
                        </div> : 

                        <>
                        {pokemons.map((pokemon: any) => 
                        <CharacterBox 
                        onClick={ () => {
                            navigate(`/store/characters/${pokemon.id}`);
                            const clicked : any = pokemons.find(p=> p.id == pokemon.id);
                            const isMain = window.confirm(`${clicked.name} 포켓몬을 대표 캐릭터로 지정하시겠습니까?`);
                            if (isMain) {
                            dispatch(mainImage(clicked.image));
                            dispatch(mainName(clicked.name));
                            }
                            // console.log(isMain);
                        } }
                        key={pokemon.id}>
                            <img src={pokemon.image}/>
                            <h4 style={{alignSelf:'center'}}>{pokemon.name}</h4> 
                        </CharacterBox>)}
                        </>
                    }
                </CharacterContainer>

                <MonsterProfile/>
            </ContentsBox>
    </>

    );
}
