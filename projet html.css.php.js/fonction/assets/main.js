/* EXOS FONCTIONS
* A B C
 */
function letterA() {
    return "A";
}

function letterB() {
    return "B";
}

function letterC() {
    return "C";
}

let index;
let result;

/*
 * But : il faut utiliser les fonctions écrites au-dessus pour générer les
 * chaînes de caractères attendues, en utilisant chaque fois le
 * moins de code possible.
 *
 * La chaîne de caractères sera stockée dans la variable result et cette
 * variable affichée dans la console.
 *
 * Chaîne #1 : A
 * Chaîne #2 : AC
 * Chaîne #3 : ABBCCC
 * Chaîne #4 : CBCBA
 * Chaîne #5 : CB!C CB!B CB!A
 */

//A
let res = letterA();
//AC
res += letterC();
console.log(res);
