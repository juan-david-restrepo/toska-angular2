import { Injectable, signal } from '@angular/core';

export interface Juego {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  // Signal con la lista de juegos en el carrito
  juegos = signal<Juego[]>([]);

  agregarJuego(juego: Juego) {
    this.juegos.update(lista => [...lista, juego]);
  }

  eliminarJuego(id: number) {
    this.juegos.update(lista => lista.filter(j => j.id !== id));
  }

  limpiarCarrito() {
    this.juegos.set([]);
  }
}
