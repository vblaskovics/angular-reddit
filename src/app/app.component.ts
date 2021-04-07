import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Angular', 'http://angular.io', 5),
      new Article('Google', 'http://www.google.com', 3),
      new Article('Gmail', 'http://www.gmail.com', 1)
    ]
  }

  addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean {
    console.log(`add article: ${title.value} - ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
}
