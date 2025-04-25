import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-jobcards',
  templateUrl: './jobcards.component.html',
  styleUrls: ['./jobcards.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class JobcardsComponent {
  jobs = [
    {
      title: 'Frontend Developer',
      image: 'https://avatar.iran.liara.run/public/6',
      description:
        'Work with modern frontend frameworks to build engaging user interfaces.',
      postedDate: 'Posted on April 20, 2025', // Add posted date for this job
    },
    {
      title: 'Backend Developer',
      image: 'https://avatar.iran.liara.run/public/girl',
      description: 'Design and maintain scalable APIs and backend services.',
      postedDate: 'Posted on April 18, 2025', // Add posted date for this job
    },
    {
      title: 'UX Designer',
      image: 'https://avatar.iran.liara.run/public/32',
      description: 'Create user-friendly designs and improve user experience.',
      postedDate: 'Posted on April 22, 2025', // Add posted date for this job
    },
  ];
}
