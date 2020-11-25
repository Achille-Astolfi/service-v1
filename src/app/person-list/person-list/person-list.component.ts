import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(
    public personService: PersonService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Person List");
  }

  lastPersonHash(): string {
    let person = this.personService.persons[this.personService.persons.length -1];
    return person.firstName + person.lastName;
  }
}
