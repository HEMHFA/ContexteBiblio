class Livre{


    constructor(unId,unTitre, unResume, unISBN){//, unISBN, unAuteur, lesGenres){
        this._titre = unTitre;
        this._resume = unResume;
        this._unId = unId;
        this._isbn = unISBN;
        //this._auteur = unAuteur;
    }

    get unId() {
        return this._unId;
    }

    get titre() {
        return this._titre;
    }

    set titre(value) {
        this._titre = value;
    }

    get resume() {
        return this._resume;
    }

    set resume(value) {
        this._resume = value;
    }

    get ISBN() {
        return this._isbn;
    }

    set ISBN(value) {
        this._isbn = value;
    }

    get auteur() {
        return this._auteur;
    }

    set auteur(value) {
        this._auteur = value;
    }
}
module.exports = Livre;