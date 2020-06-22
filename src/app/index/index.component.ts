import { Component, OnInit } from '@angular/core';
import { SoliProviderService } from '../shared/soli-provider.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss',
    '../../assets/style/base-detail.component.scss']
})
export class IndexComponent implements OnInit {
  public num:number;
  public notice;

  constructor(

    private soliProvider: SoliProviderService
  ) { }

  ngOnInit(): void {
    this.num = Math.floor(Math.random() *4)+1
    this.notice = this.soliProvider.getdataNotice()
  }

  getNotice() {
    let arr = [];
    for(let i=1; i<6; i++){
      arr.push(this.notice[this.notice.length-i])
    }
    return arr
  }

}
