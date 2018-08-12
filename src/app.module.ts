import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";
import { AppRoutes } from "./app.routing";
import * as a from './';


@NgModule({
  declarations: [
    a.AppComponent,
    a.WatchlistComponent,
    a.PortfolioComponent,
    a.NewsComponent,
    a.SettingsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [a.StocksService],
  bootstrap: [a.AppComponent]
})
export class AppModule { }
