export type CountryName = {
    official: string;
    common: string;
}

export type Country = {
    flag: string,
    name: CountryName;
    capital?: string[];
    region?: string;
    population?: number;
    languages?: Record<string, string>
}