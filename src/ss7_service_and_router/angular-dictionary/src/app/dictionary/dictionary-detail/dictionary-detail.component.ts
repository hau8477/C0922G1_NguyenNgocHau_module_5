import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Word} from "../../model/word";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: Word;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      const mean = this.dictionaryService.translate(word);
      this.wordDetail = {
        word,
        mean
      }
    })
  }
}
