import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SoliProviderService } from '../shared/soli-provider.service';

@Component({
  selector: 'app-dev-equip',
  templateUrl: './dev-equip.component.html',
  styleUrls: [
    './dev-equip.component.scss',
    '../../assets/style/base-detail.component.scss',
  ],
})
export class DevEquipComponent implements OnInit {
  filteredOptions: Observable<any>;
  itemControl = new FormControl();
  equipRecipe: any;

  equipForm = this.fb.group({
    name: [''],
    recipe: [''],
    lvl: [''],
    tier: [''],
    atk: [''],
    atk_min: [''],
    atk_max: [''],
    def: [''],
    def_min: [''],
    def_max: [''],
    hp: [''],
    hp_min: [''],
    hp_max: [''],
    skill: [''],
    skill_min: [''],
    skill_max: [''],
    countRandomStat: [''],
    ChaAtkType_1: [''],
    ChaAtkType_2: [''],
    ChaAtkType_3: [''],
    ChaAtkType_4: [''],
    ChaAtkType_5: [''],
    ChaAtkType_6: [''],
    ChaAtkType_7: [''],
    mp: [''],
    speed: [''],
    criAtkMin: [''],
    criAtkMax: [''],
    criSkillMin: [''],
    criSkillMax: [''],
    ChaPosition_Short: false,
    ChaPosition_Tank: false,
    ChaPosition_Long: false,
    ChaPosition_Support: false,
    agent: [''],
    belonging: false,
    textPlain: this.fb.array([]),
    textFormatted: this.fb.array([]),
    textSigil: this.fb.array([]),
  });
  INITIALFORM = this.equipForm.value;
  checkAll = false;

  constructor(
    private soliProvider: SoliProviderService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.equipRecipe = this.getEquipFromRecipe(
      this.soliProvider.getdataRecipeEquip()
    );
    this.filteredOptions = this.itemControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.equipRecipe.slice()))
    );
  }

  get textPlain() {
    return this.equipForm.get('textPlain') as FormArray;
  }

  get textFormatted() {
    return this.equipForm.get('textFormatted') as FormArray;
  }

  get textSigil() {
    return this.equipForm.get('textSigil') as FormArray;
  }


  getEquipFromRecipe(equipRecipe: any): Array<object> {
    let res = [];
    for (let row of equipRecipe) {
      let items = row.results.split(',');
      for (let item of items) {
        res.push({
          recipeId: row.ID,
          recipeName: row.Name,
          name: item.replace(/['"]+/g, ''),
        });
      }
    }
    return res;
  }

  removeTextFormatted(i: number) {
    this.textFormatted.removeAt(i);
  }

  removeTextSigil(i: number) {
    this.textSigil.removeAt(i);
  }


  addTextPlain() {
    this.textPlain.push(this.fb.control(''));
  }

  removeTextPlain(i: number) {
    this.textPlain.removeAt(i);
  }

  addTextFormatted() {
    this.textFormatted.push(
      this.fb.group({
        head: [''],
        min: [''],
        max: [''],
        tail: [''],
      })
    );
  }
  
  addTextSigil(){
    this.textSigil.push(
      this.fb.group({
        name: [''],
        head: [''],
        min: [''],
        max: [''],
        tail: [''],
      })
    )
  }

  displayFn(data): string {
    return data && data.name ? data.name : '';
  }

  private _filter(name: string) {
    const filterValue = name.toLowerCase();

    return this.equipRecipe.filter(
      (option) => option.name.indexOf(filterValue) === 0
    );
  }

  updatePosition() {
    this.checkAll = !this.checkAll;
    this.equipForm.get('ChaPosition_Short').setValue(this.checkAll);
    this.equipForm.get('ChaPosition_Tank').setValue(this.checkAll);
    this.equipForm.get('ChaPosition_Long').setValue(this.checkAll);
    this.equipForm.get('ChaPosition_Support').setValue(this.checkAll);
  }

  copyToClipboard() {
    return JSON.stringify(this.equipForm.value);
  }

  updateNameRecipe() {
    this.equipForm.get('name').setValue(this.itemControl.value.name);
    this.equipForm.get('recipe').setValue(this.itemControl.value.recipeId);
  }

  reset() {
    this.equipForm.reset(this.INITIALFORM);
    this.textPlain.clear();
    this.textFormatted.clear();
    this.textSigil.clear();
    this.itemControl.reset('');
  }


}
