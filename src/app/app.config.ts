import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptors'

export const appConfig: ApplicationConfig = {
  providers: [
    // Rutas principales
    provideRouter(routes),

    // HttpClient con interceptor JWT
    provideHttpClient(
      withInterceptors([AuthInterceptor])
    )
  ]
};




