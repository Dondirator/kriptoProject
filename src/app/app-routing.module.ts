import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';
import { ForPartnersPageComponent } from './components/for-partners-page/for-partners-page.component';
import { TeamComponent } from './components/team/team.component';
import { PTwoEPageComponent } from './components/p-two-e-page/p-two-e-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/about-us', pathMatch: 'full' },
  { path: 'about-us', component: HomeComponent },
  { path: 'for-partners', component: ForPartnersPageComponent },
  { path: 'contact-us', component: ContactFormComponent },
  { path: 'our-team', component: TeamComponent },
  { path: 'p2e', component: PTwoEPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
