import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'u-bases';
  public counter: number = 20;

  increase(): void {
    this.counter ++;
  }

  decrease(): void {
    this.counter --;
  }

  reset(): void {
    this.counter = 20;
  }
}
