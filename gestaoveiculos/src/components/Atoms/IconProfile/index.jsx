import React from 'react'
import { CustomImage } from './style'
import Profile from '../../../assets/Icons/IconProfile.png'

export const IconProfile = ({ ...props }) => {
    return (
        <CustomImage image={Profile} {...props} />
    )
}
