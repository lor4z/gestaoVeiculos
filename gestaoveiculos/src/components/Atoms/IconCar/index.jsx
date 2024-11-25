import React from 'react'
import { CustomImage } from './style'
import Car from '../../../assets/Icons/IconCar.png'

export const IconCar = ({ ...props }) => {
    return (
        <CustomImage image={Car}  {...props} />
    )
}
