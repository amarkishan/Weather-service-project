import { Component } from '@angular/core';
import { DataService } from './data.service';

interface Post
{
  userId:number;
  id:number;
  title:String;
  body:String;


}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent
{
  
  posts:Post[]=[];
  errorMessage="";
  constructor(private dataservice:DataService){}
  ngOnInit() 
  {
    this.dataservice.getData().subscribe(
      {
        next: (response) => 
          {
            this.posts= response
            console.log(this.posts);
          },
      error: error => 
        {
         this.errorMessage = error.message;
         console.error('There was an error!', error);
      }

      }
    )
        
  }
}
