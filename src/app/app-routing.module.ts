import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.module';
import { HomeComponent } from './home/home.module';
import { PersonListComponent } from './person-list/person-list.module';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "data-entry", component: DataEntryComponent },
  { path: "person-list", component: PersonListComponent },
  // la path vuota di default
  { path: "", pathMatch: "full", redirectTo: "/home" },
  // catch-all
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
