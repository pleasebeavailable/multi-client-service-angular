import {HttpHeaders} from '@angular/common/http';

export class AppConstants {
  public static BACKEND_URL = 'http://localhost:9090/';

  public static apiHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
    })
  };
}
