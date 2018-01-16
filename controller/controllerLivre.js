const DAOLivre = require('../DAO/DAOLivre');
const DAOLivres = new DAOLivre();


//Montre une liste de tous les livres
exports.livre_list = function (req, res, next) {
    DAOLivres.getTousLesLivres(function(lesLivres){
        res.render('listeLivres', {listeLivres : lesLivres});
    });
}

exports.livre_detail = function (req,res,next) {
    DAOLivres.getLivreById(req.params.id, function(unLivre) {
        res.render('livreId', {livre : unLivre});
    });
}

exports.livre_list_exemplaire = function(req, res, next) {
    DAOLivres.getListeExemplaires(req.params.id, function(lesExemplaires){
        res.render('listeExemplaires', {listeExemplaires : lesExemplaires});
    });
}

exports.livre_detail_exemplaire = function (req, res, next) {
    DAOLivres.getDetailExemplaire(req.params.id, function(unExemplaire) {
        res.render('exemplaireId', {exemplaire : unExemplaire});
    });
}

exports.livre_ajout = function (req, res) {
    res.send('NOT IMPLEMENTED');
}

exports.livre_ajout_exemplaire = function(req, res) {
    res.send('NOT IMPLEMENTED');
}