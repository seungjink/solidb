import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoliProviderService } from '../shared/soli-provider.service';
import { resistAtkType } from '../shared/soliHashTable'
import { HttpClient } from '@angular/common/http';

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
  gladiaDialog: object;
  dialogType = {
    "view" : "정보창",
    "get" : "획득",
    "error" : "None"
  }
  resistAtkType:Array<string> = resistAtkType;

  constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.idItem = params["id"];
    console.log(this.idItem);
    this.gladia= this.soliProvider.getdataGladia()[this.soliProvider.hashGladiaList.get(this.idItem)]
    
    this.httpClient.get("assets/Texts/GladiaDialog/"+this.idItem+".json").subscribe(data =>{
      this.gladiaDialog = data['dialogs'];
    },
    err => {
      this.gladiaDialog = [{"type" : "error", "text":"대사가 입력되어있지 않음"}];
    })
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
      arr.push([y,this.soliProvider.hashCocoonIdToName.get(y)])
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
        resultArr.push([id, parsed[id], this.soliProvider.hashItemToName.get(id)]);
      }
      return resultArr
    }
  }
  getDescription(){
    return this.gladia.Unique.split("\n")
  }
}
