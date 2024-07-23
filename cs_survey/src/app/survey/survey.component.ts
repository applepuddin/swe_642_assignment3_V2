import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit{

  survey = new Survey(0, '', '', '', '', '', '', '', '', new Date(), [''], '', '', '');
  hear = [
    {value: 'Friends'}, 
    {value:'Television'}, 
    {value:'Internet'}, 
    {value:'Other'}
  ];
  likelihood = ['Very Likely', 'Likely', 'Unlikely'];
  //submitted = false;

// Uncomment when you link the API and Http stuff in the survey.service.ts
constructor(private surveyService: SurveyService, private router: Router) {}

ngOnInit(): void {
    
}

savetheSurvey(){
  this.surveyService.saveSurvey(this.survey).subscribe(data => {
    console.log(data);
    this.goToSurveyList();
  }, 
  error => console.log(error));
}

goToSurveyList(){
  this.router.navigate(['/survey-list'])
}

onSubmit() {
  //TODO: Add input verification?
  //this.submitted = true;
  console.log(this.survey);
  this.savetheSurvey();
  //this.goToSurveyList()
    
}

}
