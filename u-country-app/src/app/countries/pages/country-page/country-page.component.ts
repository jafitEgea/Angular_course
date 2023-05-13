import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(  private activadedRoute: ActivatedRoute,
                private router: Router,
                private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.activadedRoute.params
    .pipe(                      //switchmap sirve para mapear el observable esperado y no tener que colocar todo en el .suscribe
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) ),
     )
    .subscribe( (country) => {
      if( !country ) return this.router.navigateByUrl('');
      //console.log({country});
      return this.country = country;
      }
      //console.log({params: id})
    )
  }

}
