import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { LoginTemplateForm } from '../login-template-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  template = new LoginTemplateForm();
  formDisabled=false;
  passwordType = "password";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  formOnSubmit(event: Event): void{
    this.formDisabled = true;

    let loginResult = this.authService.doLogin(this.template.username, this.template.password);

    this.template.clear();
    //seguiamo l'observer pattern e ci registriamo con observer di loginResult che,
    //da specifiche del metodo login, è un observable. Ci registramo come observable con Subscribe

    loginResult.subscribe((resultValue) => this.loginReplied(resultValue), (error) => this.loginError(error));

  }

  //METODI DI CALLBACK. TECNOLOGIA STANDARD DI QUANDO SI LAVORA CON LE TECNOLOGIE ASINCRONE.
  //Questi, in typescript, si specificano con una costruzione che si chiama LAMBDA EXPRESSION.
  //Chiamata così perchè somiglia alla matematica formale.

  loginReplied(authenticated: boolean): void{
    this.formDisabled = false;
    if(authenticated){
      alert("Hai indovinato la password!");
    } else {
      alert("La password inserita non è valida.")
    }
    
  }

  loginError(error: any): void{
    this.formDisabled = false;
    alert("Errore tecnico. Riprova più tardi.");
  }

  doShowHide(event: Event):void{
    if(this.passwordType === "password"){
      this.passwordType = "text";
    } else {
      this.passwordType = "password";
    }
  }

  buttonLabel(): string {
    if(this.passwordType === "password"){
      return "Mostra";
    }else{
      return "Nascondi";
    }
  }

  validateForm():boolean{
    return this.template.username.length > 0 && this.template.password.length>=8;
  }
}
