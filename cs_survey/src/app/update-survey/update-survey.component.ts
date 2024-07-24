import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SurveyComponent } from '../survey/survey.component';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-update-survey',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-survey.component.html',
  styleUrl: './update-survey.component.css',
  providers:  [ SurveyService ]

})
export class UpdateSurveyComponent implements OnInit {

  survey: Survey = new Survey(0, '', '', '', '', '', '', '', '', new Date(), [''], '', '', '');
  constructor(private surveyService: SurveyService, private router: ActivatedRoute, private route: Router) {}

  id: number = 0;
  submitted: boolean = false;
  likelihood = ['Very Likely', 'Likely', 'Unlikely'];
  hear = [
    {value: 'Friends'}, 
    {value:'Television'}, 
    {value:'Internet'}, 
    {value:'Other'}
  ];
  likes:any ={
  }
  
  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];

    this.surveyService.getSurveyById(this.id).subscribe(data => {
      this.survey = data;
    }, error => console.log(error));
      
  }

  onSubmit(){
    let likeKeys = Object.keys(this.likes)
    let likes: string[] = [];
    likeKeys.forEach((k) => {
    if (this.likes[k]){
      likes.push(k);
    }
    })
    console.log(likes);

    this.survey.likedMost = likes;
    this.surveyService.updateSurvey(this.id, this.survey).subscribe( data => {
      this.goToSurveyList();
    }, error => console.log(error));
  }

  goToSurveyList(){

    this.route.navigate(['/survey-list']);

  }



  // savetheSurvey(){
  //   this.surveyService.saveSurvey(this.survey).subscribe(data => {
  //     console.log(data);
  //     this.goToSurveyList();
  //   }, 
  //   error => console.log(error));
  // }
  
  // goToSurveyList(){

  //   this.router.navigate('survey-list');
  // }

  // onSubmit() {
  //   //TODO: Add input verification?
  //   //this.submitted = true;
  //   console.log(this.survey);
  //   this.savetheSurvey();
    
  // }
}
