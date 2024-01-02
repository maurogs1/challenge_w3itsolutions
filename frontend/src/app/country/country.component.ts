import { Component, OnInit } from '@angular/core';
import CountryInterface from './interfaces/country.interface';
import { CountryService } from './services/country.service';
import ResponseInterface from '../shared/interfaces/response.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countriesList: CountryInterface[] = [];
  searching: boolean = false;
  search: string = 'India';

  constructor(private countryService: CountryService) { 

  }
  ngOnInit(): void {
    this.searchCountries();
  }

  searchCountries(name?: string) {
    if(name){
      this.search = name;
    }
    this.countriesList = [];
    this.searching = true;
    this.countryService.searchCountries(this.search).subscribe({      
      next: (response: ResponseInterface<CountryInterface[]>): void => {
        if(response){
            this.countriesList = response.data
        }
        this.searching = false;

      },
      error: (error: Error): void => {
        console.log('error', error);
        this.searching = false;
      },
    });
  }
  

  onSearch() {
    this.searchCountries();
  }





}
