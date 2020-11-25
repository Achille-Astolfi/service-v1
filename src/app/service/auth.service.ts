import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //l'utente autenticato non può fare "nulla" che abbia bisogno di autorizzazione
  //dato che l'array roles è vuoto
  roles = new Array<string>();

  constructor() { }

  //Metodo usato da adminGuard
  isAdmin(): boolean{
    //Questo metodo restituisce true se "Admin" è un elemento di roles
    //restituisce false se "Admin" non è un elemento di roles
    return this.roles.indexOf("ADMIN") >= 0; //da true se è maggiore di 0 (quindi se esiste)
  }

  isUser(): boolean{
    //Questo metodo restituisce true se "User" è un elemento di roles
    //restituisce false se "User" non è un elemento di roles
    return this.roles.indexOf("USER") >= 0; //da true se è maggiore di 0 (quindi se esiste)
  }

  mockRoles(username: string){
    switch(username){
      case "user":
        this.roles = ["USER"];
        break;
      case "admin":
        this.roles = ["ADMIN", "USER"];
        break;
      default:
        this.roles = [];
        break;
    }
  }

  doLogin(username: string, password: string): Observable<boolean> {
    if(password === "password") this.mockRoles(username);
    return of(password === "password");
  }

  doLogout(): Observable<boolean> {
    //teoricamente avrei bisogno di un mock
    this.roles = [];
    return of(true);
  }
}
