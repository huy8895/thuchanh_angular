import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-in-select',
  templateUrl: './search-in-select.component.html',
  styleUrls: ['./search-in-select.component.css']
})
export class SearchInSelectComponent implements OnInit {

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
  ];

  selectedCity: any;

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.selectedCity);
  }
}
