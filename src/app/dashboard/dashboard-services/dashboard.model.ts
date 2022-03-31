export interface ICountries {
  name: IName;
  tld: string[];
  cca2: string;
  unMember: boolean;
  currencies: ICurrency;
  capital: string[];
  region: string;
  subregion: string;
  languages: Object;
  borders: string[];
  flag: string;
  population: number;
  continents: string[];
  flags: IFlag;
}

export interface IName {
  common: string;
  official: string;
  nativeName: Object;
}

export interface IFlag {
  png: string;
  svg: string;
}

export interface ICurrency {
  UYU: {
    name: string;
    symbol: string;
  };
}
