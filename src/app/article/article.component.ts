import {
  Component,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Input() orderNumber: number;

  constructor() { }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  deleteArticle() {
    this.article.deleteArticle();
    return false;
  }

  getTitleClass() {
    return this.article.alive ? '' : 'deleted';
  }

  ngOnInit(): void {
  }

}
