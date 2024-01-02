import CountryDTO from "@/interfaces/country.dto";
import CountryInterface from "../interfaces/country.interface";


export const percentageFromTotalPoblation = (countries: CountryInterface[], total_poblation: number): CountryDTO[] => {
    return countries.map(country => ({
        name: country.name,
        percentage: ((country.population * 100) / total_poblation).toString(),
        population: country.population
    }));
};