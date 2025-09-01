import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-login',
  imports: [Nav, Footer],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}

const formRegistro = document.getElementById("formRegistro") as HTMLFormElement;
const formIniciarSesion = document.getElementById("formIniciarSesion") as HTMLFormElement;
const formContraseña = document.getElementById("formContraseña") as HTMLFormElement;

const iniciar = document.getElementById("iniciar") as HTMLButtonElement;
const Registrar = document.getElementById("Registrar") as HTMLButtonElement;
const RecuperarContraseña = document.getElementById("RecuperarContraseña") as HTMLButtonElement;

function mostrarFormulario(formulario: HTMLFormElement): void {
  [formRegistro, formIniciarSesion, formContraseña].forEach((form) => {
    form.classList.remove("active");
  });

  formulario.classList.add("active");
}

iniciar.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  mostrarFormulario(formIniciarSesion);
});

Registrar.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  mostrarFormulario(formRegistro);
});

RecuperarContraseña.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  mostrarFormulario(formContraseña);
});


