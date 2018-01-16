const { Client } = require('pg');
const Livre = require('../model/Livre');
const Exemplaire = require('../model/Exemplaire');

class DAOLivre{

    constructor(){
        this._client = new Client({
            connectionString : 'postgres://arnaud:arnaud@192.168.222.86:5432/biblio'
        });

        this._client.connect(function (err){
            if (err) return done(err);
        });
    }

    getTousLesLivres(cb){

        const query = {
            name: 'fetch-all-livre',
            text: 'SELECT * FROM livre'
        };

        this._client.query(query, function (err, result) {
            let lesLivres = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let unLivre;

                    console.log(row['titre']);
                    unLivre = new Livre(row['idlivre'], row['titre'], row['resume'], row['isbn'], row['nom']);
                    lesLivres.push(unLivre);
                });

                console.log(lesLivres.length);
                cb(lesLivres);
            }
        });
    };

    getLivreById(id, cb){
        const query = {
            name: 'fetch-livre-by-id',
            text: 'SELECT * FROM livre WHERE idlivre = $1',
            values: [id]
        };

        this._client.query(query, function(err, result){

            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let livre;

                    console.log(row['titre']);
                    livre = new Livre(row['idlivre'], row['titre'], row['resume'], row['isbn'], row['nom']);
                    cb(livre);
                });
            }
        });
    }

    getListeExemplaires(id,cb){

        const query = {
            name: 'fetch-all-exemplaires',
            text: 'SELECT * FROM exemplaire JOIN livre ON exemplaire.livre = livre.idlivre WHERE exemplaire.livre = $1',
            values: [id]
        };

        this._client.query(query, function (err,result){
           let lesExemplaires = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let unExemplaire;

                    unExemplaire = new Exemplaire(row['numero'], row['statut']);
                    lesExemplaires.push(unExemplaire);
                });

                console.log(lesExemplaires.length);
                cb(lesExemplaires);
            }
        });
    }

    getDetailExemplaire(id,cb){

        const query = {
            name: 'fetch-exemplaire-by-id',
            text: 'SELECT * FROM exemplaire JOIN livre ON exemplaire.livre = livre.idlivre WHERE exemplaire.livre = $1',
            values: [id]
        };

        this._client.query(query, function(err, result) {

            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let exemplaire;

                    console.log(row['numero']);
                    exemplaire = new Exemplaire(row['numero'], row['statut'], row['dateretour'], row['livre'], row['lecteur']);
                    cb(exemplaire);
                });
            }
        });
    }
}

module.exports = DAOLivre;