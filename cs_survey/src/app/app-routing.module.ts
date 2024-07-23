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
