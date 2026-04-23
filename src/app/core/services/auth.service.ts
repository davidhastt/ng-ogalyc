import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // tu backend Node/Express
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient, private router: Router) {}

  // 🔹 Login: envía credenciales al backend y guarda el token
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.token);
      })
    );
  }

  // 🔹 Logout: elimina el token y redirige
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth/login']);
  }

  // 🔹 Verifica si hay sesión activa
  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token; // aquí podrías validar expiración del JWT
  }

  // 🔹 Obtiene el token para usar en interceptores
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
