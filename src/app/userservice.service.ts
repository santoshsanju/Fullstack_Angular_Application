import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  usernamebh=new BehaviorSubject<any>('')
}
