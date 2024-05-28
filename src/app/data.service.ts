import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DataService 
{
   name:string="";
   apiKey='773e415cc3f4bd87743bdd625d996c8e';
  constructor(private http:HttpClient) { }
  setData(data:string):void
  {
     this.name=data.trim();
     
  }
  private getApiUrl(): string {
    return `https://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=${this.apiKey}`;
  }


  getData(): Observable<any>
  {
    const apiurl =this.getApiUrl();
    return this.http.get(apiurl);
  }


}
