import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  uploadBoleto(file: File, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('password', password);

    return this.http
      .post(`${this.baseUrl}/boleto/upload`, formData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro da API:', error);
    return throwError(() => error);
  }

  login(email: string, senha: string): Observable<any> {
    const body = { email, senha };
    return this.http
      .post(`${this.baseUrl}/auth/login`, body)
      .pipe(catchError(this.handleError));
  }

  getUserData(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/auth/me`)
      .pipe(catchError(this.handleError));
  }
}
