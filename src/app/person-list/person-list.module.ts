import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from '../service/person.service';
import { PersonListItemComponent } from './person-list-item/person-list-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PersonListComponent, PersonListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PersonListComponent
  ],
  providers: [
    PersonService
  ]
})
export class PersonListModule { }
export { PersonListComponent }
