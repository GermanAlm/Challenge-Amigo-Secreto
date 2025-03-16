// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// //Aquí deberás desarrollar la lógica para resolver el problema.
 
let amigos = [];//Lista donde se almacenaran los amigos ingresados en el input, linea 23(index).

function limpiarCaja(){ //Esta funcion se encarga de limpiar la caja de el input.

    document.getElementById('amigo').value = ''; //Esta linea hace que el valor de el elemento 'amigo' cambie su valor a ''.
}

function imprimirParticipantes(){ //funcion dedicada a crear una pequeña lista con nombres debajo
                                  // de la barra de introduccion de participantes(amigos).
    
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i <= amigos.length ; i++){

        let item = document.createElement("li"); //Estoy definiendo que la variable item es un elemento li (de lista).
        item.textContent = amigos[i];//aqui le estamos diciendo que el contenido de texto va a ubicarse en la posicion "i" de la lista de amigos.
        listaAmigos.appendChild(item);//Lo que se logra con el appendChild es que imprima lo ingresado al final de el <li>.

    }

}

function sortearAmigo(){ //Funcion dedicada a realizar el sorteo siempre y cuando se cumplan ciertas condiciones.
    if (amigos.length > 1){
        
        let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;        
        
    } else {

        alert("Se necesita mas de un participante para sortear.")
        return;

    }

}

function agregarAmigo(){ //El rol de la funcion sera que incorpore los amigos ingresados a la lista (amigos).

    let nombreDeAmigo = document.getElementById('amigo').value; //El valor que se ingrese en el input del index con el Id "amigo"
                                                                //sera almacenado en la variable nombreDeAmigo

    if (nombreDeAmigo != ''){ //Si la variable nombreDeAmigo es diferente a input vacio

        amigos.push(nombreDeAmigo); //Agregar el nombre o valor a la lista llamada "amigos"
        imprimirParticipantes();
        console.log(amigos); //imprime en consola la lista de amigos

    } else {

        alert('Por favor, inserte un nombre.')//De lo contrario genera un alert en la pagina que diga: "Por favor, inserte un nombre."

    }

    limpiarCaja();

}







