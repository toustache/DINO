
// Pour accèder au Dino
    // Je récupère le dino dans la page
    var dino    = document.querySelector('.dino');
    var paysage    = document.querySelector('.paysage');
    var decor   = document.querySelector('.decor');
    var sol     = document.querySelector('.sol');
    //var eau     =document.querySelector('.eau'); je voualis faire bouger l'eau de maniière indépendante, mais j'ai eu quelques soucis. Du coup je l'ai associé à la div "fond"


    // Je place dans une variable la liste de ses classes CSS
    var dinoClass = dino.classList;
    var paysageClass = paysage.classList;
    var decorClass = decor.classList;
    var solClass   = sol.classList;
    //var eauClass   = eau.classList;




function mouvementVertical(qui, combien) {
    var quiBottom = qui.style.bottom.replace('px', '');
    quiBottom = (quiBottom === '') ? 0 : parseInt(quiBottom);
    quiBottom += combien;
    qui.style.bottom = quiBottom + 'px';
}





// Fonction de saut
function saut(){
  dinoClass.add('marche');
  dinoClass.remove('saut');
}

// Fonction de mort
function mort(){
  dinoClass.remove('mort');
  dinoClass.add('attente');
}





function setUpDeplacement() {
    if (dino.attributes.class.value.indexOf('deplacement') === -1 )
    {
        dinoClass.add('deplacement');
    }
}

// Attente d'un événement
var myEvent = document.addEventListener('keydown', function(e) {
    dinoClass.remove('attente');












console.log(e.keyCode);

    // flèche droite --  doite
    if (e.keyCode == 39) {
        setUpDeplacement();
        dinoClass.remove('lookleft');
        dinoClass.add('marche');
        paysageClass.remove('bougegauche');
        paysageClass.add('bouge');
        decorClass.remove('bougegauche');
        decorClass.add('bouge');
    }




    // flèche bas -- stop   au premiers instans, si on met fleche vers le bas, le decort se remt en place... (?)


    if (e.keyCode == 40) {
        dinoClass.add('attente');
        dinoClass.remove('marche');
        paysageClass.remove('bougegauche');
        paysageClass.remove('bouge');
        decorClass.remove('bougegauche');
        decorClass.remove('bouge');
        solClass.add('fixe');
    }





    // flèche gauche -- gauche
    if (e.keyCode == 37) {
        setUpDeplacement();
        dinoClass.add('lookleft');
        dinoClass.add('marche');
        paysageClass.add('bougegauche');
        paysageClass.remove('bouge');
        decorClass.add('bougegauche');
        decorClass.remove('bouge');
    }






    // touche entrée pour mourir
    if (e.keyCode == 13 ) {
        dinoClass.add('mort');
        dinoClass.remove('marche');
        paysageClass.remove('bougegauche');
        paysageClass.remove('bouge');
        decorClass.remove('bougegauche');
        decorClass.remove('bouge');
        setTimeout(mort, 3000);
    }





    // flèche haut -- saute
    if (e.keyCode == 38) {
        dinoClass.remove('marche');
        dinoClass.add('saut');
        dinoClass.remove('marche');
        setTimeout(saut, 1000);
    }

    //Regarder pourquoi au début, si on appuit sur espace, le dino disparait
    // rectification, sur n'impore qu'elle touche 

});
