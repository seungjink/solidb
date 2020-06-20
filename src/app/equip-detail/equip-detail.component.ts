import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoliProviderService } from '../shared/soli-provider.service';
import { resistAtkType } from '../shared/soliHashTable';
import { equipRecipe } from '../shared/model';

@Component({
  selector: 'app-equip-detail',
  templateUrl: './equip-detail.component.html',
  styleUrls: [
    './equip-detail.component.scss',
    '../../assets/style/base-detail.component.scss',
  ],
})
export class EquipDetailComponent implements OnInit {
  public idEquip: string;
  public equip;
  public equipRecipe: equipRecipe[];


  stats = [
    ['공격력', 'atk', 'atk_min', 'atk_max'],
    ['방어력', 'def', 'def_min', 'def_max'],
    ['체력', 'hp', 'hp_min', 'hp_max'],
    ['스킬위력', 'skill', 'skill_min', 'skill_max'],
  ];

  recipeRsc = [
    ['rsc_A', '아르브'],
    ['rsc_B', '베크'],
    ['rsc_C', '시스트'],
    ['rsc_D', '다나'],
    ['MA90042', '아르브 결정'],
    ['MA90043', '베크 농축액'],
    ['cc', '시스트 결정'],
    ['dc', '다나 결정'],
    ['nyang', '냥'],
    ['MA90016', '제로스톤 진액'],
  ];

  resistAtkType: Array<string> = resistAtkType;

  constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idEquip = params['id'];
      this.equip = this.soliProvider.getdataEquip()[
        this.soliProvider.hashEquipList.get(this.idEquip)
      ];
      this.equipRecipe = [];
      this.equip.recipe
        .replace(/['"]+/g, '')
        .split(',')
        .forEach((val) => {
          this.equipRecipe.push(
            this.soliProvider.getdataRecipeEquip()[
              this.soliProvider.hashRecipeEquipList.get(val)
            ]
          );
        });
    });
  }

  getMinMax(xmin: number, xmax: number): string {
    return xmax ? `+ ${xmin} ~ ${xmax}` : '';
  }

  chkResist() {
    for (let x of this.resistAtkType) {
      if (this.equip[x]) {
        return true;
      }
    }
    return false;
  }

  parsePlain(): Array<string> {
    if (this.equip.textPlain) {
      let splitted = this.equip.textPlain.match(/("[^"]*")|[^,]+/g);
      let arr = [];
      for (let x of splitted) {
        arr.push(x.replace(/['"]+/g, ''));
      }
      return arr;
    } else {
      return [''];
    }
  }

  parseFormatted(): Array<object> {
    if (this.equip.textFormatted) {
      return JSON.parse(`[${this.equip.textFormatted}]`);
    } else {
      return [{ head: '', min: '', max: '', tail: '' }];
    }
  }

  parseRsc(recipe:equipRecipe) {
    let arr = [];
    for (let x of this.recipeRsc) {
      if (recipe[x[0]]) {
        arr.push([x[0], x[1], recipe[x[0]]]);
      }
    }
    return arr;
  }

  parseMaterial(recipe:equipRecipe) {
    if (recipe.materials) {
      return JSON.parse(`[${recipe.materials}]`);
    } else {
      return ''
//      return [{ name: '', ID: '', count: '' }];
    }
  }

  parseBaseEquip(recipe:equipRecipe) {
    if (recipe.baseEquip) {
      return JSON.parse(`[${recipe.baseEquip}]`);
    } else {
      return [{ name: '', ID: '' }];
    }
  }

  parseTime(recipe:equipRecipe) {
    let time = '';
    if (recipe.Hour) {
      time = `${recipe.Hour}시간`;
    }
    if (recipe.Minute) {
      time = `${time} ${recipe.Minute}분`;
    }
    if (recipe.Sec) {
      time = `${time} ${recipe.Sec}초`;
    }
    return time;
  }
}
