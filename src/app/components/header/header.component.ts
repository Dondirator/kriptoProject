import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isActive = false;
  onBurgerClick() {
    this.isActive = !this.isActive;
  }
}
