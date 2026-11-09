class Pflanze {
    private _Art: string = "";
    private _Wasserbedarf: number = 0;
    private _Pflanzdatum: string = "";

    constructor(Art: string, Wasserbedarf: number, Pflanzdatum: string) {
        this._Art = Art;
        this._Wasserbedarf = Wasserbedarf;
        this._Pflanzdatum = Pflanzdatum;
    }                   

    get Art(): string {
        return this._Art;
    }

    set Art(value: string) {    

        this._Art = value;
    }   

    set Wasserbedarf(value: number) {
        this._Wasserbedarf = value;
    }       

    get Wasserbedarf(): number {
        return this._Wasserbedarf;
    }   

    set Pflanzdatum(value: string) {
        this._Pflanzdatum = value;
    }   

    get Pflanzdatum(): string {
        return this._Pflanzdatum;
    }   

    printdata() {
        console.log("Pflanze data Art:" + this._Art + " Wasserbedarf: " + this._Wasserbedarf + " Pflanzdatum: " + this._Pflanzdatum);
    }

}







