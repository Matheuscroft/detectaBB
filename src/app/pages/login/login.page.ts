import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private api: ApiService, private alertCtrl: AlertController, private router: Router) {}

  ngOnInit() {
  }

  async fazerLogin() {
    try {
      const response = await this.api.login(this.email, this.senha).toPromise();

      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));

      await this.router.navigate(['/home-page']);

    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Email ou senha inválidos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  irParaRecuperarSenha() {
    this.router.navigate(['/forgot-password']);
  }

  irParaCadastro() {
    this.router.navigate(['/sign-in']);
  }

}
