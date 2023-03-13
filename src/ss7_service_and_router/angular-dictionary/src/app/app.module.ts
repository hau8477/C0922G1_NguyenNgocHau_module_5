import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';
import { DictionaryListComponent} from "./dictionary/dictionary-list/dictionary-list.component";

@NgModule({
  declarations: [
    AppComponent,
    DictionaryDetailComponent,
    DictionaryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
