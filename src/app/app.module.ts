import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ReviewCarouselComponent } from './components/review-carousel/review-carousel.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { AppRoutingModule } from './app-routing.module';
import { AnimationComponent } from './components/animation/animation.component';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HomeComponent } from './components/home/home.component';
import { ForPartnersPageComponent } from './components/for-partners-page/for-partners-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    ReviewCarouselComponent,
    PortfolioComponent,
    AnimationComponent,

    ContactFormComponent,
    HomeComponent,
    ForPartnersPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslocoRootModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
