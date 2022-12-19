import React from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { Main } from './StoreStyle';

const NavMenu = styled.li`
    color: dodgerblue;
    margin-left: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    text-decoration: none;
    text-decoration-line: none;
    list-style: none;
`

export default function Navbar() {
    return (
        <div>
            <Main>

            <Link to="/">
            <img 
            style={{width:'300px', height:'120px'}}
            src="https://media.discordapp.net/attachments/1051684236299608071/1053532852366626867/logo.png" />

            </Link>

            <Link style={{ textDecoration: 'none' }} to="/store">
                <NavMenu>상점</NavMenu>
            </Link> 

            <Link style={{ textDecoration: 'none' }} to="/store/myitems">
                <NavMenu>내아이템</NavMenu>
            </Link> 

            <Link style={{ textDecoration: 'none' }} to="/store/characters">
                <NavMenu>수집도감</NavMenu>
            </Link> 

            </Main>

        </div>
    );
}

