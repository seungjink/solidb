import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Papa } from 'ngx-papaparse';
import { map } from 'rxjs/operators';
import { forkJoin, Subject} from 'rxjs';
import { Agent } from './agent';
import { BossInfo } from './boss';
import { equipRecipe } from './model'
import data from '../../assets/RawData/Ddata.json';

@Injectable({
  providedIn: 'root'
})
export class SoliProviderService implements OnDestroy{
  private destroy$: Subject<void> = new Subject<void>();
public headerDict = {
  'Content-Type': 'text/csv',
}
 
  constructor(
    private http:HttpClient,
    private papa: Papa
  ) { }

  private dataAgent        : Array<Agent>;
  private dataBossInfo     : Array<BossInfo>;
  private dataItemMaterial : Array<object>;
  private dataQuest        : Array<object>;
  private dataGladia       : Array<object>;
  private dataCocoon       : Array<object>;
  private dataRecipeEquip  : equipRecipe;
  private dataEquip        : Array<object>;
  private dataNotice       : Array<object>;

  public hashAgentList      : Map<string, number>;
  public hashBossInfoList   : Map<string, number>;
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
  public getdataBossInfo(){
    return this.dataBossInfo
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
  public getdataNotice() {
    return this.dataNotice
  }

  sheetUrlAgent        : string ='https://dl.dropbox.com/s/'+ data.Agent +'/Agent.csv?dl=1'
  sheetUrlBossInfo     : string ='https://dl.dropbox.com/s/'+ data.BossInfo +'/BossInfo.csv?dl=1'
  sheetUrlItemMaterial : string ='https://dl.dropbox.com/s/'+ data.ItemMaterial +'/Item_Materials.csv?dl=1'
  sheetUrlQuest        : string ='https://dl.dropbox.com/s/'+ data.Quest +'/Quest.csv?dl=1'
  sheetUrlGladia       : string ='https://dl.dropbox.com/s/'+ data.Gladia +'/Gladia.csv?dl=1'
  sheetUrlCocoon       : string ='https://dl.dropbox.com/s/'+ data.Cocoon +'/Cocoon.csv?dl=1'
  sheetUrlRecipeEquip  : string ='https://dl.dropbox.com/s/'+ data.RecipeEquip +'/RecipeEquip.csv?dl=1'
  sheetUrlNotice       : string ='https://dl.dropbox.com/s/'+ data.Notice +'/Notice.csv?dl=1'
  sheetUrlEquip        : string ='https://dl.dropbox.com/s/'+ data.Equip+'/Equip.csv?dl=1'

  //sheetUrlAgent        : string ='https://www.dropbox.com/scl/fi/yr7a1oegm49lhtg89jh5b/Agent.csv?rlkey=ujsbpioixnrk9kmwp3q0pa2cv&st=xrf5h9w7&dl=1'
  //sheetUrlBossInfo     : string ='https://www.dropbox.com/scl/fi/a3gj5dozwqgtmusqgj7ym/BossInfo.csv?rlkey=08kg9d3udmnzyy8d1s50nwto2&st=p21f976m&dl=1'
  //sheetUrlItemMaterial : string ='https://www.dropbox.com/scl/fi/jc0h9lry6oludavrx4npa/Item_Materials.csv?rlkey=9n8ftai8zt11r427klhq12ywy&st=q338ncwm&dl=1'
  //sheetUrlQuest        : string ='https://www.dropbox.com/scl/fi/ojip6zfufvf9abn9aoxmw/Quest.csv?rlkey=nul4p49rjbsfw9r8kssvwcddq&st=j19046o0&dl=1'
  //sheetUrlGladia       : string ='https://www.dropbox.com/scl/fi/d4p0q7z2zp1rj4v1jjvtn/Gladia.csv?rlkey=cc6690tvanzjb5xs2cfopkasj&st=s5orfyg1&dl=1'
  //sheetUrlCocoon       : string ='https://www.dropbox.com/scl/fi/mk9zqa81amyaxissmu6fm/Cocoons.csv?rlkey=8nkb9v0l294d1olu3os997iib&st=dls9xsta&dl=1'
  //sheetUrlRecipeEquip  : string ='https://www.dropbox.com/scl/fi/5onolbj892i8wygp0k2pm/RecipeEquip.csv?rlkey=mrxtbzh31ag2aea437ottk1ay&st=w2tmk51e&dl=1'
  //sheetUrlNotice       : string ='https://www.dropbox.com/scl/fi/k5k3yfbbtckqb3td4igak/Notice.csv?rlkey=4wqs9dh1kl8xkla3kc5v46jne&st=wbedf44k&dl=1'
  //sheetUrlEquip        : string ='https://www.dropbox.com/scl/fi/b0ui2uo2q1q8b6e6rt0l8/Equip.csv?rlkey=mhtx4npoygrnruaum9079ux27&st=znulckyp&dl=1'

//  sheetUrlAgent       : string = 'https://docs.google.com/spreadsheets/d/e/' + gdata.SheetID +'/pub?gid=' + data.Agent        +'&single=true&output=csv'; 
 // sheetUrlItemMaterial: string = 'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.ItemMaterial +'&single=true&output=csv';
 // sheetUrlQuest       : string = 'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Quest        +'&single=true&output=csv';
 // sheetUrlGladia      : string = 'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Gladia       +'&single=true&output=csv';
 // sheetUrlCocoon      : string = 'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Cocoon       +'&single=true&output=csv';
 // sheetUrlRecipeEquip : string = 'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.RecipeEquip  +'&single=true&output=csv';
 // sheetUrlEquip       : string = 'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Equip        +'&single=true&output=csv';
 // sheetUrlNotice      : string = 'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Notice       +'&single=true&output=csv';

//  http request for google sheet produces CORS error sometimes. Why??
//  Until resolving this issue, we need to use proxy strategy.
//
//  sheetUrlAgent:        string = 'assets/RawData/Agent.csv' //'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Agent        +'&single=true&output=csv'; 
//  sheetUrlItemMaterial: string = 'assets/RawData/ItemMaterial.csv' //'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.ItemMaterial +'&single=true&output=csv';
//  sheetUrlQuest       : string = 'assets/RawData/Quest.csv' //'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Quest        +'&single=true&output=csv';
//  sheetUrlGladia      : string = 'assets/RawData/Gladia.csv' //'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Gladia       +'&single=true&output=csv';
//  sheetUrlCocoon      : string = 'assets/RawData/Cocoon.csv' //'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Cocoon       +'&single=true&output=csv';
//  sheetUrlRecipeEquip : string = 'assets/RawData/RecipeEquip.csv' //'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.RecipeEquip  +'&single=true&output=csv';
//  sheetUrlEquip       : string = 'assets/RawData/Equip.csv' //'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Equip        +'&single=true&output=csv';
//  sheetUrlNotice      : string = 'assets/RawData/Notice.csv' //'https://docs.google.com/spreadsheets/d/e/' + data.SheetID +'/pub?gid=' + data.Notice       +'&single=true&output=csv';

  load(){
    console.log("Loading data...")
    return new Promise((resolve, reject) => {
    
    forkJoin([
      this.http.get(this.sheetUrlAgent,        {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlBossInfo,     {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlItemMaterial, {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlQuest,        {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlCocoon,       {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlRecipeEquip,  {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlEquip,        {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlNotice,       {responseType:'text'}).pipe(map(res => res)),
      this.http.get(this.sheetUrlGladia,       {responseType:'text'}).pipe(map(res => res)),
    ])
    .subscribe(response => {
      this.dataAgent        = this.papa.parse(response[0], {header:true}).data
      this.dataBossInfo     = this.papa.parse(response[1], {header:true}).data
      this.dataItemMaterial = this.papa.parse(response[2], {header:true}).data
      this.dataQuest        = this.papa.parse(response[3], {header:true}).data
      this.dataCocoon       = this.papa.parse(response[4], {header:true}).data
      this.dataRecipeEquip  = this.papa.parse(response[5], {header:true}).data
      this.dataEquip        = this.papa.parse(response[6], {header:true, dynamicTyping: true}).data
      this.dataNotice       = this.papa.parse(response[7], {header:true}).data
      this.dataGladia       = this.papa.parse(response[8], {header:true}).data

      this.hashAgentList       = this.setMap(this.dataAgent,        "ID")
      this.hashBossInfoList    = this.setMap(this.dataBossInfo,     "ID")
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

      console.log("Loading Completed.")
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

  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }
}
