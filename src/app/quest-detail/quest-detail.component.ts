import { Component, OnInit } from '@angular/core';
import { SoliProviderService } from '../shared/soli-provider.service';
import { AtkTypeENG, QuestRSC } from '../shared/soliHashTable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styleUrls: [
    './quest-detail.component.scss',
    '../../assets/style/base-detail.component.scss',
  ],
})
export class QuestDetailComponent implements OnInit {
  public idItem: string;
  data: any;
  constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idItem = params['id'];
      this.data = this.soliProvider.getdataQuest()[
        this.soliProvider.hashQuestList.get(this.idItem)
      ];
    });
  }

  getAtkType(x: string) {
    let xs = [];
    for (let y of x.split('')) {
      xs.push(AtkTypeENG[y]);
    }
    return xs;
  }

  getTime(x: string) {
    let y = x.split(',');
    return '+ ' + y[0] + '분 ' + y[1] + '초';
  }

  getRandomItem(y: string) {
    // x = ID of tha item (cocoon or material.)
    let id = y.split(',');
    var resultArr = [];

    for (let i = 0; i < id.length; i++) {
      resultArr.push([
        this.soliProvider.hashItemToName.get(id[i])
          ? this.soliProvider.hashItemToName.get(id[i])
          : this.soliProvider.hashCocoonIdToName.get(id[i]),
        id[i],
      ]);
    }

    return resultArr;
  }

  getFixedItem(y: string) {
    if (y == '') {
      return '';
    } else {
      let parsed = JSON.parse(y);
      let resultArr = [];

      for (let id in parsed) {
        resultArr.push([
          id,
          parsed[id],
          this.soliProvider.hashItemToName.get(id)
            ? this.soliProvider.hashItemToName.get(id)
            : this.soliProvider.hashCocoonIdToName.get(id),
        ]);
      }
      return resultArr;
    }
  }

  getRSC(): any {
    let rsc = [];
    for (let x of QuestRSC) {
      let y = '';
      if (this.data[x[1]] == '1') {
        y = 'Checkmark';
      }
      rsc.push([x[0], y, this.data[x[2]]]);
    }
    return rsc;
  }
}
