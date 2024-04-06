import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLang: string = 'RU';

  constructor(public translateService: TranslocoService) {}
  public update() {
    if (this.currentLang === 'RU') {
      this.translateService.setActiveLang('en');
      this.currentLang = 'EN';
    } else {
      this.translateService.setActiveLang('ru');
      this.currentLang = 'RU';
    }
  }

  isActive = false;
  onBurgerClick() {
    this.isActive = !this.isActive;
  }
}
