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
  levels = [];
  grades = [];
  spheres = [];
  statForm = this.fb.group({
    def: [''],
    lvl: [''],
  });
  defForm = this.fb.group({
    def: [''],
    lvl: [''],
  });
  sphereForm = this.fb.group({
    grade: [''],
    init: [''],
    final: [''],
  });

  constructor(private fb: FormBuilder) {
    this.levels= this.getLevels();
    this.grades = this.getGrades();
    this.spheres= this.getSpheres();
  }

  ngOnInit(): void {}

  getSphereTotal(grade:number, init_grade:number, final_grade:number){
    if (init_grade >= final_grade){
      return "목표 강화도가 현재 강화도보다 높아야 합니다."
    }
    else{
      return this.spheres[grade].slice(init_grade,final_grade).reduce((x,y) => x + y)
    }
  }

  getSpheres() {
    return [
      [2, 8, 18, 32, 50, 72, 98, 128, 162, 200],
      [1, 6, 14, 25, 40, 57, 78, 102, 129, 160],
      [1, 4, 10, 19, 30, 43, 58, 76,  97,  120]
    ]
  }
  getGrades() {
    return [
      { id: 0, name: '주황', color:'dfb32e'},
      { id: 1, name: '보라', color:'c72fb9'},
      { id: 2, name: '파랑', color:'c72fb9'}
    ]
  }  
  getLevels() {
    return [
      { id: 0,  name: '역지존'},
      { id: 1,  name: '조잡' },
      { id: 2,  name: '빈약' },
      { id: 3,  name: '흔합' },
      { id: 4,  name: '보통' },
      { id: 5,  name: '양질' },
      { id: 6,  name: '상급' },
      { id: 7,  name: '걸작' },
      { id: 8,  name: '명품' },
      { id: 9,  name: '예술' },
      { id: 10, name: '지존' }
    ];
  }
}
