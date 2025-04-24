import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HomeAboutComponent } from '../components/home-about/home-about.component';
import { IonicModule } from '@ionic/angular';
import { NavComponent } from '../components/nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NavComponent],
})
export class HomePage {
  constructor() {}
}
