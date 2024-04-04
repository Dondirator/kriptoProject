import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForPartnersComponent } from './components/for-partners/for-partners.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ReviewCarouselComponent } from './components/review-carousel/review-carousel.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { AppRoutingModule } from './app-routing.module';
import { AnimationComponent } from './components/animation/animation.component';
import { OurHistorySectionComponent } from './components/our-history-section/our-history-section.component';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ForPartnersComponent,
    AboutSectionComponent,
    ReviewCarouselComponent,
    PortfolioComponent,
    AnimationComponent,
    OurHistorySectionComponent,
    ContactFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
