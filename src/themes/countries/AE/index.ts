// import {getTheme} from '../../handlers.ts';
import * as Colors from "./colors.ts";

// export const AE_Theme = getTheme({primary :"#000"});
export const AE_Theme = {
  // ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    secondary: Colors.SECONDARY,
  },
};

export default AE_Theme;
