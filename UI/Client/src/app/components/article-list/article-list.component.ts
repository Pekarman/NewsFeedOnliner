import { Component, Input, OnInit } from '@angular/core';
import { ArticleHttpService } from 'src/app/services/article.http.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleList implements OnInit {

  constructor(private service: ArticleHttpService) {}

  ArticleList = [];

  @Input('item') searchValue: string = "";

  ngOnInit(): void {
    this.refreshArticleList();
  }

  refreshArticleList(){
    this.service.getArticles().subscribe(data => {
      this.ArticleList = data;
    });
  }
  
  isMatch(regex: string, source: string): boolean{
    if(source.toLowerCase().indexOf(regex.toLowerCase()) > -1)    return true;
    else return false;
  }
}