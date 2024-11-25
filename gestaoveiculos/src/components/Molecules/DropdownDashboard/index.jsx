import React, { useState } from 'react';
import style from './style.module.css';
import { IconCar, IconCheck, IconGraph, IconHouse, IconProfile, Text, Title } from '../../Atoms';
import { Link } from 'react-router-dom';

export const DropdownDashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isMenuOpen);

        setIsMenuOpen(!isMenuOpen); // Alterna entre abrir e fechar o menu
    };

    return (
        <div className={style.container}>
            <section className={style.perfilCard}>


                <div className={style.placeholderMenu} onClick={toggleMenu} >
                    <div className={style.perfilPhoto}>
                        {/* photo da pessoa */}
                    </div>

                    <div className={style.nameArea}>
                        <Title color='#07204F'>Supervisor</Title>
                        <Text color='#07204FBF'>Rodiney do Vasco</Text>
                    </div>
                </div>


                <ul className={isMenuOpen ? style.menuActive : style.menu}>
                    <Link className={style.rowsContainer} to='/Dashboard'>
                        <li className={style.rows}><IconHouse size='20' />Página inicial</li>
                    </Link>
                    <Link className={style.rowsContainer} to='/Dashboard'>
                        <li className={style.rows}><IconProfile size='20' />Usuários</li>
                    </Link>
                    <Link className={style.rowsContainer} to='/Dashboard'>
                        <li className={style.rows}><IconCar size='20' />Veículos</li>
                    </Link>
                    <Link className={style.rowsContainer} to='/Dashboard'>
                        <li className={style.rows}><IconCheck size='20' />Multas</li>
                    </Link>
                    <Link className={style.rowsContainer} to='/Dashboard'>
                        <li className={style.rows}><IconGraph size='20' />Locações</li>
                    </Link>
                </ul>
            </section>
        </div>
    );
};
