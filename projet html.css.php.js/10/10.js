let nbm = prompt("Entrez le nombre du mois")
switch (isNaN(nbm)){
    case true:
        alert("Vous n'avez pas entré un nombre !")
        break;
    case false:
if ((nbm == 1) || (nbm == 3) || (nbm == 5) || (nbm == 7) || (nbm == 9) || (nbm == 11)){
    document.write (`il y a 31 jours dans le mois n°${nbm}`)
} else if ((nbm == 2) || (nbm == 4) || (nbm == 6) || (nbm == 8) || (nbm == 10) || (nbm == 12)){
    document.write (`il y a 30 jours dans le mois n°${nbm} `)
}
}