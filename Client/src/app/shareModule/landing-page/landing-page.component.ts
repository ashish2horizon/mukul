import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  signin(){
    this.router.navigate(['/signin'])
  }
  signup(){
    this.router.navigate(['/signup'])
  }
}
