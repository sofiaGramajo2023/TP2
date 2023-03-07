/* 4- Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/



 let numero;
 let suma=0;

 do{
 
     numero =+prompt('Ingrese un número');
     
     if(!isNaN(numero)){
        suma= (suma + numero);
     }else{
        alert('Error,No ingresó un número')
     }

    
 }while(confirm('Ingrese un número') == true);

 document.write(`La suma total es: ${suma}`);

