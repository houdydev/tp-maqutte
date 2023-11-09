/*
 * LES BOUCLES
 *
 */
let i = 1;
while (i <= 10) {
    console.log('Tour n° ' + i);
    i++;
}
for (let j = 100; j <= 110; j++) {
    console.log('Tour n° ' + j);
}
for (let i = 1 ; i <= 10; i++) {
    if ( i < 6 ){
      document.write('<p style="color: red;">Tour n°' + i + '</p>');
    } else {
    document.write('<p style="color: blue;">Tour n°' + i + '</p>')
  }
}
// EXO - refaire la même chose avec une boucle WHILE
let i = 1;
while (i <= 10) {
  if(i < 6) {
    document.write("<p style='color: red;'>Tour n°" + i + "</p>");
  }  else {
    document.write("<p style='color: blue;'>Tour n°" + i + "</p>");
  }
    i++;
}
// le triangle de #
let tag = '#';
let i = 1; // initialisation compteur pour la boucle
// boucle
while (i <= 8) {
  document.write(tag + '<br>');
  tag += '#'; // tag = tag + '#';
  i++;
}