import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoliProviderService } from '../shared/soli-provider.service'
import { AtkTypeKOR, resistAtkType} from '../shared/soliHashTable'


@Component({
  selector: 'app-boss-detail',
  templateUrl: './boss-detail.component.html',
  styleUrls: [
    './boss-detail.component.scss',
    '../../assets/style/base-detail.component.scss'
  ]
})
export class BossDetailComponent implements OnInit {
  imgList = []
  boss;
  public idItem: string;
  resistAtkType:Array<string> = resistAtkType;

 constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.idItem = params["id"];
    this.boss = this.soliProvider.getdataBossInfo()[this.soliProvider.hashBossInfoList.get(this.idItem)]
    console.log(this.boss)
    })
  }
}
