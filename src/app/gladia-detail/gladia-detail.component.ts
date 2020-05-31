import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoliProviderService } from '../soli-provider.service';
import { GladiaDetailHash, resistAtkType, CocoonIdToName } from '../soliHashTable'

@Component({
  selector: 'app-gladia-detail',
  templateUrl: './gladia-detail.component.html',
  styleUrls: [
    './gladia-detail.component.scss',
    '../../assets/style/base-detail.component.scss'
  ]
})
export class GladiaDetailComponent implements OnInit {

  public idItem: string;
  public gladia;
  resistAtkType:Array<string> = resistAtkType;

  constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.idItem = params["id"];
    this.gladia = this.soliProvider.getdataGladia()[GladiaDetailHash[this.idItem]]
    });
  }

  getGladiaAttr = (x: string): any => {
    return this.gladia[x]
  }

  getRelative = (x: string): any => {
    return x.split(',')
  }
  getCocoon = (x:string): any => {
    let arr = [];
    for (let y of x.split(',')){
      arr.push([y, CocoonIdToName[y]])
    }
    return arr
  }

}
