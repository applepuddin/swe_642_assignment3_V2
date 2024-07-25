// Defines the HomeComponent, providing navigation to the survey form and survey list. Uses the Router for navigating between routes.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

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
