import CountryInterface from "../interfaces/country.interface";
import { CountryModel } from "../models/country";
import { Op } from "sequelize";

class CountryRepository {

  async searchCountriesByName(name: string): Promise<CountryInterface[]> {
    let countries = await CountryModel.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`, 
        },
      },
      limit: 5, 
    });

    return countries;
  }

  async getTotalPoblation(): Promise<number> {
    let countries = await CountryModel.findAll();
    let total_poblation = 0;
    countries.forEach(country => {
      total_poblation += country.population;
    });
    return total_poblation;
  }

}

export default new CountryRepository();
