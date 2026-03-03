import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    //ეს Angular-ის ახალი (21-ე ვერსიის) ფუნქციაა.
    // ის ავტომატურად უსმენს ბრაუზერში წარმოქმნილ შეცდომებს.

    provideRouter(routes), //ეს ფუნქცია ააქტიურებს ნავიგაციას (Routing).
    //routes არის ის ცვლადი, რომელიც app.routes.ts ფაილიდან მოდის.
    //სწორედ აქედან იცის Angular-მა, რომელი კომპონენტი გამოაჩინოს,
    //  როცა მომხმარებელი გადავა, მაგალითად, /about მისამართზე.
  ],
};

//აქ ხდება აპლიკაციის კონფიგურაცია (მაგალითად, როუტინგის ან სხვა სერვისების დამატება).

//თუ დაგჭირდება სერვერიდან მონაცემების წამოღება (HTTP),
// აქ დაამატებ provideHttpClient()-ს. თუ ანიმაციები მოგინდება – provideAnimations().

// --->>>> ეს appConfig ობიექტი შემდეგ გამოიყენება main.ts ფაილში
