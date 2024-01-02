import { Component, Input } from '@angular/core';
import CountryInterface from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent {
  
  @Input() countriesList: CountryInterface[] = [];

}
