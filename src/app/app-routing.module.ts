import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AllLaunchProgramComponent } from './component/all-launch-program/all-launch-program.component';


export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {
    path: 'landing-page', component: LandingPageComponent,
    children: [
      { path: '', redirectTo: 'all-launch-program/0/0/0', pathMatch: 'full' },
      { path: 'all-launch-program/:year/:launch/:landing', component: AllLaunchProgramComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
