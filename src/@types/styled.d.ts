import { lightTheme } from "@/styles/themes/light-theme";
import { defaultTheme } from "@/styles/themes/default";

import "styled-components";

type ThemeType = typeof defaultTheme | typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
  export interface LightTheme extends ThemeType {}
}
