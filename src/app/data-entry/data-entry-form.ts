export class DataEntryForm {
    first!: string;
    surname!: string;

    clear(){
        this.first="";
        this.surname="";
    }
}