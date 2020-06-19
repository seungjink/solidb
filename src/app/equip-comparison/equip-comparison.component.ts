import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-equip-comparison',
  templateUrl: './equip-comparison.component.html',
  styleUrls: [
    './equip-comparison.component.scss',
    '../../assets/style/base-detail.component.scss',
  ],
})
export class EquipComparisonComponent implements OnInit {
  public equip1;
  public equip2;

  displayStat = [
    ['atk', 'atk_min', 'atk_max', '공'],
    ['def', 'def_min', 'def_max', '방'],
    ['hp', 'hp_min', 'hp_max', '체'],
    ['skill', 'skill_min', 'skill_max', '스'],
  ];
  displayCri = [
    ['criAtkMin', 'criAtkMax', '공격크리'],
    ['criSkillMin', 'criSkillMax', '스킬크리'],
  ];

  displayFixed = [
    ['tier', '티어'],
    ['lvl', '착용레벨'],
    ['ChaAtkType_1', '참격저항'],
    ['ChaAtkType_2', '타격저항'],
    ['ChaAtkType_3', '화염저항'],
    ['ChaAtkType_4', '냉기저항'],
    ['ChaAtkType_5', '전격저항'],
    ['ChaAtkType_6', '신성저항'],
    ['ChaAtkType_7', '암흑저항'],
    ['mp', 'mp'],
    ['speed', '이동속도'],
  ];

  constructor(
    private dialogRef: MatDialogRef<EquipComparisonComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    if(this.data){
      this.equip1 = this.data.equip1;
      this.equip2 = this.data.equip2;
    }
  }

  getFixed() {
    let arr = [];
    for (let stat of this.displayFixed) {
      let s1 = this.equip1[stat[0]];
      let s2 = this.equip2[stat[0]];
      if (s1 || s2) {
        arr.push([s1, stat[1], s2]);
      }
    }
    return arr;
  }

  getBaseStat() {
    let arr = [];
    for (let stat of this.displayStat) {
      let s1 = this.getMinMax(
        this.equip1[stat[0]],
        this.equip1[stat[1]],
        this.equip1[stat[2]]
      );
      let s2 = this.getMinMax(
        this.equip2[stat[0]],
        this.equip2[stat[1]],
        this.equip2[stat[2]]
      );
      arr.push([s1, stat[3], s2]);
    }
    return arr;
  }

  getCritical() {
    let arr = [];
    for (let stat of this.displayCri) {
      let s1 = this.getMinMax(this.equip1[stat[0]], this.equip1[stat[1]]);
      let s2 = this.getMinMax(this.equip2[stat[0]], this.equip2[stat[1]]);
      if (s1 || s2) {
        arr.push([s1, stat[2], s2]);
      }
    }
    return arr;
  }

  getMinMax(xmin: number, xmax: number, xfixed?: number): string {
    if (xfixed || xmax) {
      let x0 = xfixed ? xfixed : 0;
      let x1 = xmin ? xmin : 0;
      let x2 = xmax ? xmax : 0;
      return `${x0 + x1} ~ ${x0 + x2}`;
    } else {
      return '';
    }
  }

  parsePlain(equip): Array<string> {
    let arr = [];
    if (equip.textPlain) {
      let splitted = equip.textPlain.match(/("[^"]*")|[^,]+/g);
      let arr = [];
      for (let x of splitted) {
        arr.push(x.replace(/['"]+/g, ''));
      }
      return arr;
    } else {
      return [''];
    }
  }

  parseFormatted(equip): Array<object> {
    if (equip.textFormatted) {
      return JSON.parse(`[${equip.textFormatted}]`);
    } else {
      return [{ head: '', min: '', max: '', tail: '' }];
    }
  }
}
