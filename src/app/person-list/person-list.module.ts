import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonListItemComponent } from './person-list-item/person-list-item.component';
import { RouterModule } from '@angular/router';
import { PersonService } from '../service/person.service';

@NgModule({
  declarations: [PersonListComponent, PersonListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports : [PersonListComponent, RouterModule],
  providers: [PersonService]
})
export class PersonListModule { }
export {PersonListComponent}