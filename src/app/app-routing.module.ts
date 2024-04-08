import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';
import { ForPartnersPageComponent } from './components/for-partners-page/for-partners-page.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },

      { path: 'for-partners', component: ForPartnersPageComponent },
      { path: 'contact-us', component: ContactFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
