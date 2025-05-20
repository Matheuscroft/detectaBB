import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
  standalone: false,
})
export class ResultPage {

  resultado: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.resultado = nav?.extras.state?.['resultado'];
  }

   irParaHome() {
    this.router.navigate(['/home-page']);
  }

}
