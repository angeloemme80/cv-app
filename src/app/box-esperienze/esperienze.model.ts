
export class Esperienze {

    dataDa: string;
    dataA: string;
    ruolo: string;
    societa: string;
    nomeProgetto: string;
    descrizione: string;
    applicationServer: string;
    dbms: string;
    persistenceLayer: string;
    linguaggiStrumenti: string;

    constructor( 
        dataDa: string,  dataA: string,  ruolo: string, societa: string, nomeProgetto: string,
        descrizione: string, applicationServer: string, dbms: string, persistenceLayer: string, linguaggiStrumenti: string
        ) {
        this.dataDa = dataDa;
        this.dataA = dataA;
        this.ruolo = ruolo;
    }

}