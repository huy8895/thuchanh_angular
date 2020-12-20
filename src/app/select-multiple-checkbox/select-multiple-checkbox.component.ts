import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-multiple-checkbox',
  templateUrl: './select-multiple-checkbox.component.html',
  styleUrls: ['./select-multiple-checkbox.component.css']
})
export class SelectMultipleCheckboxComponent implements OnInit {
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
  ];

  selectedCity: { id: any }[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.selectedCity);
  }

  onChecked($event: Event): void {
    const target = $event.target as HTMLTextAreaElement;
    const isExist = this.selectedCity.includes({id : target.value});
    if (!isExist) {
      this.selectedCity.push({id : target.value});
    } else {
      this.selectedCity = this.selectedCity.filter(e => e.id !== target.value);
    }
  }
}
