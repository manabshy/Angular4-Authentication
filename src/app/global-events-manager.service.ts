import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Injectable()
export class GlobalEventsManagerService {
  public showNavBar = new EventEmitter();

    constructor() {

    }
}
