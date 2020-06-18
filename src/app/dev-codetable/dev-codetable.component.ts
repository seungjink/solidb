import { Component, OnInit } from '@angular/core';
import { SoliProviderService } from '../shared/soli-provider.service';
import { equiplist } from './equiplist';

@Component({
  selector: 'app-dev-codetable',
  templateUrl: './dev-codetable.component.html',
  styleUrls: ['./dev-codetable.component.scss'],
})
export class DevCodetableComponent implements OnInit {
  public equip;
  constructor(private soliProvider: SoliProviderService) {}
  ngOnInit(): void {
    this.equip = equiplist;
  }
}
