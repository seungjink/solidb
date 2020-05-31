import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoliProviderService } from '../soli-provider.service';
import { CocoonDetailHash, QuestIdToName, AgentDetailHash, GladiaDetailHash } from '../soliHashTable'

@Component({
  selector: 'app-cocoon-detail',
  templateUrl: './cocoon-detail.component.html',
  styleUrls: ['./cocoon-detail.component.scss', '../../assets/style/base-detail.component.scss']
})
export class CocoonDetailComponent implements OnInit {

  public idItem: string;
  public cocoon;

  constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.idItem = params["id"];
    this.cocoon= this.soliProvider.getdataCocoon()[CocoonDetailHash[this.idItem]]
    });
  }

  getCSV(y: string){
   let id = y.split(",")
   var resultArr = [];
   for (let i = 0; i < id.length; i++) {
       resultArr.push([QuestIdToName[id[i]], id[i]]);
   };
   return resultArr  
 }

 getNameAndID(x:string, y:string){
   let id = y.split(",")
   let name = x.split(",")
    var resultArr = [];
   for (let i = 0; i < id.length; i++) {
       resultArr.push([name[i].replace(/['"]+/g, ''), id[i]]);
   };
   return resultArr  
 }

 

}
