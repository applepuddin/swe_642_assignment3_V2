// Main module of the application, importing necessary Angular modules and configuring the application's root module.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
//import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //AppComponent,
    //HomeComponent,
    //SurveyComponent,
    //SurveyListComponent,
    //UpdateSurveyComponent
    //HttpClientModule
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(), provideClientHydration()],
  //bootstrap: [AppComponent]
})
export class AppModule { }
