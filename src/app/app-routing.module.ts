import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.module';
import { AdminGuard } from './guard/admin.guard';
import { UserGuard } from './guard/user.guard';
import { HomeComponent } from './home/home.module';
import { LoginComponent } from './login/login.module';
import { NotFoundComponent } from './not-found/not-found.module';
import { PersonListComponent } from './person-list/person-list.module';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "data-entry", component: DataEntryComponent, canActivate: [UserGuard] },
  { path: "person-list", component: PersonListComponent, canActivate: [AdminGuard] },
  { path: "data", pathMatch: "prefix", redirectTo: "/data-entry" },
  { path: "login", component: LoginComponent },
  //PATH DI DEFAULT
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
