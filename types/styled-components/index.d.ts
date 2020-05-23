import 'styled-components';

import { Theme } from '@lib/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
