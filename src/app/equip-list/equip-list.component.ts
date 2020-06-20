import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SoliProviderService } from '../shared/soli-provider.service';
import { resistAtkType } from '../shared/soliHashTable';
import { FormStateService } from '../shared/form-state/form-state.service';
import { FormControl, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EquipComparisonComponent } from '../equip-comparison/equip-comparison.component';

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
  rawdataEquipComparison: any;
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

  filteredOptions1: Observable<any>;
  filteredOptions2: Observable<any>;
  itemControl1 = new FormControl();
  itemControl2 = new FormControl();

  constructor(
    private soliProvider: SoliProviderService,
    private fb: FormBuilder,
    private fs: FormStateService,
    private dialog: MatDialog
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
      Name: ['']
    });
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    if (this.fs.equipListRowFilter) {
      this.filterRowForm = this.fs.equipListRowFilter;
      this.appliedFilter = this.filterRowForm.value;
    }
    if (this.fs.equipListColFilter) {
      this.equipForm = this.fs.equipListColFilter;
      this.displayedColumn = Object.keys(this.equipForm.value).filter(
        (k) => this.equipForm.value[k]
      );
    }

    this.rawdata = this.soliProvider.getdataEquip();
    this.rawdataEquipComparison = Array.from(
      this.soliProvider.hashEquipIdToName
    );

    this.dataSource = new MatTableDataSource(this.rawdata);
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'ID':
          return this.soliProvider.hashEquipList.get(item.ID);
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
        filter.Tier[data.tier - 1] &&
        (data.name.includes(filter.Name))
      );
    };

    this.applyFilter(this.appliedFilter);

    this.filteredOptions1 = this.itemControl1.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value[1])),
      map((name) =>
        name ? this._filter(name) : this.rawdataEquipComparison.slice()
      )
    );
    this.filteredOptions2 = this.itemControl2.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value[1])),
      map((name) =>
        name ? this._filter(name) : this.rawdataEquipComparison.slice()
      )
    );

    if(this.fs.equipSorted){
      this.dataSource.sort.active = this.fs.equipSorted["active"]
      this.dataSource.sort._direction = this.fs.equipSorted["_direction"]
    }
  }

  ngOnDestroy(): void {
    this.columnChanged.unsubscribe();
    this.filterChanged.unsubscribe();
    this.fs.equipListRowFilter = this.filterRowForm;
    this.fs.equipListColFilter = this.equipForm;
    this.fs.equipSorted = {active: this.dataSource.sort.active, _direction: this.dataSource.sort._direction}
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

  displayFn(data): string {
    return data && data ? data[1] : '';
  }

  private _filter(name: string) {
    const filterValue = name.toLowerCase();

    return this.rawdataEquipComparison.filter(
      (option) => option[1].indexOf(filterValue) === 0
    );
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.maxHeight = '90vh';
    if (this.itemControl1.value && this.itemControl2.value) {
      dialogConfig.data = {
        equip1: this.rawdata[
          this.soliProvider.hashEquipList.get(this.itemControl1.value[0])
        ],
        equip2: this.rawdata[
          this.soliProvider.hashEquipList.get(this.itemControl2.value[0])
        ],
      };
    }

    this.dialog.open(EquipComparisonComponent, dialogConfig);
  }
}
