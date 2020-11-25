export class LoginTemplateForm {
    username!: string;
    password!: string;

    clear(): void{
        this.username = "";
        this.password = "";
    }
}