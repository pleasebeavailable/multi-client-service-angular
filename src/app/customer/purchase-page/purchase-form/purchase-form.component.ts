import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../../../shared/models/Purchase';
import {Address} from '../../../shared/models/Address';
import {TokenStorage} from '../../../shared/services/token.storage';
import {ActivatedRoute, Router} from '@angular/router';
import {PurchaseData} from '../../../shared/models/PurchaseData';
import {CustomerService} from '../../../shared/services/customer.service';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent implements OnInit {
  purchaseForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private tokenStorage: TokenStorage,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.purchaseForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.initAddress(),
      tip: ''
    });
  }

  initAddress() {
    return this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (this.purchaseForm.valid && this.a.valid) {
      const address = new Address(this.address.street, this.address.city, this.address.state, this.address.zip);
      const purchaseData = new PurchaseData(this.tokenStorage.getUser().id, id, this.purchase.name, this.purchase.email, this.purchase.tip);
      const purchase = new Purchase(this.purchase.id, JSON.stringify(purchaseData), JSON.stringify(address));
      this.customerService.purchaseJob(purchase).subscribe(() => this.router.navigate(['customer/available-jobs']));
    }
  }

  get p() {
    return this.purchaseForm.controls;
  }

  get purchase() {
    return this.purchaseForm.value;
  }

  get a() {
    return this.purchaseForm.get('address');
  }

  get address() {
    return this.purchaseForm.get('address').value;
  }
}
