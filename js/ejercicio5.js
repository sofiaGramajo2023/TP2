/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI
 (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N,
     J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/ 


do{


    let dni=+prompt('Ingrese su número de DNI ');

    if(!isNaN(dni)){
        
        if(dni>=0 && dni <=99999999){

            
            let resto= dni % 23;

            switch(resto){
                case 0: {
                    alert('La letra de su DNI es la T')
                }break;
                case 1: {
                    alert('La letra de su DNI es la R')
                }break;
                case 2: {
                    alert('La letra de su DNI es la W')
                }break;
                case 3: {
                    alert('La letra de su DNI es la A')
                }break;
                case 4: {
                    alert('La letra de su DNI es la G')
                }break;
                case 5: {
                    alert('La letra de su DNI es la M')
                }break;
                case 6: {
                    alert('La letra de su DNI es la Y')
                }break;
                case 7: {
                    alert('La letra de su DNI es la F')
                }break;
                case 8: {
                    alert('La letra de su DNI es la P')
                }break;
                case 9: {
                    alert('La letra de su DNI es la D')
                }break;
                case 10: {
                    alert('La letra de su DNI es la X')
                }break;
                case 11: {
                    alert('La letra de su DNI es la B')
                }break;
                case 12: {
                    alert('La letra de su DNI es la N')
                }break;
                case 13: {
                    alert('La letra de su DNI es la J')
                }break;
                case 14: {
                    alert('La letra de su DNI es la Z')
                }break;
                case 15: {
                    alert('La letra de su DNI es la S')
                }break;
                case 16: {
                    alert('La letra de su DNI es la Q')
                }break;
                case 17: {
                    alert('La letra de su DNI es la V')
                }break;
                case 18: {
                    alert('La letra de su DNI es la H')
                }break;
                case 19: {
                    alert('La letra de su DNI es la L')
                }break;
                case 20: {
                    alert('La letra de su DNI es la C')
                }break;
                case 21: {
                    alert('La letra de su DNI es la K')
                }break;
                case 22: {
                    alert('La letra de su DNI es la E')
                }break;
                
            }

        }else{
            alert('Debe introducir un número entre 0 y 99999999');
        }
    }
    else{
        alert ('Error de escribir un número');
    }

}while(confirm('Ingrese su DNI') == true);