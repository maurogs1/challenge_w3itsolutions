import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CountryInterface from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import ResponseInterface from '../../shared/interfaces/response.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { 

  }

  searchCountries(name: string): Observable<ResponseInterface<CountryInterface[]>> {
    return this.http.get<ResponseInterface<CountryInterface[]>>(`${this.apiUrl}/countries?name=${name}`);

  }


}
