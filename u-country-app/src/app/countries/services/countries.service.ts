import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {
    
    private apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCapital( term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${term}`;
        return this.http.get<Country[]>(url)
        .pipe(                             //Con .pipe se puede usar catchError(), .tap() y hasta .map()
            catchError( () => of([]))      //Capturamos el error en caso no se encuentren resultados y devolvemos un arreglo vacio --> of([])
        );
    }

    searchCountry( term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${term}`;
        return this.http.get<Country[]>(url)
        .pipe(                             //Con .pipe se puede usar catchError(), .tap() y hasta .map()
            catchError( () => of([]))      //Capturamos el error en caso no se encuentren resultados y devolvemos un arreglo vacio --> of([])
        );
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null>{ 
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(url)
        .pipe(                    
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError( () => of(null))      //Capturamos el error en caso no se encuentren resultados y devolvemos null --> of(null)
        );
    }
    
    searchRegion( region: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${region}`;
        return this.http.get<Country[]>(url)
        .pipe(                             //Con .pipe se puede usar catchError(), .tap() y hasta .map()
            catchError( () => of([]))      //Capturamos el error en caso no se encuentren resultados y devolvemos un arreglo vacio --> of([])
        );
    }
    
}