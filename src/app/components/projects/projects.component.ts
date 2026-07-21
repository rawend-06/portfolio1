import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  challenge: string;
  tags: string[];
  githubUrl: string | null;
  type: string;
  isGroup: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      number: '01',
      title: 'Werkplekken App',
      subtitle: 'Live data scraping & interactieve Angular applicatie',
      description:
        'Een Angular-webapplicatie die in real-time data scrapt van een externe website. ' +
        'De verwerkte data wordt weergegeven in een interactieve interface die ook dienst doet als spelomgeving. ' +
        'Gebouwd in teamverband met 5 personen in slechts één maand.',
      role:
        'Volledige UI-ontwikkeling in Angular en de koppeling van alle API-calls aan de interface.',
      challenge:
        'Een feature-rijke applicatie realiseren in 1 maand, terwijl de scope normaal meerdere maanden vraagt.',
      tags: ['Angular', 'TypeScript', 'REST API', 'Web Scraping', 'CSS'],
      githubUrl: 'https://github.com/KacperKita1/project_werkplekken',
      type: 'Schoolproject',
      isGroup: true,
    },
    {
      number: '02',
      title: 'Home NAS Linux Server',
      subtitle: 'Zelfgebouwde server, private cloud & hostingplatform',
      description:
        'Zelfgebouwde Linux NAS-server die dienst doet als persoonlijke cloud ' +
        '(vergelijkbaar met OneDrive) en als hostingplatform voor eigen webapplicaties, ' +
        'inclusief netwerkconfiguratie, bestandsbeheer, Docker containers en een CI/CD pipeline via GitHub Actions.',
      role:
        '100% solo — van hardware-setup en OS-installatie tot netwerkconfiguratie en automatisering.',
      challenge:
        'Linux zelfstandig aanleren naast de theorie op school, en alles stabiel en veilig houden.',
      tags: ['Linux', 'Docker', 'GitHub Actions', 'CI/CD', 'Netwerk', 'Self-hosting'],
      githubUrl: null,
      type: 'Persoonlijk project',
      isGroup: false,
    },
  ];
}
