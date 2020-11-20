import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { RouterModule } from '@angular/router';
import { PersonListItemComponent } from './person-list-item/person-list-item.component';

@NgModule({
  declarations: [PersonListComponent, PersonListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PersonListComponent],
  providers: []
})
export class PersonListModule { }
export { PersonListComponent }
