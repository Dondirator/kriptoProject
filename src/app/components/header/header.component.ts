import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLang: string = '';
  secondaryLanguages = new Array<string>();
  clicked: false;

  status: boolean = false;

  sublistOpen: boolean = false;

  clickEvent(event: Event) {
    this.status = !this.status;
  }
  constructor(
    private elementRef: ElementRef,
    public translateService: TranslocoService,
    private _translocoService: TranslocoService
  ) {}
  toggleSublist() {
    this.sublistOpen = !this.sublistOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.sublistOpen = false;
    }
  }

  public update() {
    if (this.currentLang === 'RU') {
      this.translateService.setActiveLang('en');
      this.currentLang = 'EN';
    } else {
      this.translateService.setActiveLang('ru');
      this.currentLang = 'RU';
    }
  }

  ngOnInit() {
    this.currentLang = this._translocoService.getActiveLang().toUpperCase();
    this.setSecondaryLanguages();
  }

  isActive = false;
  onBurgerClick() {
    this.isActive = !this.isActive;
  }

  languageChange(event: Event) {
    let target = event.target as HTMLLinkElement;
    let value = target.innerText.toLowerCase();
    console.log(value);

    this._translocoService.setActiveLang(value);
    this.currentLang = value.toUpperCase();
    this.setSecondaryLanguages();
  }

  setSecondaryLanguages() {
    this.secondaryLanguages = [];
    let languages = this._translocoService.getAvailableLangs();
    languages.forEach((language) => {
      if (language != this.currentLang.toLowerCase()) {
        this.secondaryLanguages.push(language.toString().toUpperCase());
      }
    });
  }
}
