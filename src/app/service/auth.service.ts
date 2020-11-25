import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // parto con un elenco di ruoli vuoto
  // l'utente all'inizio non è autorizzato a fare "nulla"
  // di ciò che ha bisogno di autorizzazione
  roles = new Array<string>();

  constructor() {  }

  doLogin(username: string, password: string): Observable<boolean> {
    // stiamo simulando una risposta true da un servizio di autenticazione
    // TODO temporaneamente scriviamo così:
    if (password === "password") {
      this.mockRoles(username);
    }
    // questo va bene
    // of è una function TypeScript di rxjs che costruisce un Observable con valore predefinito
    return of(password === "password");
  }

  // mock in inglese significa simulare, emulare
  // sono metodi di test o per esperimenti che simulano il comportamento reale
  // di qualche servizio
  private mockRoles(username: string) {
    switch(username) {
      case "user":
        this.roles = ["USER"];
        break;
      case "admin":
        this.roles = ["USER", "ADMIN"];
        break;
      default:
        this.roles = [];
        break;
    }
  }

  doLogout() : Observable<boolean> {
    // teoricamente avrei bisogno di un mock, si tratta di poche righe
    // teniamole tutte qui
    this.roles = [];
    return of(true);
  }

  /**
   * Questo è il metodo usato da AdminGuard
   */
  isAdmin(): boolean {
    // questo metodo restituisce true se "ADMIN" è un elemento dell'array di roles
    // restituisce false se "ADMIN" non è un elemento dell'array di roles
    // in breve
//    return this.roles.indexOf("ADMIN") >= 0;
    // in medio
//    let index = this.roles.indexOf("ADMIN");
//    return index >= 0;
    // in lungo
    if (this.roles.indexOf("ADMIN") >= 0) {
      return true;
    } else {
      return false;
    }
  }

  isUser(): boolean {
    return this.roles.indexOf("USER") >= 0;
  }
}
