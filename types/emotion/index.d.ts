import { Theme as LibTheme } from 'theme-ui'

import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
