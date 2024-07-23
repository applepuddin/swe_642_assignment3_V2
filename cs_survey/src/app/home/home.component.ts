import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToSurvey() {
    this.router.navigate(['/survey']);
  }

  navigateToSurveyList() {
    this.router.navigate(['/survey-list']);
  }
}
