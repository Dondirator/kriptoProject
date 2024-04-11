import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HomeComponent } from './components/home/home.component';
import { ForPartnersPageComponent } from './components/for-partners-page/for-partners-page.component';
import { AboutUsSectionComponent } from './components/sections/about-us-section/about-us-section.component';
import { TeamComponent } from './components/team/team.component';
import { TeamMemberComponent } from './components/team/team-member/team-member.component';
//
import { ReviewCarouselSectionComponent } from './components/for-partners-page/review-carousel-section/review-carousel-section.component';

@NgModule({
  declarations: [
    //import sections
    AboutUsSectionComponent,
    //
    AppComponent,
    HeaderComponent,
    FooterComponent,
    //pages
    ContactFormComponent,
    HomeComponent,
    ForPartnersPageComponent,
    ReviewCarouselSectionComponent,
    TeamComponent,
    TeamMemberComponent,
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
