import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CarritoComponent], 
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly juegos = signal("Juegos");
  protected readonly carrito = signal("🛒");

  mostrarCarrito = signal(false);

  toggleCarrito() {
    this.mostrarCarrito.update(val => !val);
  }
}
