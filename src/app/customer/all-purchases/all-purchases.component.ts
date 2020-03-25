import {Component, OnInit, PipeTransform} from '@angular/core';
import {CustomerService} from '../../shared/services/customer.service';
import {Purchase} from '../../shared/models/Purchase';
import {TokenStorage} from '../../shared/services/token.storage';
import {subscribeOn, switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.css']
})
export class AllPurchasesComponent implements OnInit {

  userPurchases: Purchase[] = [];
  filteredPurchases: Purchase[] = [];
  categoryId: string;

  constructor(private customerService: CustomerService, private tokenStorage: TokenStorage, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.customerService.getAllUserPurchases(this.tokenStorage.getUser().id).pipe(switchMap(purchases => {
      purchases.forEach(purchase => {
        purchase.adressObject = JSON.parse(purchase.address);
        purchase.purchaseObject = JSON.parse(purchase.purchaseData);
        this.userPurchases.push(purchase);
      });
      return this.route.queryParamMap;
    })).subscribe(
      params => {
        this.categoryId = params.get('category');
        this.filteredPurchases = (this.categoryId) ? this.userPurchases.
          filter(purchase => purchase.jobDto.category.id.toString() == this.categoryId) : this.userPurchases;
      });
  }


}
