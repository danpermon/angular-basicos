import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan','IronMan','Hulk','Thor','Dani'];
  heroeBorrado: string = '';

  borrarHeroe() {
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }
}
