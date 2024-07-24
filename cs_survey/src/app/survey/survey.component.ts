import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit{

  form: FormGroup;
  survey = new Survey(0, '', '', '', '', '', '', '', '', new Date(), [''], '', '', '');
  hear = [
    {value: 'Friends'}, 
    {value:'Television'}, 
    {value:'Internet'}, 
    {value:'Other'}
  ];
  checkboxes: Array<any> = [
    {name: 'Students', value: 'Students'},
    {name: 'Location', value: 'Location'},
    {name: 'Campus', value: 'Campus'},
    {name: 'Atmosphere', value: 'Atmosphere'},
    {name: 'Dorm Rooms', value: 'Dorm Rooms'},
    {name: 'Sports', value: 'Sports'},
  ]
  likelihood = ['Very Likely', 'Likely', 'Unlikely'];
  //submitted = false;

// Uncomment when you link the API and Http stuff in the survey.service.ts
constructor(private surveyService: SurveyService, private router: Router, private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    checkValues: this.formBuilder.array([])
  })
}

ngOnInit(): void {
    
}

savetheSurvey(){
  this.surveyService.saveSurvey(this.survey).subscribe(data => {
    //console.log(data);
    this.goToSurveyList();
  }, 
  error => console.log(error));
}

goToSurveyList(){
  this.router.navigate(['/survey-list'])
}

onCheckboxChange(e:any) {
  const checkValues: FormArray = this.form.get('checkValues') as FormArray;
  if(e.target.checked) {
    checkValues.push(new FormControl(e.target.value));
  }
}

onSubmit() {
  //TODO: Add input verification?
  //this.submitted = true;
  console.log(this.survey);
  this.savetheSurvey();
  //this.goToSurveyList()
    
}

}
