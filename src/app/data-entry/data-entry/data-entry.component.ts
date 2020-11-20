import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';
import { TitleService } from 'src/app/service/title.service';
import { DataEntryForm } from '../data-entry-form';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  dataEntryForm = new DataEntryForm();

  // per usare un service occorre dichiararlo come parametro del constructor
  // si deve aggiungere una parola chiave a scelta tra private, public o protected
  // questa sintassi di TypeScript dichiara automaticamente una property di nome
  // personService
  constructor(
    private personService: PersonService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Data Entry");
  }

  doOnSubmit(event: Event): void {
    this.createPerson();
    this.dataEntryForm.clear();
  }

  createPerson(): void {
    let person = new Person();

    person.firstName = this.dataEntryForm.first;
    person.lastName = this.dataEntryForm.last;

    console.log(person);

    this.personService.add(person);
  }

}
