import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images: string[] = [
    'https://images.freeimages.com/images/previews/c86/sorrento-italy-1468063.jpg',
    'https://images.freeimages.com/images/previews/218/my-dog-cutter-1499799.jpg',
    'https://images.freeimages.com/images/previews/6bd/laundry-1522596.jpg',
  ];

  slidingImagesHeight = 0; // initialize the property to a default value
  bottomSectionHeight = 0; // initialize the property to a default value
  currentIndex = 0;
  banner_image= 'https://images.freeimages.com/images/previews/5ae/land-from-above-4-1636747.jpg'
  ngOnInit(): void {
    this.calculateHeights();
    setInterval(() => {
      this.slideImages();
    }, 2000);
  }

 slideImages() {
  this.currentIndex++;
  if (this.currentIndex === this.images.length) {
    this.currentIndex = 0;
  }
}
  calculateHeights() {
    const screenHeight = window.innerHeight;
    this.slidingImagesHeight = screenHeight * 0.92;
    this.bottomSectionHeight = screenHeight * 0.08;
  }
}
