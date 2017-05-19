import { Component, Input, OnChanges }       from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Address, Hero, states } from './data-model';
import { HeroService }           from './hero.service';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges{
	@Input() hero: Hero;

	heroForm: FormGroup;
	nameChangeLog: string[] = [];
	states = states;

	constructor(private fb: FormBuilder,
			  private heroService: HeroService){

		this.createForm();
		this.logNameChange();
	}

	createForm(){
		this.heroForm = this.fb.group({
			name: '',
			secretLairs: this.fb.array([]),
			power: '',
			sidekick: ''
		});
	}

	ngOnChanges(){
		console.log("ngOnChanges called by: " + this.hero.name);
		this.heroForm.reset({
			name: this.hero.name
		});
		this.setAddresses(this.hero.addresses);
	}

	get secretLairs(): FormArray{
		return this.heroForm.get('secretLairs') as FormArray;
	};

	setAddresses(addresses: Address[]){
		/*
		 * addresses.map(
		 * 		function(address) {
		 * 			return this.fb.group(address);
		 * 		}
		 * )
		 * */
		const addressFGs = addresses.map(addess => this.fb.group(addess));
		const addressFormArray = this.fb.array(addressFGs);
		this.heroForm.setControl('secretLairs', addressFormArray);
		/*

		 var numbers = [1,2,3,4,5];
		 var timesTwo = numbers.map(function (number) {
				 return number * 2;
		 });

		 var timesTwo = numbers.map((number) => number * 2);

		 numbers.map(number => number * 2);


		 * var materials = [
		 'Hydrogen',
		 'Helium',
		 'Lithium',
		 'Beryllium'
		 ];

		 var materialsLength1 = materials.map(function(material) {
		 return material.length;
		 }); // [8,6,7,9]

		 var materialsLength2 = materials.map((material) => {
		 return material.length;
		 }); // [8,6,7,9]

		 var materialsLength3 = materials.map(material => material.length); /
		 / [8,6,7,9]
		 * */
	}

	addLair(){
		this.secretLairs.push(this.fb.group(new Address()));
	}

	onSubmit(){
		this.hero = this.prepareSaveHero();
		this.heroService.updateHero(this.hero).subscribe(/* error handling */);
		this.ngOnChanges();
	}

	prepareSaveHero(): Hero{
		const formModel = this.heroForm.value;

		// deep copy of form model lairs
		const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
			(address: Address) => Object.assign({}, address)
		);

		// return new `Hero` object containing a combination of original hero value(s)
		// and deep copies of changed form model values
		const saveHero: Hero = {
			id: this.hero.id,
			name: formModel.name as string,
			// addresses: formModel.secretLairs // <-- bad!
			addresses: secretLairsDeepCopy
		};
		return saveHero;
	}

	revert(){
		this.ngOnChanges();
	}

	logNameChange(){
		const nameControl = this.heroForm.get('name');
		nameControl.valueChanges.forEach(
			(value: string) => this.nameChangeLog.push(value)
		);
	}
}
