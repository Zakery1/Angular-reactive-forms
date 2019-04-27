import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  public purchasePrices: number[] = [1111,2222,3333,4444];

  myForm: FormGroup; 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  officerInputForm = this.fb.group({
		downPaymentPercentage: [''],
		upfrontMiFf: [''],
		miPercentage: [''],
		estimatedTaxes: [''],
		estimateHOI: [''],
		interestRate: [''],
		mortgageYears: [''],
    purchasePriceArray:  this.fb.array(this.purchasePrices.map(
			(price: number) => this.fb.control([ price ])
		))

	});

  get purchasePriceArray() {
    return this.officerInputForm.get('purchasePriceArray') as FormArray;
  }

}
