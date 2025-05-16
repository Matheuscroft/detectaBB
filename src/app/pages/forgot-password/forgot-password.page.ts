import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: false,
})
export class ForgotPasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaLogin() {
    this.router.navigate(['login']);
  }

}
