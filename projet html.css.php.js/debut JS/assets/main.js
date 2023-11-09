let monChat = 'Merlin'; // camel case
let mon_chat = 'Pixel'; // snake case
let monchat = 'Kenzo';
// JS sensible à la casse
// ERREUR let 1_chat = 'Pixel'; (pas de chiffre en début de variable)
let chat_1 = 'Pixel';
// ERREUR let chat 19989 = 'Merlin'; (pas d'espace vide)
// ERREUR  let let = 'coucou'; (mot réservé)
< !--commentaire HTML-- >
/* commentaire CSS */
// commentaire JS (une ligne)
/* commentaire JS
sur plusieurs lignes
autant que nécessaire */
var a = 'une info'; // déclaration de variable à l'oirigine du JS, à abandonner depuis ECMAscript5 (2015) - MAUVAISE PRATIQUE
//  VARIABLES
let chat = 'Pixel';
// mot clé de création de variable - nom de la variable - = affectation - on stocke une information qui vient après le signe égal
// même chose en 2 lignes
// 1- déclaration
let mon_chat;
// 2- affectation
mon_chat = 'Merlin';
console.log(mon_chat); // Merlin
// 3- réaffectation
mon_chat = 'Pixel';
console.log(mon_chat); // Pixel
//  CONSTANTES
const CHAT = 'Pixel';
// mot clé de création - nom de la CONSTANTE - = affectation - on stocke une information qui vient après le signe égal
// même chose en 2 lignes /!\ IMPOSSIBVLE POUR UNE CONSTANTE
// 1- déclaration
let mon_chat;
// 2- affectation
mon_chat = 'Merlin';
console.log(mon_chat); // Merlin
// 3- réaffectation
mon_chat = 'Pixel';
console.log(mon_chat); // Pixel
// Pour une constante : affectation ET déclaration en même temps
const CHAT = 'Pixel';
const CHAT_2 = 'Merlin';
// déclaration de variable "à la volée"
let a,
    b,
    c;
// avec affectation
let d = 6,
    e = 'hello';
// affectation par référence
let chat_1 = 'Pixel';
let chat_2 = 'Merlin';
let user = chat_1;
// LES TYPES DE DONNEES
// -- chaînes de caractères (string)
let prenom = 'Jules';
let prenom_2 = "Gustave";
// afficher dans la console
console.log(prenom);
// afficher Bonjour avec le prénom de l'élève - CONCATENATION
console.log("Bonjour " + prenom);
let bjr = 'Bonjour';
console.log(bjr + ' ' + prenom);
document.write("<h1>" + bjr + " à toi " + prenom_2 + "</h1>");
// CONCATENATION avec les littéraux de gabarit
document.write(`<h1>${bjr} à toi ${prenom_2}</h1>`);
document.write("Aujourd'hui " + prenom + " est arrivé à l'heure.");
document.write('Aujourd\'hui ' + prenom_2 + ' est arrivé à l\'heure.');
//__ nombres entiers (intégrer ou int)
let nb1 = 8;
let nb2 = 777;
let res = nb1 + nb2; // pareil avec diviser, soustraire...
res; //785
//MODULO - trésultat de la division
res = nb1 % nb2;

res = 9 % 3
res;
//nombres décimaux (float)
let nb3 = 3,76;
nb3;
//booléens (TRUE / FALSE)
let bool = false;
bool;
//VERIFIER LE TYPE DES DONNEES
console.log(typeof nb3);
//-- BOITES DE DIALOGUE
alert('Bonjour !'); //info 

confirm('Vouler-vous fermet cet onglet ?');

prompt('ton prénom ?');

let b1 = alert('Bonjour !'); //info user

let b2 = confirm('Voulez-vous fermer cet onglet?');

let b3 = prompt('ton prénom');

document.write(b1 + '<h1>' + b3 '</h1>');
document.write(typeof b3);  



/* LES OPERATEURS LOGIQUES
//L'opérateur ET : && ou AND
// -- Si je cumule 2 conditions :
// => mailBdd === mailLogin
// => mdpBdd === mdpLogin
// pour que les 2 correspondent pour être validés il faut les associer
if ( (mailLogin === mailBdd) && (mdpLogin === mdpBdd) ) {
    // ... code ...
    // je ne rentre ici que si les 2 conditions sont vraies
}
// TABLE LOGIQUE &&
if ((A) && (B)){...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI
// L'opérateur OU : || ou OR (| pipe => alt gr + 6)
// TABLE LOGIQUE ||
if ( (C) || (D) ){...}
=> si C est FAUX et D est FAUX => FAUX
=> si C est FAUX et D est VRAI => VRAI
=> si C est VRAI et D est FAUX => VRAI
=> si C est VRAI et D est VRAI => VRAI
*/

let str = 'Hello'; // true
let compare = 8 < 10;
let nb = 13;
let vrai = true;
let faux = false;
let zero = 0;
let vide = "";
let rien = null;
let indefini = undefined;
let pasUnNombre = NaN;















