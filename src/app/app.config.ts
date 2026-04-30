import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptors'
import { LOCALE_ID } from '@angular/core';


export const appConfig: ApplicationConfig = {
  providers: [
    // Rutas principales
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es' },
    // HttpClient con interceptor JWT
    provideHttpClient(
      withInterceptors([AuthInterceptor])
    )
  ]
};




