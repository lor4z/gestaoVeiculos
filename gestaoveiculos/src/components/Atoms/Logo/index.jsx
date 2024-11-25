import React from 'react'
import { CustomImage } from './style'
import LogoImg from '../../../assets/Logo/Logo.png'

export const Logo = ({ ...props }) => {
    return (
        <CustomImage image={LogoImg} size={props.size} {...props} />
    )
}
