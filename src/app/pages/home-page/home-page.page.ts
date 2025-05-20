import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: false,
})
export class HomePagePage implements OnInit {
  
  nome: string = '';
  carregando = true;

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.api.getUserData().subscribe({
      next: (user) => {
        this.nome = user.nome;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao buscar dados do usuário', err);
        this.carregando = false;
      }
    });
  }

  irParaUpload() {
    this.router.navigate(['/upload']);
  }

}
