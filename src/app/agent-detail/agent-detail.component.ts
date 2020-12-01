import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoliProviderService } from '../shared/soli-provider.service'
import { AtkTypeKOR, resistAtkType} from '../shared/soliHashTable'
import { Agent } from '../shared/agent';


@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: [
    './agent-detail.component.scss',
    '../../assets/style/base-detail.component.scss'
  ]
})
export class AgentDetailComponent implements OnInit {
  imgList = []
  public idItem: string;
  public agent: Agent;
  resistAtkType:Array<string> = resistAtkType;
  positionType: any = {
    "원거리" : "ChaPosition_Long",
    "탱커" : "ChaPosition_Tank",
    "지원" : "ChaPosition_Support",
    "근접" : "ChaPosition_Short"
  }
 skillActive: any = [
    ["sk1icon", "sk1", "sk1context", "sk1cool"],
    ["sk2icon", "sk2", "sk2context", "sk2cool"],
    ["sk3icon", "sk3", "sk3context", "sk3cool"]
  ]
  skillPassive: any = [
    ["ps1icon", "ps1", "ps1rank", "ps1context"],
    ["ps2icon", "ps2", "ps2rank", "ps2context"]
  ]

 constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.idItem = params["id"];
    this.agent = this.soliProvider.getdataAgent()[this.soliProvider.hashAgentList.get(this.idItem)]
    })
  }
 
  getAgentAttr = (x: string): any => {
    return this.agent[x]
  }

  getPosition = (x: string): any => {
    return this.positionType[x]
  }

  getAtkType = (x: string): any => {
    return  AtkTypeKOR[x]
  }

  getAtkTypeMulti = (x: string): any => {
  let arr = [];
  for (let y of x.split(',')) {
    arr.push(AtkTypeKOR[y]);
  }
  return arr;
};
}
