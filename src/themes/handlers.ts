import {useApplyThem} from './useApplyTheme.ts';

export const getTheme = (Colors: any) => {
  const theme = {
    colors: {
      primary: Colors.PRIMARY,
      secondary: Colors.SECONDARY,
    },
  };
  return theme;
};

export const getSelectedTheme = ({CountryCode}) => {
  return useApplyThem(CountryCode);
};
