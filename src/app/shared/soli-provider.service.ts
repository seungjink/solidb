import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Papa } from 'ngx-papaparse';
import { map } from 'rxjs/operators';
import { forkJoin, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoliProviderService implements OnDestroy{
  private destroy$: Subject<void> = new Subject<void>();
  public pageload ;

  constructor(
    private http:HttpClient,
    private papa: Papa
  ) { }

  private dataAgent        : any;
  private dataItemMaterial : any;
  private dataQuest        : any;
  private dataGladia       : any;
  private dataCocoon       : any;

  public hashAgentList      : object;
  public hashCocoonList     : object;
  public hashGladiaList     : object;
  public hashItemList       : object;
  public hashQuestList      : object;
  public hashItemToName     : object;
  public hashQuestIdToName  : object;
  public hashCocoonIdToName : object;

//ItemIdToName
//  MA00001: '물방울',
//
//export const QuestIdToName = {
//  FREE0101: '긴급 식량 공수',
//
//export const CocoonIdToName = {
//  CC00001: '신선한 고치',
//
  public getdataAgent() {
    return this.dataAgent
  }
  public getdataItemMaterial() {
    return this.dataItemMaterial
  }
  public getdataQuest() {
    return this.dataQuest
  }
  public getdataGladia() {
    return this.dataGladia
  }
  public getdataCocoon() {
    return this.dataCocoon
  }

  sheetUrlAgent:        string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQxYfMrORo8jx12o1X0131u0OORd6aSE4Z8YPzBXCrwQurnUNpHR1XsLfapdSEYJEmqfRO5ISnlrEzP/pub?output=csv'; 
  sheetUrlItemMaterial: string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKFLmOd7RKXok2-W1ykDjONAMg3IUnYsjxbGsfSF7xFb_weA7qM-4mmVQfrSTUgFBDqBmLmgMgQhek/pub?output=csv';
  sheetUrlQuest       : string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFoM20vM0fBrbr0_8t1O7j31xF-HdpL8eKUdR37HqEMqGeWLff7h_CiPBN5A0934032Bb0x-yKdhKQ/pub?output=csv';
  sheetUrlGladia      : string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTaafPLh57OeldvUOgniBokurK5PHNWu5HPobB1n35utMwebEEvwTiiqgzMCxG04Y5sbJPxnto694YB/pub?output=csv';
  sheetUrlCocoon      : string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSX6pSJ_pPlXoRi_AsrvKHXuPzZWRc2v2hs1FayVhlFL8QdOOGsWZqwQ-rAZL3DTwpOAmYNAfTSEHoQ/pub?output=csv';

  load(){
    console.log("Loading data from google sheets...")
    this.pageload = 1
    return new Promise((resolve, reject) => {
    forkJoin([
      this.http.get(this.sheetUrlAgent,        {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlItemMaterial, {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlQuest,        {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlGladia,       {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlCocoon,       {responseType:'text'}).pipe(map(res => res))
    ])
    .subscribe(response => {
      this.dataAgent        = this.papa.parse(response[0], {header:true}).data
      this.dataQuest        = this.papa.parse(response[2], {header:true}).data
      this.dataGladia       = this.papa.parse(response[3], {header:true}).data
      this.dataCocoon       = this.papa.parse(response[4], {header:true}).data
      this.dataItemMaterial = this.papa.parse(response[1], {header:true}).data
 

      this.hashAgentList = this.genArray(this.dataAgent, "ID")
      this.hashCocoonList = this.genArray(this.dataCocoon, "ID")
      this.hashGladiaList = this.genArray(this.dataGladia, "ID")
      this.hashItemList = this.genArray(this.dataItemMaterial, "ID")
      this.hashQuestList = this.genArray(this.dataQuest, "ID")
      this.hashItemToName     =  this.genArray(this.dataItemMaterial,"ID","Name");
      this.hashQuestIdToName  =  this.genArray(this.dataQuest,"ID","Name");
      this.hashCocoonIdToName =  this.genArray(this.dataCocoon,"ID","Name");

      this.dataItemMaterial = this.parseDropData(this.dataItemMaterial)


      console.log("Loading complated.")
      resolve(true);
    }
    )


    })
  }

  parseDropData(data:any){
        for (let i in data){
          data[i]["DropRandom"] = data[i]["DropRandom"].split(",");

          // Improve this part
          let tmparr: any = []
          for (let j in data[i]["DropRandom"]){
            tmparr.push(this.hashQuestIdToName[data[i]["DropRandom"][j]]);
          }
          data[i]["DropRandomName"] = tmparr;
          
          if (data[i]["DropFixed"] == "" ) {
            continue;
          }
          data[i]["DropFixed"] = JSON.parse(data[i]["DropFixed"]);


          data[i]["DropFixedNameID"] = {};
          for(const key in data[i]["DropFixed"]){
            data[i]["DropFixedNameID"][this.hashQuestIdToName[key]] = [data[i]["DropFixed"][key], key];
          }
        }
        return data
      }
  

  genArray(data, key:string, value?:string){
    let arr = {}
    if (value){
      for (let i in data){
        arr[data[i][key]] = data[i][value];
      }
    }
    else{
      for (let i in data){
        arr[data[i][key]] = i;
      }
    }
   return arr;
  }



  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }

}
