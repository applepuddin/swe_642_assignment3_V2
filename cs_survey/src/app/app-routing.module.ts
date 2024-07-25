// Configures the application's routes, linking paths to components such as home, survey form, survey list, and update survey form, with the root path redirecting to the home page.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'survey-list', component: SurveyListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'update-survey/:id', component: UpdateSurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
