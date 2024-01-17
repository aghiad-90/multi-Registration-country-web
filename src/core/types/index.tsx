export interface TextInputProps {
  placeholder: string;
  value: string;
  showSecureText?: boolean;
  secureTextEntry?: boolean;
  onChangeText: Function;
  style?: any;
  error: any;
  control: any;
  name: string;
}

export enum CountryCode {
  UAE = 'AE',
  INDIA = 'IN',
  EGYPT = 'EG',
  SPAIN = 'ES',
}

export enum LanguageCode {
  English = 'en',
  Arabic = 'ar',
  Spanish = 'es',
  India = 'hi'
}
