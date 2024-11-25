import React from 'react'
import { CustomImage } from './style'
import Graph from '../../../assets/Icons/IconGraph.png'

export const IconGraph = ({ ...props }) => {
    return (
        <CustomImage image={Graph}  {...props} />
    )
}
