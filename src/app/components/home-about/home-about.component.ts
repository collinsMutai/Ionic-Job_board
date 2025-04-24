import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class HomeAboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
