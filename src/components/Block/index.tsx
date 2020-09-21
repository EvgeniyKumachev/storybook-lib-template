import React from 'react'
import { Box, BoxOwnProps } from '@theme-ui/components'

export interface BlockProps extends BoxOwnProps {
  /**
   * Test doc prop
   */
  testProp?: string
}

export const Block: React.FC<BlockProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}
