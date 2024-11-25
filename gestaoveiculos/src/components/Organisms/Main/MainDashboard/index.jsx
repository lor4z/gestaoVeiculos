import React from 'react'
import style from './style.module.css'

import { Text, Title, GraficoImg } from '../../../../components'

export const MainDashboard = () => {
    return (
        <section className={style.container}>
            <div className={style.containerText}>
                <Title size='30' weight='bold' color='#07204F' >Uso do veículo no mês</Title>
                <Text size='30' color='#07204F'>Uso de Veículos nos últimos 30 dias</Text>
            </div>

            <div className={style.containerImg}>
                <GraficoImg size='1000' />
            </div>
        </section>
    )
}
