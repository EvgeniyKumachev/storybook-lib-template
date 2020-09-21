import type { Theme } from 'theme-ui'
import { merge } from 'theme-ui'

import { defaultTheme } from './theme'

export const createTheme = (overrides: Theme = {}) =>
  merge(overrides, defaultTheme)

export { defaultTheme }
