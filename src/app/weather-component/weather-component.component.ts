import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrl: './weather-component.component.css'
})



export class WeatherComponentComponent 
{
  weatherdata:any='';
  errorMessage='';
  cityname:string="";
  constructor(private dataservice: DataService) {}

  submit()
  {
    if(this.cityname.trim())
      {
        
        this.dataservice.setData(this.cityname.trim());
        this.dataservice.getData().subscribe(
          {
            next: (response) => 
              {
                this.weatherdata= response
                
              },
          error: error => 
            {
             this.errorMessage = error.message;
             console.error('There was an error!', error);
          }
    
          })
        
        
      }
  }

}

