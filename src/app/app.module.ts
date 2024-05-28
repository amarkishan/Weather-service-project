import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AppComponent, WeatherComponentComponent],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule,FormsModule,NgbModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
