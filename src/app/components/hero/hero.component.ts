import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';

  private titles = [
    'Front-End Developer',
    'Angular Developer',
    'Full-Stack Developer',
    'Software Engineer',
  ];
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.typeWriter();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }

  private typeWriter(): void {
    const current = this.titles[this.currentIndex];

    if (this.isDeleting) {
      this.typedText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.typedText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? 55 : 95;

    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      delay = 350;
    }

    this.typingTimer = setTimeout(() => this.typeWriter(), delay);
  }

  scrollTo(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
