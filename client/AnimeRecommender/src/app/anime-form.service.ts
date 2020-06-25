import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import {AnimeResultsService} from './anime-results.service'



@Injectable({
  providedIn: 'root'
})
export class AnimeFormService {
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };
  results;
  constructor(private http:HttpClient,private router:Router,private Results:AnimeResultsService) { }
  sendData(genre,ep,status,date){
   
     this.http.post("http://localhost:3000/api/formData",{genre:genre,ep:ep,status:status,date:date})
    .subscribe(result => {
      this.results=result;
      if(this.results.length!=0){
        localStorage.setItem('Array', JSON.stringify(this.results));
        this.router.navigate(['/animeResults']);
        this.Results.initResults(this.results.length,this.results);
      }
    }) 
   

  /*   this.http.get("http://localhost:3000/formData").pipe(map(data => {})).subscribe(result => {
      console.log(result);
    }); */
   
  }
}
