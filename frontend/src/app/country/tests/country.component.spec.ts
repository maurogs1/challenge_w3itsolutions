import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryComponent } from '../country.component';
import { CountryService } from '../services/country.service';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { CountriesTableComponent } from '../components/countries-table/countries-table.component';
import { FormsModule } from '@angular/forms';
import { PercentageFormatPipe } from '../../shared/pipes/percentaje.pipe';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent, SpinnerComponent, CountriesTableComponent, PercentageFormatPipe],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [CountryService],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent); // este me crea el componente
    component = fixture.componentInstance; // este me da la instancia
    httpMock = TestBed.inject(HttpTestingController); // este me da el mock del http
    fixture.detectChanges(); // esto me actualiza la vista
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should search India ', async () => {
    const indiaResult = {
      name: 'India',
      percentage: '25.765616373743633',
      population: 1393409038,
    };
  
    component.searchCountries('India');
  
    const request = httpMock.match('http://localhost:8080/countries?name=India');
    expect(request[0].request.method).toBe('GET');
  
    request[0].flush({ data: [indiaResult] });
  
    expect(component.countriesList).toEqual([indiaResult]);
  });

  test('the table should show the data of India', async () => {
    const indiaResult = {
      name: 'India',
      percentage: '25.765616373743633',
      population: 1409902000,
    };
    component.searchCountries('Indonesia');
    const request = httpMock.expectOne('http://localhost:8080/countries?name=India');
    expect(request.request.method).toBe('GET');

    request.flush({ data: [indiaResult] });
    expect(component.countriesList).toEqual([indiaResult]);

    fixture.detectChanges(); 


    const table = fixture.nativeElement.querySelector('table');
    const tableBody = table.querySelector('tbody');
    const tableRow = tableBody.querySelector('tr');
    const tableData = tableRow.querySelectorAll('td');
    expect(tableData[0].textContent.trim()).toBe(indiaResult.name);
    expect(tableData[1].textContent.trim()).toBe('1,409,902,000');
    expect(tableData[2].textContent.trim()).toBe('25.76%');


  });
  test('should show "No se encontraron registros" when no results are found', async () => {
    component.searchCountries('Hola');
    const request = httpMock.expectOne('http://localhost:8080/countries?name=Hola');
    expect(request.request.method).toBe('GET');
    
    request.flush({ data: [] });
    expect(component.countriesList).toEqual([]);

    fixture.detectChanges();
    const noResultsMessage = fixture.nativeElement.querySelector('#no-results');
    expect(noResultsMessage).toBeTruthy();
    expect(noResultsMessage.textContent.trim()).toBe('No se encontraron registros');
  });
});
