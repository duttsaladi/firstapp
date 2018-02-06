import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpResponse} from '@angular/common/http';

@Injectable()
export class ProcessHttpMsgService {

  constructor() { }

  public extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }
}
