import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountryComponent,
    CountriesTableComponent

  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CountryComponent
  ]

})
export class CountryModule { }
