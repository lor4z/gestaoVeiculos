import React from 'react'
import { CustomText } from '../Text/style'

export const Title = ({ children, ...props }) => {
  return (
    <CustomText {...props} >{children}</CustomText>

  )
}
