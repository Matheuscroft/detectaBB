import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: false,
})
export class HomePagePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  irParaUpload() {
    this.router.navigate(['/upload']);
  }

}
