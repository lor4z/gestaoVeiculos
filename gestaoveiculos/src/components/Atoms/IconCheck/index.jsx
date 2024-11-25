import React from 'react'
import { CustomImage } from './style'
import LogoImg from '../../../assets/Icons/IconCheck.png'

export const IconCheck = ({ ...props }) => {
    return (
        <CustomImage image={LogoImg}  {...props} />
    )
}
