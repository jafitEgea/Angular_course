import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public oracion: string = 'bal';
  public mensaje: string = 'jajaj';

  changeOracion(): void {
    this.oracion = 'asadf';
    this.mensaje = 'glkjgk';
  }

  changeMensaje(): void {
    this.mensaje = `${this.oracion}  -- ${this.mensaje.toUpperCase()}`;
  }
}
