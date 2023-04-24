import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataSubject = new BehaviorSubject<{ value: string, option: string }[]>([]);
  public sharedData = this.dataSubject.asObservable();

  private emptyArray: { value: string, option: string }[] = [];

  setData(data: { value: string, option: string }[]) {
    //Call the next method of the Behavior Subject to set the data
    this.dataSubject.next(data);

  }

  clearData() {
    //Push an empty array to the dataSubject to clear its current value
    this.dataSubject.next(this.emptyArray);
  }
  
}
