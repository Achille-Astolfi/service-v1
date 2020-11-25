import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.module';
import { AdminGuard } from './guard/admin.guard';
import { NomeUserGuard } from './guard/nome-user.guard';
import { HomeComponent } from './home/home.module';
import { LoginComponent } from './login/login.module';
import { NotFoundComponent } from './not-found/not-found.module';
import { PersonListComponent } from './person-list/person-list.module';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "home", pathMatch: "prefix", redirectTo: "/home" },
  { path: "data-entry", component: DataEntryComponent },
  { path: "data", pathMatch: "prefix", redirectTo: "/data-entry" },
  { path: "person-list", component: PersonListComponent, canActivate: [AdminGuard] },
  { path: "login", component: LoginComponent },
  //la path vuota di default
  { path: "", pathMatch: "full", redirectTo: "/home" },
  // catch-all
  { path: "**", pathMatch: "prefix", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
