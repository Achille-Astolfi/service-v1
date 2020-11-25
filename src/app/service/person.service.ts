import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons = new Array<Person>();

  constructor() { }

  add(person: Person){
    this.persons.push(person);
  }

  remove(person: Person):void{
    let index = this.persons.indexOf(person);
    if(index>=0){
      this.persons.splice(index, 1);
    }
  }
}
