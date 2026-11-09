class Bewaesserungsanlage {
     private _Kapazität: number = 0;
    private _Zeitplan: number = 0;
    private _Status: string = "";

    
     
    bewaessern() {
        this._Status = "true";
        console.log("Bewässerung gestartet");
    }

   
    constructor(Kapazität: number, Zeitplan: number, Status: string) {
        this._Kapazität = Kapazität ;
        this._Zeitplan = Zeitplan;
        this._Status = Status;
    }       

    get Kapazität(): number {
        return this._Kapazität;
    }   

    set Kapazität(value: number) {
        this._Kapazität = value;
    }   

    set Zeitplan(value: number) {
        this._Zeitplan = value;
    }   

    get Zeitplan(): number {
        return this._Zeitplan;
    }   

    set Status(value: string) {
        this._Status = value;
    }   

    get Status(): string {
        return this._Status;
    }   

    printdata() {
        console.log("Bewässerungsanlage data Kapazität:" + this._Kapazität + " Zeitplan: " + this._Zeitplan + " Status: " + this._Status);
    }   
    
}