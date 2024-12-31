import {  provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    ],
    changeUrl: "http://localhost:4000/api/change/",
    imageUrl: "http://localhost:4000/api/change/images/"

};


