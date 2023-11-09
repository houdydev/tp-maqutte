/*let nb1 = 1,
    nb2 = 2;
let res = nb1 + nb2;
// res = res + 10;
res += 10;
res;
// savoir quel type de donnée est stockée TYPEOF
let bool = false;
console.log(typeof bool);
// méthode pour convertir une string en Number
let str = '24';
str = parseInt(str);
console.log(str);
// méthode pour convertir une string en Number
let str = '24.56';
str = parseFloat(str);
console.log(typeof str);
// convertir un Int en string
let nbToStr = 10;
let res = nbToStr.toString();
console.log(typeof res);
// convertir un BOOLEEN en string
let tr = true;
let result = tr.toString();
console.log(typeof result);
console.log(result);
// -- Compter les lettres d'une chaîne de caractères
let phrase = "Si vous êtes agités, à la niche !";
console.log(phrase.length);
// -- Mettre en majuscules
console.log(phrase.toUpperCase());
// -- Mettre en mminuscules
console.log(phrase.toLowerCase());
// -- trouver la position d'un ou plusieurs caractères
console.log(phrase.indexOf('agités'));
*/



* LES CONDITIONS
 *
 *  IF ... ELSE
 if( 1 > 10 ){
    document.write('IF ... SI');
} else if (1 > -10) {
    document.write('ELSE IF ... SINON SI');
} else {
    document.write('ELSE ... SINON');
}
document.write('<hr>');
// SWITCH
let query = prompt('oui ou non ?');
switch (query.toLowerCase()) {
    case 'oui': // if
        document.write('vous avez dit oui');
        break; // si le cas est TRUE on sort du switch ici
    case 'non': // else if
        document.write('vous avez dit non');
        break; // si le cas est TRUE on sort du switch ici
    default: // else
        document.write('réponse non reconnue');
}
// NaN - Not A Number
let year = '2023';
if(isNaN(year)) {
  document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write ('C\'est un number après conversion <br>');
}
 */
* comparaisons
let a = 10; // déclaration de la variable a avec affectation d'un Integer valant 10
let b = 1 > 10; // comparaison
console.log(b);
let c = 1 == '1'; // comparaison de valeurs
console.log(c);
let d = 1 === '1'; // comparaison de valeurs ET de types
console.log(d);
// NOT !
let e = 1 != '1';
console.log(e);
let f = 1 !== '1';
console.log(f);
 */
// Pour tester des variables entre-elles : 
/*
   == pour égal en valeur
   != pour différent de en valeur

   === pour strictement égal en valeut ET en type
   !== pour strictement différent en valeur OU en type

   > pour plus grand que
   < pour plus petit que
   >= pour supérieur ou égal à
   <= pour inférieur ou égal à