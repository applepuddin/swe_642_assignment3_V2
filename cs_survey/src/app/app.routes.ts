// Module to manage navigation and routing of the web application. Used to define routes to the “Home”, “Survey”, “Survey List” pages, allowing the user to access the pages.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';

export const routes: Routes = [  
    { path: 'home', component: HomeComponent },
    { path: 'survey', component: SurveyComponent },
    { path: 'survey-list', component: SurveyListComponent },
    { path: 'update-survey/:id', component: UpdateSurveyComponent }

];
