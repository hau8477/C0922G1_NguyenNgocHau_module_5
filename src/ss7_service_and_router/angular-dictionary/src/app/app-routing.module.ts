import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";
import {DictionaryListComponent} from "./dictionary/dictionary-list/dictionary-list.component";


const routes: Routes = [
  {path: 'word/detail/:word', component: DictionaryDetailComponent},
  {path: 'word', component: DictionaryListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
