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
  submitted = false;
  survey = new Survey(0, '', '', '', '', '', '', '', '', new Date(), [''], '', '', '');
  hear = [
    {value: 'Friends'}, 
    {value:'Television'}, 
    {value:'Internet'}, 
    {value:'Other'}
  ];
  likelihood = ['Very Likely', 'Likely', 'Unlikely'];
  //submitted = false;
  likes:any ={
  }
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
  this.submitted = true;
  console.log(this.survey);

  let likeKeys = Object.keys(this.likes)
  let likes: string[] = [];
  likeKeys.forEach((k) => {
    if (this.likes[k]){
      likes.push(k);
    }
  })
  console.log(likes);

  this.survey.likedMost = likes;

  this.savetheSurvey();
  //this.goToSurveyList()
    
}

}
