import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { SimplehttpComponent } from './simplehttp/simplehttp.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiService } from './wiki.service';
import { RxhttpComponent } from './rxhttp/rxhttp.component';
import { ItemsService } from './items.service';


@NgModule({
  declarations: [
    AppComponent,
    SimplehttpComponent,
    WikiComponent,
    RxhttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    JsonpModule
  ],
  providers: [WikiService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
