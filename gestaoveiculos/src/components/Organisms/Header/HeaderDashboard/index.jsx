import React from 'react'
import style from './style.module.css'
import { DropdownDashboard, LogoDashboard } from '../../../Molecules'

export const HeaderDashboard = () => {
    return (
        <nav className={style.container}>
            <LogoDashboard />
            <DropdownDashboard />
        </nav>
    )
}
