import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarritoService } from '../../../services/carrito.service';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor, CarritoComponent],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  constructor(public carritoService: CarritoService) {}
}
