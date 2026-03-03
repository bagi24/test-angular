import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],   
//ვინაიდან შენი კომპონენტი Standalone-ია, მას პირდაპირ უნდა ვუთხრათ, რას იყენებს. 
// RouterOutlet სჭირდება იმისთვის, რომ app.html-ში იმუშაოს <router-outlet /> თეგმა.


  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test-angular-app');
  //signal: ეს არის მონაცემების მართვის ახალი სისტემა. title აღარ არის უბრალო ცვლადი, ის არის "ჭკვიანი
  //  ობიექტი". თუ მას მომავალში შეცვლი, Angular მომენტალურად და ზუსტად განაახლებს ეკრანის მხოლოდ იმ ნაწილს, 
  // სადაც ეს სათაური წერია.


  //protected: ეს ნიშნავს, რომ ეს ცვლადი ხელმისაწვდომია მხოლოდ ამ კლასში 
  // და მის HTML შაბლონში. ეს კარგი პრაქტიკაა (Encapsulation).

  //readonly: ნიშნავს, რომ თვითონ სიგნალის ობიექტს ვერ გადააწერ სხვა რამეს, 
  // თუმცა სიგნალის შიგნით მნიშვნელობის შეცვლა (მაგალითად .set()-ით) მაინც შეგიძლია.
}


// მთავარი ლოგიკა.