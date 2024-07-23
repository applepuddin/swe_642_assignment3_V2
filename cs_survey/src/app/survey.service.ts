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
