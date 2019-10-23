import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoadSportsComponent} from './loadSports/loadSports.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoadSportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'loadSports', component: LoadSportsComponent},
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
