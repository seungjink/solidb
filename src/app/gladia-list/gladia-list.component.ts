import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort'
import { SoliProviderService } from '../shared/soli-provider.service'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gladia-list',
  templateUrl: './gladia-list.component.html',
  styleUrls: ['./gladia-list.component.scss']
})
export class GladiaListComponent implements OnInit {
  rawdata : any ;
  dataSource : any;
  displayedColumns: string[] = ['ID', 'Atk', 'Def', 'Hp', 'Skill']

  constructor(
    private soliProvider: SoliProviderService
  ) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.soliProvider.getdataGladia())
    this.dataSource.sort = this.sort
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
