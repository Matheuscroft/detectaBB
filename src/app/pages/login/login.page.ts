import { Component, OnInit } from '@angular/core';
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

  constructor(private api: ApiService, private alertCtrl: AlertController) {}

  ngOnInit() {
  }

  async fazerLogin() {
    try {
      const response = await this.api.login(this.email, this.senha).toPromise();

      // Armazena o token localmente (ajustável depois com JWT interceptor)
      localStorage.setItem('token', response.token);

      const alert = await this.alertCtrl.create({
        header: 'Sucesso',
        message: 'Login realizado com sucesso!',
        buttons: ['OK']
      });
      await alert.present();

    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Email ou senha inválidos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
