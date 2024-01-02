import { Model, Column, Table, PrimaryKey } from 'sequelize-typescript';
import CountryInterface from '../interfaces/country.interface';

@Table({ tableName: 'countries', timestamps: false })
export class CountryModel extends Model<CountryInterface> {

  @PrimaryKey
  @Column({ type: 'INTEGER', autoIncrement: true })
  id!: number; 

  @Column({ type: 'STRING' })
  name!: string;

  @Column({ type: 'INTEGER' })
  population!: number;

}
