import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
	selector: 'app-calculations',
	templateUrl: './calculations.component.html',
	styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

	public purchasePrices: number[] = [1111, 2222, 3333, 4444];
	public downPayments: number[] = [1212, 2323, 3434, 4545];

	// tslint:disable-next-line:no-inferrable-types
	public downPaymentPercent: boolean = true;

	officerInputForm = this.fb.group({
		downPaymentPercentage: [''],
		upfrontMiFf: [''],
		miPercentage: [''],
		estimatedTaxes: [''],
		estimateHOI: [''],
		interestRate: [''],
		mortgageYears: [''],
		purchasePriceArray: this.fb.array(this.purchasePrices.map(
			(price: number) => this.fb.control([price])
		)),
		downPaymentArray: this.fb.array(this.downPayments.map(
			(downPayment: number) => this.fb.control([downPayment])
		)),

	});

	myForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {

	}

	get purchasePriceArray() {
		return this.officerInputForm.get('purchasePriceArray') as FormArray;
	}

	get downPaymentArray() {
		return this.officerInputForm.get('downPaymentArray') as FormArray;
	}

}
