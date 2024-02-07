// DOCUMENTO QUE CONTIENE DIVERSAS FUNCIONES EXTRA QUE EMPLEO EN EL PROYECTO

/*-------------------------------------------*/

/***************************
 *** FUNCIÓN WRITEMESSAGE ***
 ***************************/

/* Función que sirve para crear un console.log con el texto que la función reciba como prop */
export const writeMessage = (message) => {
  console.log(message);
};

/*-------------------------------------------*/

/**********************************
 *** FUNCIÓN REINICIAR POKEPEDIA ***
 **********************************/

/* Función que sirve para recargar una página */
export function reloadPage() {
  location.reload();
}

/*-------------------------------------------*/

/****************************
 *** FUNCIÓN FONDO TARJETA ***
 *****************************/

/* Función que recibe dos props: el tipo principal del pokemon actual
y la variable para almacenar la clase en el useState tarjetaClass */
export const printTheBackground = (tipoPrincipal, setTarjetaClass) => {
  // Defino el className que se asignará a cada tarjeta en función del tipo principal del pokemon
  const tipoPrincipalClases = {
    dark: 'darkTarjeta',
    dragon: 'dragonTarjeta',
    electric: 'electricTarjeta',
    fairy: 'fairyTarjeta',
    fighting: 'fightingTarjeta',
    fire: 'fireTarjeta',
    flying: 'flyingTarjeta',
    ghost: 'ghostTarjeta',
    grass: 'grassTarjeta',
    bug: 'grassTarjeta',
    ground: 'groundTarjeta',
    ice: 'iceTarjeta',
    normal: 'normalTarjeta',
    poison: 'poisonTarjeta',
    psychic: 'psychicTarjeta',
    rock: 'rockTarjeta',
    steel: 'steelTarjeta',
    water: 'waterTarjeta',
  };

  // Guardo en finalTarjetaClass la clase que corresponda en función del tipo del pokemon
  const finalTarjetaClass =
    tipoPrincipalClases[tipoPrincipal] || 'stellarTarjeta';

  // Asigno el nombre de la clase como valor del useState tarjetaClass del componente PokePedia.jsx
  setTarjetaClass(finalTarjetaClass);
};
