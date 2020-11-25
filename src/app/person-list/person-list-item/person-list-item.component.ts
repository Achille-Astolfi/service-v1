import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.css']
})
export class PersonListItemComponent implements OnInit {

  @Input() person!: Person;
  
  constructor(public personService: PersonService) { }

  ngOnInit(): void {
  }

  doOnClick(event: Event){
    this.personService.remove(this.person);
  }
}
