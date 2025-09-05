import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Buscador } from '../shared/components/buscador/buscador';

@Component({
  selector: 'app-explorar',
  imports: [Nav, Footer, Buscador],
  templateUrl: './explorar.html',
  styleUrl: './explorar.css'
})
export class Explorar {
  protected readonly fifa = signal("Fifa 30");
  protected readonly precion = signal("40000")  
}
