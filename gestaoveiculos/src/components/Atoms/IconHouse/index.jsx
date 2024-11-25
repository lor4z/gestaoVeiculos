import React from 'react'
import { CustomImage } from './style'
import House from '../../../assets/Icons/IconHouse.png'

export const IconHouse = ({ ...props }) => {
    return (
        <CustomImage image={House} {...props} />
    )
}
