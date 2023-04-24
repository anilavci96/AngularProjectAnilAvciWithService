import { Component } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-view',
  template: `
<div class="container">
  <h1>{{title}}</h1>
  <table style="width:100%">
    <tr>
      <th>Index</th>
      <th>Value</th>
    </tr>
    <tr *ngFor="let data of dataArray">
      <td>{{data.option}}</td>
      <td >{{data.value}}</td>     
    </tr>
  </table>


</div><!--container-->
` ,
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  title = 'View Container';

  //Array to hold the data to be displayed
  dataArray: { value: string, option: string }[] = [];

  constructor(private dataService: DataService) {

    //Subscribe to the sharedData Observable to get the data from Data Service
    this.dataService.sharedData.subscribe(x => this.dataArray = x);

  }  
  
}


