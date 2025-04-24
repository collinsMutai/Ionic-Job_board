import { Component } from '@angular/core';
import { MenuController, IonicModule } from '@ionic/angular'; // Import the MenuController


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class NavComponent {
  menuOpen = false; // State to track whether the menu is open or closed

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the state of the menu
  }
}
