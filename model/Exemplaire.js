class Exemplaire{

    constructor(unNumero, unStatut, uneDateRetour, unLivre, unLecteur){
        this.numero = unNumero;
        this.statut = unStatut;
        this.dateretour = uneDateRetour;
        this.livre = unLivre;
        this.lecteur = unLecteur;
    }


    get unNumero() {
        return this._unNumero;
    }

    set unNumero(value) {
        this._unNumero = value;
    }

    get unStatut() {
        return this._unStatut;
    }

    set unStatut(value) {
        this._unStatut = value;
    }

    get uneDateRetour() {
        return this._uneDateRetour;
    }

    set uneDateRetour(value) {
        this._uneDateRetour = value;
    }

    get unLivre() {
        return this._unLivre;
    }

    set unLivre(value) {
        this._unLivre = value;
    }

    get unLecteur() {
        return this._unLecteur;
    }

    set unLecteur(value) {
        this._unLecteur = value;
    }

}
module.exports = Exemplaire;