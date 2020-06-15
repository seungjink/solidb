import { Component, OnInit, AfterViewChecked, NgZone, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { spine as sp37 } from '../../assets/SpineData/spine37/spine37';
import { spine as sp38 } from '../../assets/SpineData/spine38/spine38';
import { SoliProviderService } from '../shared/soli-provider.service'

@Component({
  selector: 'app-agent-motion',
  templateUrl: './agent-motion.component.html',
  styleUrls: ['./agent-motion.component.scss']
})
export class AgentMotionComponent implements OnInit, AfterViewChecked{
  public idAgent: string;
  private inZone = true;
  ts: any;
  sp: any;
  spinever:string;

  constructor(
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private soliProvider: SoliProviderService
   ){}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.idAgent = params["id"];
    this.spinever = this.soliProvider.getdataAgent()[this.soliProvider.hashAgentList[this.idAgent]].spinever
    })
    if (this.spinever == "v37"){
      this.sp = sp37;
    }
    else if (this.spinever == "v38"){
      this.sp = sp38;
    }

		this.ngZone.runOutsideAngular(() => {
          this.ts = new this.sp.SpinePlayer("spineContainer",{
    		  jsonUrl:  "assets/SpineData/sprite/" + this.idAgent + "/spine.json",
    		  atlasUrl: "assets/SpineData/sprite/" + this.idAgent + "/spine.atlas",
          animation: "z_idle",
    	  });
    });
  }

  ngAfterViewChecked() {
    console.log('Change detection triggered!');
  }

  ngOnDestroy(): void {
    
    this.ts = null;
  }

}
