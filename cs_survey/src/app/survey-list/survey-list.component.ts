import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css',
  providers:  [ SurveyService ]

})

export class SurveyListComponent implements OnInit {

  surveys: Survey[] = [];

  // Uncomment when you link the API and Http stuff in the survey.service.ts
  constructor(private surveyService: SurveyService, private router: Router) {}
  //constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.getSurveys();
  }

  private getSurveys(){
    this.surveyService.getAllSurveys().subscribe(data => {
      this.surveys = data;
    });
  }

  updateSurvey(id: number){

    this.router.navigate(['update-survey', id]);

  }

  deleteSurvey(id: number){

    this.surveyService.deleteSurvey(id).subscribe( data => {
      console.log(data);
      this.getSurveys();
    })

  }
}
