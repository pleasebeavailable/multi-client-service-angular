import {AbstractControl, ValidationErrors} from '@angular/forms';
import {TokenStorage} from "./services/token.storage";
import {HttpHeaders} from "@angular/common/http";

export class AppMethods {

  constructor(private tokenStorage: TokenStorage) {
  }

  public static matchValues(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
      !!control.parent.value &&
      control.value === control.parent.controls[matchTo].value
        ? null
        : {isMatching: false};
    };
  }

  public static refreshPage() {
    window.location.reload();
  }


}
