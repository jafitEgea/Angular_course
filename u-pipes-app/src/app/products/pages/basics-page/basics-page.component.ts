import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameUpper: string = 'jafitdev';
  public nameLower: string = 'JafitDev';
  public nameTitle: string = 'JaFiTdEv';

  public customDate: Date = new Date();

}
