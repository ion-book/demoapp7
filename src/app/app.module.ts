import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimplehttpComponent } from './simplehttp/simplehttp.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiService } from './wiki.service';

@NgModule({
  declarations: [
    AppComponent,
    SimplehttpComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
