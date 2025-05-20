import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: false
})
export class SignInPage implements OnInit {

  nome: string = '';
  email: string = '';
  senha: string = '';
  mensagemErro: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    const novoUsuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };

    this.apiService.register(novoUsuario).subscribe({
      next: (res) => {
        console.log('Usuário registrado com sucesso!', res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao registrar:', err);
        this.mensagemErro = err?.error?.error || 'Erro desconhecido';
      },
    });
  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }

}
