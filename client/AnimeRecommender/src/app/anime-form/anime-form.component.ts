import { Component, OnInit,Input } from '@angular/core';
import {AnimeFormService} from '../anime-form.service'

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent implements OnInit {
  genres=[{name:"Action",value:1},{name:"Adventure",value:2},{name:"Cars",value:3},{name:"Comedy",value:4},{name:"Dementia",value:5},{name:"Demons",value:6},{name:"Mystery",value:7},{name:"Drama",value:8},{name:"Fantasy",value:10},{name:"Game",value:11},{name:"Historical",value:13},{name:"Horror",value:14},{name:"Kids",value:15},{name:"Magic",value:16},{name:"Mecha",value:18},{name:"Music",value:19},{name:"Parody",value:20},{name:"Samurai",value:21},{name:"Romance",value:22},{name:"School",value:23},{name:"Sci Fi",value:24},{name:"Shoujo",value:25},{name:"Shounen",value:27},{name:"Space",value:29},{name:"Sports",value:30},{name:"Super Power",value:31},{name:"Vampire",value:32},{name:"Supernatural",value:37},{name:"Military",value:38},{name:"Police",value:39},{name:"Psychological",value:40},{name:"Thriller",value:41}]
  
  genre:{name:string,value:number};
  status:string;
  ep:number;
  date:Date;
  constructor(private formService:AnimeFormService) { }

  ngOnInit(): void {
  }
  search(){
    this.formService.sendData(this.genre ,this.ep , this.status , this.date );
  }

}
