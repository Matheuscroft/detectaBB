import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
  standalone: false
})
export class LandingPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }


  irParaSignIn() {
    this.router.navigate(['/sign-in']);
  }


}
