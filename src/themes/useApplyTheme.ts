import {CountryCode} from '../core/types/index.tsx';
import {get} from 'lodash';
import * as Countries from './index.ts';

export const useApplyThem = (countryCode: CountryCode) => {
  let selectedTheme = get(Countries, countryCode);
  // default theme is the UAE 
  if(!selectedTheme) {
    selectedTheme = get(Countries,  CountryCode.UAE);
  }
  return selectedTheme;
};
