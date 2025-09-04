import { Component, OnInit } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Nav, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class Home implements OnInit {
  images: string[] = [
    'assets/images/redDead.jpg' ,
    'assets/images/fornite2.jpg',
    'assets/images/detroit2.jpg',
    'assets/images/theForest.jpg',
    
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  stopCarousel() {
    clearInterval(this.intervalId);
  }
  prevImage() {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
}

nextImage() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}

}
