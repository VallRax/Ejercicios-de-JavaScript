/**
 * Juego de "Piedra, Papel o Tijera" en JavaScript.
 *
 * Este programa simula una partida entre dos jugadores utilizando estructuras de control en JavaScript.
 * Se definen tres valores para representar las opciones del juego:
 * - Piedra (1)
 * - Papel (2)
 * - Tijera (3)
 *
 * Luego, se determina el ganador mediante una estructura "switch" y operadores lógicos.
 */

// Definimos constantes para representar las opciones del juego
var piedra = 1;
var papel = 2;
var tijera = 3;

// Simulación de elecciones de los jugadores
var jugador1 = 1; // Piedra
var jugador2 = 3; // Tijera

/**
 * Función que determina el ganador del juego.
 */
function juego() {
    switch (true) {
        case (jugador1 == piedra && jugador2 == tijera) || 
             (jugador1 == papel && jugador2 == piedra) || 
             (jugador1 == tijera && jugador2 == papel):
            console.log("¡Ganó el jugador 1!");
            break;
        
        case (jugador1 == tijera && jugador2 == piedra) || 
             (jugador1 == piedra && jugador2 == papel) || 
             (jugador1 == papel && jugador2 == tijera):
            console.log("¡Ganó el jugador 2!");
            break;
        
        case (jugador1 == jugador2):
            console.log("¡Empate!");
            break;
        
        default:
            console.log("Error: Ingresa un valor válido para los jugadores.");
    }
}

// Llamamos a la función para ejecutar el juego
juego();
