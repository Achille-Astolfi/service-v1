import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(public personService: PersonService, private title: TitleService) { }

  ngOnInit(): void {
    this.title.setPage("Person List");
  }

}
