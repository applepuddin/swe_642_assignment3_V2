// Main component managing navigation and initializing event listeners for the Angular application, using RouterOutlet and NgIf directives.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

import { Component, OnInit} from '@angular/core';
import { RouterOutlet , Router, NavigationEnd} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'cs_survey';
 showAppComponent = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showAppComponent = event.urlAfterRedirects === '/';
      }
    });
  }
  navigateToWelcome() {
    this.router.navigate(['/']);
    
  }
  navigateToHome() {
    this.router.navigate(['/home']);
    
  }
  navigateToSurvey() {
    this.router.navigate(['/survey']);
  }

  navigateToSurveyList() {
    this.router.navigate(['/survey-list']);
  }
}
