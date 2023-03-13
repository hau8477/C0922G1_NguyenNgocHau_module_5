import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../model/contract/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[];

  constructor() { }

  ngOnInit(): void {
  }

}
