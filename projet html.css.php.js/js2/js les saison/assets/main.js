/*let saison = prompt("quelle saison est tu ?")
function switch(saison) {
    switch (saison.toLocaleLowerCase()) {
        case sptember october
            document.write("tu es en automne")


         break;
         case 'été'
            document.write

    }
}*/

// ETAPE 1 -
/*let user = 'sdfguhijikn,bv';
if(user === 'été' || user === 'automne' || user === 'hiver') {
   console.log('Nous sommes en ' + user);
} else {
   console.log('Nous sommes au ' + user);
}








// ETAPE 2 - gestion des erreurs de saisie
let usr = 'sdfguhijikn,bv';
if(usr !== 'été' && usr !== 'automne' && usr !== 'hiver' && usr !== 'printemps') {
  console.log('saison inconnue');
} else {
  if(usr === 'été' || usr === 'automne' || usr === 'hiver') {
     console.log('Nous sommes en ' + usr);
  } else {
     console.log('Nous sommes au ' + usr);
  }
}


//ETAPE 3 - code encapsulé dans une fonction
function saison (usrs) {
    if(usrs !== 'été' && usrs !== 'automne' && usrs !== 'hiver' && usrs !== 'printemps') {
        console.log('saison inconnue');
      } else {
        if(usr === 'été' || usrs === 'automne' || usrs === 'hiver') {
           console.log('Nous sommes en ' + usrs);
        } else {
           console.log('Nous sommes au ' + usrs);
        }
      }
}

saison('été');*/



// EXO - 100 ans -- Ecrire une fonction qui demande à l'utilisateur de saisir son âge et lui renvoie dans combien d'années il fêtera ses 100 ans 


function centenaire(age) {
   age = parseInt(prompt('Quel age a tu ?'));
   console.log('tu aura 100 ans dans'+ (100 - age) + 'ans!');
}
centenaire();