import React, { FC, HTMLAttributes, ReactChild } from 'react';

import { BlockWrapper } from './styled';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Block: FC<BlockProps> = ({ children }) => {
  return <BlockWrapper>{children}</BlockWrapper>;
};
