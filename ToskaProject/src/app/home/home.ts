import { Component, OnInit, OnDestroy, ChangeDetectorRef, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { RouterModule } from '@angular/router';
import { Buscador } from '../shared/components/buscador/buscador';

@Component({
  selector: 'app-home',
  imports: [Nav, Footer, Buscador],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/redDead.jpg' ,
    'assets/images/fornite2.jpg',
    'assets/images/detroit2.jpg',
    'assets/images/theForest.jpg',
  ];

  currentIndex = 0;
  intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.cdr.detectChanges(); 
    }, 5000);
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }


  protected readonly promiciones = signal("Promociones");
  protected readonly masJugados = signal("Mas jugados")  
}

