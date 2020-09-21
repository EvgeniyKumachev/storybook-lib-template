import React, { HTMLAttributes } from 'react'

import { BlockWrapper } from './styled'

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Test doc prop
   */
  testProp?: string
}

export const Block: React.FC<BlockProps> = ({ children, ...props }) => {
  return <BlockWrapper {...props}>{children}</BlockWrapper>
}
