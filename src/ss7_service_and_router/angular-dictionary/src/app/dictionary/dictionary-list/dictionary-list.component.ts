import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/word";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
  words: Word[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.words = this.getAllWord();
  }

  getAllWord(): Word[] {
    return this.dictionaryService.getAll();
  }
}
