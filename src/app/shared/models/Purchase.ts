import {Address} from './Address';
import {PurchaseData} from './PurchaseData';
import {Job} from './Job';

export class Purchase {
  adressObject?: Address;
  purchaseObject?: PurchaseData;
  jobDto?: Job;

  constructor(public id: number, public purchaseData: string, public address: string) {
  }

}
