import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonListItemComponent } from './person-list-item/person-list-item.component';
import { RouterModule, Routes } from '@angular/router';
//import { DataEntryComponent } from '../data-entry/data-entry.module';
//import { PersonService } from '../service/person.service';

//const routes: Routes = [
//  { path: 'data-entry', component: DataEntryComponent }
//];

@NgModule({
  declarations: [PersonListComponent, PersonListItemComponent],
  imports: [
    CommonModule,
    //RouterModule.forRoot(routes)
    RouterModule
  ],
  exports: [
      PersonListComponent,
      //RouterModule
  ],
  providers:[
   // PersonService
  ]
})
export class PersonListModule { }
export { PersonListComponent }