import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
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
  @Output() onDelete: EventEmitter<string>;

  constructor() { 
    this.onDelete = new EventEmitter<string>();
  }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  deleteArticle() {
    if(this.article.alive){
      this.article.deleteArticle();
    } else {
      this.onDelete.emit(this.article.title);
    }
    return false;
  }

  getTitleClass() {
    return this.article.alive ? '' : 'deleted';
  }

  ngOnInit(): void {
  }

}
