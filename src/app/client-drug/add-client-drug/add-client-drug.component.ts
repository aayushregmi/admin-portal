import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientDrugService } from '../client-drug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client-drug',
  templateUrl: './add-client-drug.component.html',
  styleUrls: ['./add-client-drug.component.scss']
})
export class AddClientDrugComponent implements OnInit, OnChanges {

  @Input() isUpdate: boolean;
  @Input() prePopFormData: any;

  formSubmitted = false;

  // Form group
  addClientDrugFormGroup: FormGroup;

  // Form controls
  ndc: FormControl;
  brandName: FormControl;
  genericName: FormControl;
  strength: FormControl;
  strengthUnit: FormControl;
  otc: FormControl;
  supply: FormControl;
  generic: FormControl;
  drugDescription: FormControl;

  formInitialized = false;

  constructor(private clientDrugService: ClientDrugService, private router: Router) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.ndc = new FormControl('', [Validators.required]);
    this.brandName = new FormControl('');
    this.genericName = new FormControl('');
    this.strength = new FormControl('');
    this.strengthUnit = new FormControl('');
    this.otc = new FormControl('', [Validators.maxLength(1)]);
    this.supply = new FormControl('', [Validators.maxLength(1)]);
    this.generic = new FormControl('', [Validators.maxLength(1)]);
    this.drugDescription = new FormControl('');

    this.addClientDrugFormGroup = new FormGroup({
      ndc: this.ndc,
      brandName: this.brandName,
      genericName: this.genericName,
      strength: this.strength,
      strengthUnit: this.strengthUnit,
      otc: this.otc,
      supply: this.supply,
      generic: this.generic,
      drugDescription: this.drugDescription
    });
    this.formInitialized = true;
  }

  private prePopData() {
    if(!this.formInitialized) {
      this.initializeForm();
    } else {
      this.ndc.setValue(this.prePopFormData.ndc);
      this.brandName.setValue(this.prePopFormData.brandName);
      this.genericName.setValue(this.prePopFormData.genericName);
      this.strength.setValue(this.prePopFormData.strength);
      this.strengthUnit.setValue(this.prePopFormData.strengthUnit);
      this.otc.setValue(this.prePopFormData.otc);
      this.supply.setValue(this.prePopFormData.supply);
      this.generic.setValue(this.prePopFormData.generic);
      this.drugDescription.setValue(this.prePopFormData.drugDescription);
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if(!this.addClientDrugFormGroup.valid) {
      return;
    }

    if(this.isUpdate) {
      this.clientDrugService.updateClientDrug(this.addClientDrugFormGroup.value, this.prePopFormData.clientDrugId)
        .subscribe((v) => this.router.navigate(['/client-drug']));
    } else {
      // API call to add client drug information
      this.clientDrugService.addClientDrug(this.addClientDrugFormGroup.value).subscribe((v) => this.router.navigate(['/client-drug']));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "prePopFormData" changed
    if(changes.prePopFormData) {
      this.prePopData();
    }
  }
}