import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoliProviderService } from '../shared/soli-provider.service';
import { resistAtkType } from '../shared/soliHashTable'

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
    this.gladia= this.soliProvider.getdataGladia()[this.soliProvider.hashGladiaList[this.idItem]]
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
      arr.push([y,this.soliProvider.hashCocoonIdToName[y]])
    }
    return arr
  }
  getFixedItem(y: string){
    if (y == ""){
      return ""
    }
    else{
      let parsed = JSON.parse(y);
      let resultArr = [];

      for(let id in parsed){
        resultArr.push([id, parsed[id], this.soliProvider.hashItemToName[id]]);
      }
      return resultArr
    }
  }


}
