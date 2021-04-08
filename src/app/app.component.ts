import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  showDeleted: boolean;

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 5, 'Angular official webpage'),
      new Article('Google', 'http://www.google.com', 3, 'Google search engine'),
      new Article('Gmail', 'http://www.gmail.com', 1, 'Google email client service')
    ];
    this.showDeleted = false;
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement, description: HTMLInputElement): boolean {
    console.log(`add article: ${title.value} - ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0, description.value));
    title.value = '';
    link.value = '';
    description.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles
      .sort((a1: Article, a2: Article) => a2.votes - a1.votes)
      .filter(a => this.showDeleted ? a : a.alive);
  }

  articleCount(): number {
    return this.showDeleted ?
      this.getAllArticleCount() :
      this.getAliveArticleCount();
  }

  getAllArticleCount():number {
    return this.articles.length;
  }

  getAliveArticleCount(): number {
    return this.articles.filter(a => a.alive).length;
  }

  toggleShowDeleted(showInput: HTMLInputElement) {
    this.showDeleted = showInput.checked;
  }

  handleInfoClick(count:number):void{
    console.log(`Counter info: ${count}`);
  }

  getArticlesClass() {
    return this.showDeleted ? "show-deleted" : "";
  }

  permanentDelete(articleTitle:string){
    this.articles = this.articles.filter(article => article.title !== articleTitle);
  }

}
