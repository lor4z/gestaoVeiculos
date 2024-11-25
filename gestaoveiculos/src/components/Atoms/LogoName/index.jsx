import React from 'react'
import { CustomImage } from './style'
import NomeLogo from '../../../assets/Logo/NomeLogo.png'

export const LogoName = ({ ...props }) => {
    return (
        <CustomImage image={NomeLogo} sizeW={props.width} sizeH={props.height} {...props} />
    )
}
