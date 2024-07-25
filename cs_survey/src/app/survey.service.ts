// Used to get all surveys to populate the Survey List, to save a survey when a user submits a survey, edit a survey when a user performs the “edit” action on the survey list page, and delete a survey when a user performs the “delete” action on the survey list.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})

export class SurveyService {


  private baseURL = "http://localhost:9595/api/v1/surveys";

  constructor(private httpClient: HttpClient) { }

  getAllSurveys(): Observable<Survey[]>{
    return this.httpClient.get<Survey[]>(`${this.baseURL}`);
  }
  
  saveSurvey(survey: Survey): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, survey);
  }

  getSurveyById(id: number): Observable<Survey>{
    return this.httpClient.get<Survey>(`${this.baseURL}/${id}`);
  }

  updateSurvey(id: number, survey: Survey): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, survey);
  }

  deleteSurvey(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
