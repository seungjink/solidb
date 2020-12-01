import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort'
import { SoliProviderService } from '../shared/soli-provider.service'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-boss-list',
  templateUrl: './boss-list.component.html',
  styleUrls: ['./boss-list.component.scss']
})
export class BossListComponent implements OnInit {
  rawdata : any ;
  dataSource : any;
  displayedColumns: string[] = ['ID', 'Info'];
  //displayedColumns: string[] = ['ID'];

  constructor(
    private soliProvider: SoliProviderService
  ) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.soliProvider.getdataBossInfo())
    this.dataSource.sort = this.sort
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
