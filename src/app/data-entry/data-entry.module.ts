import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../service/person.service';

@NgModule({
  declarations: [DataEntryComponent],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports : [DataEntryComponent]
  //providers: [PersonService] //dichiaro il service
})
export class DataEntryModule {}
export {DataEntryComponent}
