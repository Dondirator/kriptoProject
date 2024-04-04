import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForPartnersComponent } from './components/for-partners/for-partners.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'for-partners', component: ForPartnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
