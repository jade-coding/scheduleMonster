import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/characters/Navbar';

export default function Root() {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet />
        </div>
    );
}

