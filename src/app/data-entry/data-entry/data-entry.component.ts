import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  //peer usare un SERVICE occorre dichiaralo come parametro del constructor
  //aggiungendo prima la parola chiave PRIVATE, PUBLIC o PROTECTED.
  //Questa sintassi Tyoescript dichiara automaticamnete uan property di nome personService
  constructor(public personService: PersonService, private titleService: TitleService) { }

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

    this.personService.add(person);
    console.log(person);
  }

}
