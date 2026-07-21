import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  label: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      label: 'Programmeertalen',
      skills: ['JavaScript', 'TypeScript', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
    },
    {
      label: 'Frameworks & Libraries',
      skills: ['Angular', 'Node.js', '.NET'],
    },
    {
      label: 'Database',
      skills: ['MySQL'],
    },
    {
      label: 'Tools & Omgeving',
      skills: ['Git', 'Docker', 'Linux', 'npm', 'VS Code', 'Bruno'],
    },
    {
      label: 'Extra',
      skills: ['REST API\'s', 'CI/CD', 'GitHub Actions', 'Server Hosting', 'NAS Setup'],
    },
  ];
}
