import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'service-v1';

  constructor(
    //perchè lo esponiamo all'HTML
    public authService: AuthService
  ) { }

  doLogout(event: Event): void {
    event.preventDefault();
    let logoutResult = this.authService.doLogout();
    logoutResult.subscribe(
      (wasLogged) => this.doLogoutSuccess(wasLogged),
      (error) => this.doLogoutFailure(error)
    );
  }

  //creo i due metodi di callback
  doLogoutSuccess(ignored: boolean): void {
    alert("Logout effettuato");
  }

  doLogoutFailure(error: any): void {
    alert("Errore tecnico. Prova ad effettuare di nuovo il Logout");
  }

}
