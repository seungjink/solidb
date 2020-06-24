import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-etc',
  templateUrl: './etc.component.html',
  styleUrls: [
    './etc.component.scss',
    '../../assets/style/base-detail.component.scss',
  ],
})
export class EtcComponent implements OnInit {
  math = Math;
  statForm = this.fb.group({
    def: [''],
    lvl: [''],
  });
  defForm = this.fb.group({
    def: [''],
    lvl: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
