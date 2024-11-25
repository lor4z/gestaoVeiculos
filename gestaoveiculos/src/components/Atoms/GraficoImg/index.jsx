import React from 'react'
import { CustomImage } from './style'
import Grafico from '../../../assets/Grafico.png'

export const GraficoImg = ({ ...props }) => {
    return (
        <CustomImage image={Grafico}  {...props} />
    )
}
