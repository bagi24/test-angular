import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));



  //როცა აპლიკაცია ირთვება, ის ჯერ კითხულობს appConfig-ს. ხედავს, რომ ჩართულია როუტინგი
  //  და შეცდომების მონიტორინგი, და მხოლოდ ამის შემდეგ უშვებს მთავარ კომპონენტს (AppComponent).