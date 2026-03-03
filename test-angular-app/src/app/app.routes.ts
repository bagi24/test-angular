import { Routes } from '@angular/router';

export const routes: Routes = [];

//აქ გაწერ შენი საიტის გვერდებს (მისამართებს).

// როგორ შევავსოთ routes?

//თითოეული "გვერდი" არის ობიექტი, რომელსაც აქვს ორი მთავარი თვისება:
//path: რა ეწეროს მისამართების ზოლში (მაგალითად: home).
//component: რომელი ფაილი (კლასი) ჩაიტვირთოს ამ დროს.

//მაგალითი: ვთქვათ, გაქვს ორი კომპონენტი: HomeComponent და AboutComponent. შენი ფაილი ასე დაეწერება:



//import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';

//export const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  //{ path: 'about', component: AboutComponent },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' } // თუ ცარიელია, გადავიდეს home-ზე
//]

//___________________________________________________________________________________________

//Standalone Lazy Loading: Angular 21-ში (და 17-დან მოყოლებული) გვერდების ჩატვირთვა უფრო ეფექტურად ხდება. 
// შეგიძლია კომპონენტი მხოლოდ მაშინ ჩატვირთო, როცა მომხმარებელი მასზე დააჭერს:


//{ 
 // path: 'contact', 
 // loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) 
//}


//იმისათვის, რომ ამ მარშრუტებმა იმუშაოს, შენს მთავარ HTML ფაილში (app.html) აუცილებლად უნდა ეწეროს ეს თეგი:

//<nav>
 // <a routerLink="/home">მთავარი</a>
 // <a routerLink="/about">ჩვენს შესახებ</a>
//</nav>

//<router-outlet></router-outlet> ```

