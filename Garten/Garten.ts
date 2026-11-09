class Garten {
    private _Fläche: number = 0;
    private _Lage: string = "";
    private _Bodenart: string = "";

    constructor(Fläche: number, Lage: string, Bodenart: string) {
        this._Fläche = Fläche;
        this._Lage = Lage;
        this._Bodenart = Bodenart;
    }       

    get Fläche(): number {
        return this._Fläche;
    }   

    set Fläche(value: number) {
        this._Fläche = value;
    }   

    set Lage(value: string) {
        this._Lage = value;
    }   

    get Lage(): string {
        return this._Lage;
    }   

    set Bodenart(value: string) {
        this._Bodenart = value;
    }   

    get Bodenart(): string {
        return this._Bodenart;
    }   

    printdata() {
        console.log("Garten data Fläche:" + this._Fläche + " Lage: " + this._Lage + " Bodenart: " + this._Bodenart);
    }   
    
}
