import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //parto con un elenco di ruoli vuoto
  //l'utente all'inizion non è autorizzato a fare "nulla"
  //di ciò che ha bisogno di autorizzazione. 
  roles = new Array<string>();

  constructor() { }

  doLogin(username: string, password: string): Observable<boolean> {
    //stiamo simulando una risposta true (accetto le credenziali) da un servizio di autenticazione.
    if (password === "password") {
      this.mockRoles(username);
    }
    //of è una function TS di rxjs che costruisce un Observable con un valore predefinito.
    return of(password === "password");
  }

  //metodo di test/esperiemnto che simula un comportamento reale di un servizio 
  private mockRoles(username: string) {
    switch (username) {
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

  //metodo utilizzato da AdminGuard
  isAdmin(): boolean {
    //questo metodo restituisce:
    //true se "ADMIN" è un elemento dell'array di roules
    //false se "ADMNI" non è un elemento dell'array di roules

    /*in breve
   return this.roles.indexOf("ADMIN") >= 0;*/

    /* in medio
    let index = this.roules.indexOf ("ADMIN");
    return index >=0;
    */

    //in lungo 
    if (this.roles.indexOf("ADMIN") >= 0) {
      return true;
    } else {
      return false;
    }
  }

  isUser(): boolean {
    return this.roles.indexOf("USER") >= 0;
  }

  doLogout(): Observable<boolean> {
    this.roles = [];
    return of(true);
  }
}
