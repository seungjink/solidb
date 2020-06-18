import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SoliProviderService } from '../shared/soli-provider.service';

@Component({
  selector: 'app-dev-equip-recipie',
  templateUrl: './dev-equip-recipie.component.html',
  styleUrls: [
    './dev-equip-recipie.component.scss',
    '../../assets/style/base-detail.component.scss',
  ],
})
export class DevEquipRecipieComponent implements OnInit {
  filteredOptions: Observable<any>;
  filteredEquip: Observable<any>;
  itemControl = new FormControl();
  equipControl = new FormControl();
  itemMaterial: any;
  equip: any;
  result: string;

  materialsList = [];
  recipeForm = this.fb.group({
    name: [''],
    tier: [''],
    hour: [''],
    minute: [''],
    sec: [''],
    rsc_A: [''],
    rsc_B: [''],
    rsc_C: [''],
    rsc_D: [''],
    MA90042: [''],
    MA90043: [''],
    cc: [''],
    dc: [''],
    nyang: [''],
    MA90016: [''],
    baseEquip: [''],
    materials: this.fb.array([]),
    results: this.fb.array([]),
  });
  INITIALFORM = this.recipeForm.value;

  constructor(
    private soliProvider: SoliProviderService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.itemMaterial = this.soliProvider.getdataItemMaterial();
    this.equip = this.soliProvider.getdataEquip();
    this.filteredOptions = this.itemControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.itemMaterial.slice()))
    );
    this.filteredEquip = this.equipControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filterEquip(name) : this.equip.slice()))
    );
  }

  displayFn(data): string {
    return data && data.Name ? data.Name : '';
  }

  displayFn2(data): string {
    return data && data.name ? data.name : '';
  }

  private _filter(name: string) {
    const filterValue = name.toLowerCase();

    return this.itemMaterial.filter(
      (option) => option.Name.indexOf(filterValue) === 0
    );
  }

  private _filterEquip(name: string) {
    const filterValue = name.toLowerCase();

    return this.equip.filter(
      (option) => option.name.indexOf(filterValue) === 0
    );
  }

  get materials() {
    return this.recipeForm.get('materials') as FormArray;
  }

  get results() {
    return this.recipeForm.get('results') as FormArray;
  }

  addMaterials() {
    if (this.itemControl.value) {
      this.materials.push(
        this.fb.group({
          name: [this.itemControl.value.Name],
          ID: [this.itemControl.value.ID],
          count: [''],
        })
      );
      this.itemControl.reset('');
    }
  }

  addResults() {
    this.results.push(this.fb.control(''));
  }

  removeResults(i: number) {
    this.results.removeAt(i);
  }

  removeMaterials(i: number) {
    this.materials.removeAt(i);
  }
  updateBaseEquip() {
    this.recipeForm
      .get('baseEquip')
      .setValue({
        name: this.equipControl.value.name,
        ID: this.equipControl.value.ID,
      });
  }

  copyToClipboard() {
    return JSON.stringify(this.recipeForm.value);
  }
  reset() {
    this.recipeForm.reset(this.INITIALFORM);
    this.results.clear();
    this.materials.clear();
    this.itemControl.reset('');
    this.equipControl.reset('');
  }
}
