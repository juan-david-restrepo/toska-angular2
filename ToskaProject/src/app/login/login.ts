import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Nav, Footer, RouterModule],
  templateUrl: './login.html',
  styleUrl:  './login.css'
})
export class Login {
  
}



