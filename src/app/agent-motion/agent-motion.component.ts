import { Component, OnInit, AfterViewChecked, NgZone, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { spine as sp37 } from '../../assets/SpineData/spine37/spine37';
import { spine as sp38 } from '../../assets/SpineData/spine38/spine38';
import { spine as sp389 } from '../../assets/SpineData/spine389/spine389';
import { SoliProviderService } from '../shared/soli-provider.service'

@Component({
  selector: 'app-agent-motion',
  templateUrl: './agent-motion.component.html',
  styleUrls: ['./agent-motion.component.scss']
})
export class AgentMotionComponent implements OnInit, AfterViewChecked{
  public id: string;
  private inZone = true;
  ts: any;
  sp: any;
  spinever:string;
  sprite_type:string;

  constructor(
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private soliProvider: SoliProviderService
   ){}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.id = params["id"];

    if (this.id.substr(0,2) == "AG"){
      this.sprite_type = "agent";
      this.spinever = this.soliProvider.getdataAgent()[this.soliProvider.hashAgentList.get(this.id)].spinever
    }
    else if (this.id.substr(0,2) == "BS"){
      this.sprite_type = "boss";
      this.spinever = this.soliProvider.getdataBossInfo()[this.soliProvider.hashBossInfoList.get(this.id)].spinever
    }
    })


    if (this.spinever == "v37"){
      this.sp = sp37;
    }
    else if (this.spinever == "v38"){
      this.sp = sp38;
    }
    else if (this.spinever == "v389"){
      this.sp = sp389;
    }

    console.log("assets/SpineData/sprite_" + this.sprite_type + "/" + this.id + "/spine.json");

		this.ngZone.runOutsideAngular(() => {
          this.ts = new this.sp.SpinePlayer("spineContainer",{
    		  jsonUrl:  "assets/SpineData/sprite_" + this.sprite_type + "/" + this.id + "/spine.json",
    		  atlasUrl: "assets/SpineData/sprite_" + this.sprite_type + "/" + this.id + "/spine.atlas",
          animation: "z_idle",
    	  });
    });
  }

  ngAfterViewChecked() {
    console.log('Change detection triggered.');
  }

  ngOnDestroy(): void {
    this.ts = null;
  }

}
