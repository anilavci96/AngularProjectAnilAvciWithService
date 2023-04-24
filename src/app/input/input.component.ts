import { Component } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-input',
  template: `

  <div class="container">

  <div class="inputHeader">
    <h1>{{title}}</h1>
    <button (click)='addInputField()' class="add">+</button>
    <button (click)='deleteInputField()' class="delete">-</button>
    <button (click)='submit()' class="submit">Submit</button>
  </div><!--inputHeader-->

  <br />

  <div *ngFor="let input of inputArray;" class="inputField">
    <input [(ngModel)]="input.value" type="text">
    <select [(ngModel)]="input.option" class="dropdown">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div><!--inputField-->

</div><!--container-->

  `,
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  title = 'Input Container';

  //Array to store the data from the user
  inputArray: { value: string, option:string }[] = [];

  //Method to add a new input field, also clears shared data
  addInputField() {
    this.inputArray.push({ value: '', option: '' });
    this.dataService.clearData();
  }

  //Method to delete last input field, also clears shared data
  deleteInputField() {
    this.inputArray.pop();
    this.dataService.clearData();
  }

  constructor(private dataService: DataService) { }

  submit(): void {    
    //Submit the input data to the Data Service
    this.dataService.setData(this.inputArray);
  } 

}
