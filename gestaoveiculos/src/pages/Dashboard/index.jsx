import React from 'react'
import { HeaderDashboard, MainDashboard } from '../../components'
import style from './style.module.css'

const Dashboard = () => {


    return (
        <div className={style.container}>
            <HeaderDashboard />
            <MainDashboard />
        </div>
    )
}

export default Dashboard