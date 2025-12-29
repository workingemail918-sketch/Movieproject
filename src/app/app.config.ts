import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({ projectId: "anymovie-9c954", appId: "1:413262706836:web:deffbd0c8472901ca89c81", storageBucket: "anymovie-9c954.firebasestorage.app", apiKey: "AIzaSyCUIHixRzIBxAoc2ToXyL28_o6lDHJfJmM", authDomain: "anymovie-9c954.firebaseapp.com", messagingSenderId: "413262706836",  })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ]
};
