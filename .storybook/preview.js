import React from 'react'
import { ThemeProvider } from '@emotion/react'
import {
  StoryContext,
  StoryGetter,
  StoryWrapper,
  useGlobals,
} from '@storybook/addons'

import { createTheme } from '../src/styles/theme'

export const globalTypes = {
  theme: { ...createTheme() },
}

console.log(globalTypes.theme)

const withThemeProvider = (Story, context) => {
  const theme = context.parameters.globalTypes.theme
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]
