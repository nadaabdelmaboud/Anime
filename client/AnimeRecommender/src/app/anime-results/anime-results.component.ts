import { Component, OnInit } from '@angular/core';
import{AnimeResultsService} from '../anime-results.service'
@Component({
  selector: 'app-anime-results',
  templateUrl: './anime-results.component.html',
  styleUrls: ['./anime-results.component.css']
})
export class AnimeResultsComponent implements OnInit {
title=[];
 score=[];
 imageUrl=[];
 synopsis=[];
 url=[];
 results;
 length;
 indecies=[];
 constructor(private Results:AnimeResultsService) { }
 
   ngOnInit(): void {
    this.results = JSON.parse(localStorage.getItem('Array'));
     this.length=this.results.length;
     for(var i=0;i<this.length;i++){
      this.title.push(this.results[i].title);
      this.synopsis.push(this.results[i].synopsis);
      this.imageUrl.push(this.results[i].image_url);
      this.url.push(this.results[i].url);
      this.score.push(this.results[i].score);
      this.indecies.push(i);
     }
     
   }
 

}
