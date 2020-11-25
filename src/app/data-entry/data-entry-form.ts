export class DataEntryForm {
    first = "";
    last= "";

    //questo metodo può essere un'idea per tutte le class che fanno da
    //"template form"
    clear(): void{
        this.first = "";
        this.last = "";
    }
}
