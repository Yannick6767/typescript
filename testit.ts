class Auto {
    private _marke: string = "";
    private _ps: number = 0;
    private _farbe: string = "rot";

    constructor(marke: string, ps: number, farbe: string) {
        this._marke = marke;
        this._ps = ps;
        this._farbe = farbe;
    }

    get marke(): string {
        return this._marke;
    }   

    set marke(value: string) {
        this._marke = value;
    }   

    set ps(value: number) {
        this._ps = value;
    }

    get ps(): number {
        return this._ps;
    }

    set farbe(value: string) {
        this._farbe = value;
    }

    get farbe(): string {
        return this._farbe;
    }

    printdata() {
        console.log("Auto data Farbe:" + this._farbe + " Marke: " + this._marke + " PS: " + this._ps);
    }


}

// Viele Autos in einem Array speichern 
const autos: Auto[] = [];
const auto = new Auto("BMW", 200, "blau"); 

const farbenA = ["rot", "blqau", "grün", "gelb", "schwarz", "weiß"];
const markenA = ["BMW", "Mercedes", "VW", "Audi", "Porsche", "Opel"];
const psA = [100, 150, 200, 250, 300, 350];

auto.marke = "BMW";
auto.ps = 200;
auto.farbe = "blau";
auto.printdata();

for(let i = 0; i < 10; i++) {
    //let auto = new Auto();
    //auto.farbe = farbenA[Math.floor(Math.random() * farbenA.length)];
    //auto.marke = markenA[Math.floor(Math.random() * markenA.length)];
    //auto.ps = psA[Math.floor(Math.random() * psA.length)];

    autos.push(new Auto(markenA[Math.floor(Math.random() * markenA.length)], psA[Math.floor(Math.random() * psA.length)], farbenA[Math.floor(Math.random() * farbenA.length)]));
    
}

autos.forEach((auto) => {
    auto.printdata();
});

