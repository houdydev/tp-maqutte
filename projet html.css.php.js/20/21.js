let obligatoir = prompt('Veuiller saisir un nombre'),
    y = true;
obligatoir = parseFloat(obligatoir)

while (y = true) {
    if (isNaN(obligatoir)) {
        obligatoir = prompt('Veuiller saisir un nombre');
    } else {
        y = false;
    }
} 

alert("ok")