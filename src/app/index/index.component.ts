import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss',
    '../../assets/style/base-detail.component.scss']
})
export class IndexComponent implements OnInit {
  public num:number;

  constructor() { }

  ngOnInit(): void {
    this.num = Math.floor(Math.random() *4)+1
  }

}
