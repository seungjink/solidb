import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort'
import { SoliProviderService } from '../soli-provider.service'
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-cocoon-list',
  templateUrl: './cocoon-list.component.html',
  styleUrls: ['./cocoon-list.component.scss']
})
export class CocoonListComponent implements OnInit {
  rawdata : any ;
  dataSource : any;
  passedObject = this;
  displayedColumns: string[] = ['Name', 'Tier', 'Time', 'Desc']

  constructor(
    private soliProvider: SoliProviderService
  ) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.soliProvider.getdataCocoon())
    this.dataSource.sort = this.sort
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
