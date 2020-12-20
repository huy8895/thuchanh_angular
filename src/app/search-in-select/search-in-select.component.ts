import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-search-in-select',
  templateUrl: './search-in-select.component.html',
  styleUrls: ['./search-in-select.component.css']
})
export class SearchInSelectComponent implements OnInit {

  topping = [
    {id: '5001', type: 'None'},
    {id: '5002', type: 'Glazed'},
    {id: '5005', type: 'Sugar'},
    {id: '5007', type: 'Powdered Sugar'},
    {id: '5006', type: 'Chocolate with Sprinkles'},
    {id: '5003', type: 'Chocolate'},
    {id: '5004', type: 'Maple'}
  ];

  selectedCity: any;
  test: any;

  ngOnInit(): void {
  }

  submit(): void {
    const result = this.selectedCity.split(' ');
    console.log({id: result[0], type: result[1]});
  }
}
