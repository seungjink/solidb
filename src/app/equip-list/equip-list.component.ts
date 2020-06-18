import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SoliProviderService } from '../shared/soli-provider.service';
import { resistAtkType } from '../shared/soliHashTable';
import { FormStateService } from '../shared/form-state/form-state.service';
import { FormControl, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-equip-list',
  templateUrl: './equip-list.component.html',
  styleUrls: [
    './equip-list.component.scss',
    '../../assets/style/base-detail.component.scss',
  ],
})
export class EquipListComponent implements OnInit, OnDestroy {
  rawdata: any;
  dataSource: any;
  equipForm = this.fb.group({
    ID: true,
    tier: false,
    atk: true,
    def: true,
    hp: true,
    skill: true,
    ChaAtkType_1: false,
    ChaAtkType_2: false,
    ChaAtkType_3: false,
    ChaAtkType_4: false,
    ChaAtkType_5: false,
    ChaAtkType_6: false,
    ChaAtkType_7: false,
    atk_cri: false,
    skill_cri: false,
  });

  filterRowForm: FormGroup;
  resistAtkType: Array<string> = resistAtkType;
  columnChanged: any;
  filterChanged: any;
  displayedColumn = Object.keys(this.equipForm.value).filter(
    (k) => this.equipForm.value[k]
  );
  appliedFilter: any;

  constructor(
    private soliProvider: SoliProviderService,
    private fb: FormBuilder,
    private fs: FormStateService
  ) {
    this.filterRowForm = this.fb.group({
      ChaPosition_Short: [{ value: true, disabled: false }],
      ChaPosition_Tank: [{ value: true, disabled: false }],
      ChaPosition_Long: [{ value: true, disabled: false }],
      ChaPosition_Support: [{ value: true, disabled: false }],
      Tier: this.fb.array([
        { value: true, disabled: false },
        { value: true, disabled: false },
        { value: true, disabled: false },
        { value: true, disabled: false },
        { value: true, disabled: false },
        { value: true, disabled: false },
        { value: true, disabled: false },
      ]),
    });
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    if (this.fs.equipListRowFilter) {
      this.filterRowForm = this.fs.equipListRowFilter;
      this.appliedFilter = this.filterRowForm.value;
    }

    this.dataSource = new MatTableDataSource(this.soliProvider.getdataEquip());
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'atk':
          return item.atk + item.atk_max;
        case 'def':
          return item.def + item.def_max;
        case 'hp':
          return item.hp + item.hp_max;
        case 'skill':
          return item.skill + item.skill_max;
        case 'atk_cri':
          return item.criAtkMax;
        case 'skill_cri':
          return item.criSkillMax;
 
        default:
          return item[property];
      }
    };

    this.columnChanged = this.equipForm.valueChanges.subscribe((value) => {
      this.displayedColumn = Object.keys(value).filter((k) => value[k]);
    });

    this.filterChanged = this.filterRowForm.valueChanges.subscribe((value) => {
      this.applyFilter(value);
    });

    this.dataSource.filterPredicate = function (data, filter: any): boolean {
      return (
        ((data.ChaPosition_Short && filter.ChaPosition_Short) ||
          (data.ChaPosition_Long && filter.ChaPosition_Long) ||
          (data.ChaPosition_Support && filter.ChaPosition_Support) ||
          (data.ChaPosition_Tank && filter.ChaPosition_Tank)) &&
        filter.Tier[data.tier - 1]
      );
    };

    this.applyFilter(this.appliedFilter);
  }

  ngOnDestroy(): void {
    this.columnChanged.unsubscribe();
    this.filterChanged.unsubscribe();
    this.fs.equipListRowFilter = this.filterRowForm;
  }

  applyFilter(filterValue: Object) {
    this.dataSource.filter = filterValue;
  }

  getMinMax(x, xmin, xmax) {
    return x + xmax == 0 ? '' : `${x + xmin} - ${x + xmax}`;
  }

  get Tier() {
    return this.filterRowForm.get('Tier') as FormArray;
  }
}
