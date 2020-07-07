import { Component, OnInit } from '@angular/core';
import { SoliProviderService } from '../shared/soli-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-materials-detail',
  templateUrl: './item-materials-detail.component.html',
  styleUrls: [
    './item-materials-detail.component.scss',
    '../../assets/style/base-detail.component.scss',
  ],
})
export class ItemMaterialsDetailComponent implements OnInit {
  public idItem: string;
  data: any;
  constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idItem = params['id'];
      this.data = this.soliProvider.getdataItemMaterial()[
        this.soliProvider.hashItemList.get(this.idItem)
      ];
    });
  }

  getFixedDrop(): Array<object> {
    let arr = [];
    let dropIdWithNum = JSON.parse(this.data.DropFixed);
    for (let key in dropIdWithNum) {
      arr.push([
        this.soliProvider.hashQuestIdToName.get(key),
        dropIdWithNum[key],
        key,
      ]);
    }
    return arr;
  }

  getRandomDrop(): Array<object> {
    let arr = [];
    let dropId = this.data.DropRandom.split(',');
    for (let item of dropId) {
      arr.push([this.soliProvider.hashQuestIdToName.get(item), item]);
    }
    return arr;
  }
}
