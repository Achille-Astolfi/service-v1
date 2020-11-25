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

  constructor(public personService: PersonService, private title: TitleService) { }

  ngOnInit(): void {
    this.title.setPage("Data Entry");
  }

  onSave(event:Event){
    this.createPerson();
    this.dataEntryForm.clear();
  }

  createPerson(){
    let person = new Person();
    person.firstName = this.dataEntryForm.first;
    person.lastName = this.dataEntryForm.surname;
    console.log("AGGIUNTO " + person.firstName +  " " + person.lastName);
    this.personService.add(person);
  }

}
