import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    // public perché lo esponiamo all'HTML
    public authService: AuthService
  ) { }

  doLogout(event: Event): void {
    // event.preventDefault() impedisce la navigazione standard
    event.preventDefault();
    // anche in questo caso mi prendo l'observable
    let logoutResult = this.authService.doLogout();
    // e poi mi registro come observer
    logoutResult.subscribe((wasLogged) => this.doLogoutSuccess(wasLogged), (error) => this.doLogoutFailure(error));
  }

  // creo i due metodi di callback
  doLogoutSuccess(ignored: boolean): void {
    // perché ignored? non mi importa sapere se l'utente era loggato o meno, l'importante
    // è che l'operazione si andata a buon fine
    alert("Logout effettuato.");
  }

  doLogoutFailure(error: any): void {
    // in questo caso non so se l'utente è stato effettivamente sloggato o no
    alert("Errore tecnico, prova a effettuare di nuovo il logout.")
  }
}
