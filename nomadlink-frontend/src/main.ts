import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { apolloClient } from './app/core/apollo-client';
import { ApolloClient } from '@apollo/client/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), 
    {
      provide: ApolloClient, 
      useValue: apolloClient,
    },
  ],
})
  .catch((err) => console.error(err));
