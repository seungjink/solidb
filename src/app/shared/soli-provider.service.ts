import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Papa } from 'ngx-papaparse';
import { map } from 'rxjs/operators';
import { forkJoin, Subject} from 'rxjs';
import { Agent } from './agent';
import { equipRecipe } from './model'

@Injectable({
  providedIn: 'root'
})
export class SoliProviderService implements OnDestroy{
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private http:HttpClient,
    private papa: Papa
  ) { }

  private dataAgent        : Array<Agent>;
  private dataItemMaterial : Array<object>;
  private dataQuest        : Array<object>;
  private dataGladia       : Array<object>;
  private dataCocoon       : Array<object>;
  private dataRecipeEquip  : equipRecipe;
  private dataEquip        : Array<object>;

  public hashAgentList      : Map<string, number>;
  public hashCocoonList     : Map<string, number>;
  public hashGladiaList     : Map<string, number>;
  public hashItemList       : Map<string, number>;
  public hashQuestList      : Map<string, number>;
  public hashEquipList      : Map<string, number>;
  public hashRecipeEquipList: Map<string, number>;
  public hashItemToName     : Map<string, string>;
  public hashQuestIdToName  : Map<string, string>;
  public hashCocoonIdToName : Map<string, string>;
  public hashEquipIdToName  : Map<string, string>;
 
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
  public getdataRecipeEquip():equipRecipe {
    return this.dataRecipeEquip
  }
  public getdataEquip() {
    return this.dataEquip
  }

  sheetUrlAgent:        string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQxYfMrORo8jx12o1X0131u0OORd6aSE4Z8YPzBXCrwQurnUNpHR1XsLfapdSEYJEmqfRO5ISnlrEzP/pub?output=csv'; 
  sheetUrlItemMaterial: string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKFLmOd7RKXok2-W1ykDjONAMg3IUnYsjxbGsfSF7xFb_weA7qM-4mmVQfrSTUgFBDqBmLmgMgQhek/pub?output=csv';
  sheetUrlQuest       : string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFoM20vM0fBrbr0_8t1O7j31xF-HdpL8eKUdR37HqEMqGeWLff7h_CiPBN5A0934032Bb0x-yKdhKQ/pub?output=csv';
  sheetUrlGladia      : string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTaafPLh57OeldvUOgniBokurK5PHNWu5HPobB1n35utMwebEEvwTiiqgzMCxG04Y5sbJPxnto694YB/pub?output=csv';
  sheetUrlCocoon      : string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSX6pSJ_pPlXoRi_AsrvKHXuPzZWRc2v2hs1FayVhlFL8QdOOGsWZqwQ-rAZL3DTwpOAmYNAfTSEHoQ/pub?output=csv';
  sheetUrlRecipeEquip : string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRFFBlB361q-jDLZsNiKhvLtlIhREO4Hb2jTWWIOIyFKvitNL5nzI0oEZD5DX_NL8nq38jcscDbjxOT/pub?output=csv';
  sheetUrlEquip       : string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRZMGmBY3yePQI2p9LKr-hohXIpQPsagoRcaj9T8BRtL7ljLYXAUNQGisNGcnO7-btW1tLP63oSJGYO/pub?output=csv';

  load(){
    console.log("Loading data...")
    return new Promise((resolve, reject) => {
    forkJoin([
      this.http.get(this.sheetUrlAgent,        {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlItemMaterial, {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlQuest,        {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlGladia,       {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlCocoon,       {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlRecipeEquip,  {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlEquip,        {responseType:'text'}).pipe(map(res => res))
    ])
    .subscribe(response => {
      this.dataAgent        = this.papa.parse(response[0], {header:true}).data
      this.dataItemMaterial = this.papa.parse(response[1], {header:true}).data
      this.dataQuest        = this.papa.parse(response[2], {header:true}).data
      this.dataGladia       = this.papa.parse(response[3], {header:true}).data
      this.dataCocoon       = this.papa.parse(response[4], {header:true}).data
      this.dataRecipeEquip  = this.papa.parse(response[5], {header:true}).data
      this.dataEquip        = this.papa.parse(response[6], {header:true, dynamicTyping: true}).data
 

      this.hashAgentList       = this.setMap(this.dataAgent,        "ID")
      this.hashCocoonList      = this.setMap(this.dataCocoon,       "ID")
      this.hashGladiaList      = this.setMap(this.dataGladia,       "ID")
      this.hashItemList        = this.setMap(this.dataItemMaterial, "ID")
      this.hashQuestList       = this.setMap(this.dataQuest,        "ID")
      this.hashEquipList       = this.setMap(this.dataEquip,        "ID")
      this.hashRecipeEquipList = this.setMap(this.dataRecipeEquip,  "ID")
      this.hashItemToName      = this.setMap(this.dataItemMaterial, "ID", "Name");
      this.hashQuestIdToName   = this.setMap(this.dataQuest,        "ID", "Name");
      this.hashCocoonIdToName  = this.setMap(this.dataCocoon,       "ID", "Name");
      this.hashEquipIdToName   = this.setMap(this.dataEquip,        "ID", "name");

      resolve(true);
    })
    })
  }

  setMap(data, key:string, value?:string){
    let map = new Map()
    if(value){
      for (let idx=0; idx<data.length; idx++){
         map.set(data[idx][key], data[idx][value])
      }
    }
    else{
      for (let idx=0; idx<data.length; idx++){
        map.set(data[idx][key], idx)
      }
    }
    return map
  }

//  genArray(data, key:string, value?:string){
//    let arr = {}
//    if (value){
//      for (let i in data){
//        arr[data[i][key]] = data[i][value];
//      }
//    }
//    else{
//      for (let i in data){
//        arr[data[i][key]] = i;
//      }
//    }
//   return arr;
//  }

  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }
}
