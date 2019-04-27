import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  myForm: FormGroup; 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
    })

    this.myForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone,
    })
  }

}
