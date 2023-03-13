import { Injectable } from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [
    {
      word: 'Rose',
      mean: 'Hoa hồng'
    },
    {
      word: 'Lily',
      mean: 'Hoa loa kèn'
    },
    {
      word: 'Sunflower',
      mean: 'Hoa hướng dương'
    },
    {
      word: 'Tulip',
      mean: 'Hoa tulip'
    },
    {
      word: 'Daisy',
      mean: 'Hoa cúc'
    },
    {
      word: 'Orchid',
      mean: 'Hoa lan'
    },
    {
      word: 'Chrysanthemum',
      mean: 'Hoa cúc tân nhân'
    },
    {
      word: 'Lavender',
      mean: 'Hoa oải hương'
    },
    {
      word: 'Carnation',
      mean: 'Hoa cẩm chướng'
    },
    {
      word: 'Peony',
      mean: 'Hoa mẫu đơn'
    }
  ]

  constructor() { }

  getAll(): Word[] {
    return this.words;
  }

  translate(word: string): string {
    if (word === ''){
      return '';
    }

    const wordTranslate = this.words.find(item => item.word.toLowerCase() === word.toLowerCase());
    if (wordTranslate) {
      return wordTranslate.mean;
    }
    return '';
  }
}

