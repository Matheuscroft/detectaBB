import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: false,
})
export class ForgotPasswordPage implements OnInit {
  email: string = '';
  novaSenha: string = '';
  confirmarSenha: string = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async recuperarSenha() {
    console.log(
      'Recuperar senha:',
      this.email,
      this.novaSenha,
      this.confirmarSenha
    );
    if (this.novaSenha !== this.confirmarSenha) {
      this.showToast('As senhas não coincidem');
      return;
    }

    this.apiService.recoverPassword(this.email, this.novaSenha).subscribe({
      next: () => {
        this.showToast('Senha atualizada com sucesso!');
        this.router.navigate(['login']);
      },
      error: (err) => {
        this.showToast(err.error?.error || 'Erro ao atualizar senha');
      },
    });
  }

  async showToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: 'medium',
    });
    await toast.present();
  }

  irParaLogin() {
    this.router.navigate(['login']);
  }

  formInvalido(): boolean {
    return (
      !this.email.trim() ||
      !this.novaSenha.trim() ||
      !this.confirmarSenha.trim() ||
      this.novaSenha !== this.confirmarSenha
    );
  }
}
