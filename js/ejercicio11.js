//Ejercicios con Math
/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/ 


nombre1= prompt('Ingrese un nombre');
edad1= prompt (`Ingrese la edad de ${nombre1}`);

nombre2= prompt('Ingrese un nombre');
edad2= prompt (`Ingrese la edad de ${nombre2}`);

nombre3= prompt('Ingrese un nombre');
edad3= prompt (`Ingrese la edad de ${nombre3}`);

let mayor = Math.max(edad1, edad2, edad3);

    if (mayor == edad1) {
        document.write("La mayor persona es: " + nombre1);
    }
    if (mayor == edad2) {
        document.write("La mayor persona es: " + nombre2);
    }
    if (mayor == edad3) {
        document.write("La mayor persona es: " + nombre3);
    }