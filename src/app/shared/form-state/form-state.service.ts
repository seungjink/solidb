import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  public equipListRowFilter: FormGroup;
  public equipListColFilter: FormGroup;
  public equipSorted: Object;
  constructor() { }
}
