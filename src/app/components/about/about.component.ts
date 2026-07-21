import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  age = 0;

  facts = [
    { icon: '🎓', label: 'Opleiding', value: 'Graduaat Programmeren — UCLL' },
    { icon: '📍', label: 'Locatie', value: 'Wilsele, Leuven' },
    { icon: '💼', label: 'Status', value: 'Op zoek naar stage & job' },
    { icon: '⭐', label: 'Favoriet', value: 'C# & Front-End Development' },
  ];

  hobbies = ['🏋️ Fitness', '💻 Thuisprojecten', '✈️ Reizen', '🖥️ Linux & Servers'];

  ngOnInit(): void {
    this.age = this.calculateAge(new Date(2006, 0, 18));
  }

  private calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
