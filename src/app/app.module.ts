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
import { QuestionsComponent } from './components/questions/questions.component';
import { AppRoutingModule } from './app-routing.module';

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
    QuestionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
