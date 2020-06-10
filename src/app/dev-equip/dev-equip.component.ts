import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dev-equip',
  templateUrl: './dev-equip.component.html',
  styleUrls: ['./dev-equip.component.scss']
})
export class DevEquipComponent implements OnInit {

    myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor() { }

  ngOnInit(): void {
  }

}
