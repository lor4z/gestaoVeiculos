import React from 'react'
import style from './style.module.css'
import { Logo } from '../../Atoms/Logo'
import { Link } from 'react-router-dom'
import { LogoName } from '../../Atoms/LogoName'

export const LogoDashboard = () => {
    return (
        <div className={style.container}>
            <Link to="/Dashboard" className={style.logoLink}>
                <Logo size='78' />
                <LogoName width='147' height='35' marginLeft='15' />
            </Link>
        </div>
    )
}
