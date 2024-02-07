import './PokePedia.css';
// Importo UseState y useRef para poder usarlos en este componente.
import { useState, useRef } from 'react';
// Importo los componentes Pokedex y Tarjeta
import { Pokedex } from '../2Pokedex/Pokedex';
import { Tarjeta } from '../2Tarjeta/Tarjeta';
// Importo tres funciones del archivo FuncionesExtra.js
import {
  writeMessage,
  reloadPage,
  printTheBackground,
} from '../0FuncionesExtra/FuncionesExtra';

/*------------------------COMPONENTE MAIN----------------------------*/

export const PokePedia = () => {
  /*--------------------VARIABLES Y HOOKS----------------------*/

  let [pokemonFromForm, setPokemonFromForm] = useState('');

  const pokedexContainerRef = useRef(null);
  let [pokedexContainerClass, setpokedexContainerClass] = useState('show');
  const pokedexBienRef = useRef(null);
  let [pokedexBienClass, setPokedexBienClass] = useState('show');
  const pokedexMalRef = useRef(null);
  let [pokedexMalClass, setPokedexMalClass] = useState('doNotShow');
  const tarjetaContainerRef = useRef(null);
  let [tarjetaContainerClass, setTarjetaContainerClass] = useState('doNotShow');
  const tarjetaRef = useRef(null);
  let [tarjetaClass, setTarjetaClass] = useState('');

  const tarjetaNameRef = useRef(null);
  let [pokemonName, setPokemonName] = useState(null);
  const tarjetaWeightHeightRef = useRef(null);
  let [pokemonWeightAndHeight, setPokemonWeightAndHeight] = useState(null);

  const pokemonImageFrontRef = useRef(null);
  let [pokemonImageFront, setPokemonImageFront] = useState(null);
  const pokemonImageBackRef = useRef(null);
  let [pokemonImageBack, setPokemonImageBack] = useState(null);
  const [isImageFrontVisible, setIsImageFrontVisible] = useState(true);
  const [isImageBackVisible, setIsImageBackVisible] = useState(true);

  const pokemonTypesRef = useRef(null);
  let [pokemonTypes, setPokemonTypes] = useState(null);

  const HpTableValueRef = useRef(null);
  let [hpTableValue, setHpTableValue] = useState(null);
  const attackTableValueRef = useRef(null);
  let [attackTableValue, setAttackTableValue] = useState(null);
  const defenseTableValueRef = useRef(null);
  let [defenseTableValue, setDefenseTableValue] = useState(null);
  const specialAttackTableValueRef = useRef(null);
  let [specialAttackTableValue, setSpecialAttackTableValue] = useState(null);
  const specialDefenseTableValueRef = useRef(null);
  let [specialDefenseTableValue, setSpecialDefenseTableValue] = useState(null);
  const speedTableValueRef = useRef(null);
  let [speedTableValue, setSpeedTableValue] = useState(null);

  const reinicioContainerRef = useRef(null);
  let [reinicioContainerClass, setReinicioContainerClass] =
    useState('doNotShow');

  /*--------------------FUNCIÓN DOSEARCH----------------------*/

  // FUNCIÓN DOSEARCH
  const doSearch = async (e) => {
    e.preventDefault();
    // Ocultamos el botón de reinicio y la tarjeta inicialmente.
    setReinicioContainerClass('doNotShow');
    setTarjetaContainerClass('doNotShow');

    // Convertimos a minúsculas el valor del input
    const lowercasePokemonFromForm = pokemonFromForm.toLowerCase();

    try {
      // Iniciamos la petición a la API.
      writeMessage(`Cargando datos de la API...`);
      const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${lowercasePokemonFromForm}`;
      const response = await fetch(url);

      if (response.ok) {
        writeMessage(`Aquí tienes los datos de la API:`);
        const data = await response.json();
        console.log('data', data);

        // Recogemos los diversos datos de la petición y los guardamos en sus variables corrspondientes.
        setPokemonName(
          `#${data.id} | ${
            data.name.charAt(0).toUpperCase() + data.name.slice(1)
          }`
        );

        setPokemonWeightAndHeight(
          `Weigh: ${data.weight} | height: ${data.height}`
        );

        setPokemonImageFront(data.sprites.front_default);
        setPokemonImageBack(data.sprites.back_default);
        setIsImageFrontVisible(!!data.sprites.front_default);
        setIsImageBackVisible(!!data.sprites.back_default);

        // Transformamos el string de tipos en un array
        const typesArray = data.types.map((obj) => obj.type.name);

        // Creamos un string directamente con las etiquetas span que contienen los tipos
        const typesHTML = typesArray.map((type, index) => (
          <span key={index} className={`type ${type}`}>
            {type}
          </span>
        ));

        setPokemonTypes(typesHTML);

        /* Llamo a la función printTheBackground que está en FuncionesExtra.js y le mando dos valores como props */
        printTheBackground(typesArray[0], setTarjetaClass);

        setHpTableValue(data.stats[0].base_stat);
        setAttackTableValue(data.stats[1].base_stat);
        setDefenseTableValue(data.stats[2].base_stat);
        setSpecialAttackTableValue(data.stats[3].base_stat);
        setSpecialDefenseTableValue(data.stats[4].base_stat);
        setSpeedTableValue(data.stats[5].base_stat);

        // Ocultamos la pokedex y hacemos visible la tarjeta con los datos del pokemon:
        setpokedexContainerClass('doNotShow');
        setTarjetaContainerClass('show');
        setReinicioContainerClass('show');
      } else {
        /* Llamo a la función writeMessage que está en FuncionesExtra.js
        y le mando ESTE texto a mostrar en console.log */
        writeMessage(`Hubo un error haciendo la petición`);
        // Ocultamos la pokédex buena y mostramos la mala | Ocultamos la tarjeta y mostramos el contenedor de pokédex.
        setPokedexBienClass('doNotShow');
        setPokedexMalClass('show');
        setTarjetaContainerClass('doNotShow');
        setpokedexContainerClass('show');
        setReinicioContainerClass('show');
      }
    } catch (error) {
      /* Llamo a la función writeMessage que está en FuncionesExtra.js
        y le mando como texto a mostrar en console.log EL ERROR DE QUE SE TRATE*/
      writeMessage(error.message);
    }
  };

  /*-------------------------------------RETURN------------------------------------------*/

  return (
    <main>
      {/*------------------------FORM------------------------- */}
      <section className="formulario-buscar-pokemon">
        <form className="search" onSubmit={doSearch}>
          <input
            type="search"
            name="query"
            value={pokemonFromForm}
            onChange={(e) => setPokemonFromForm(e.target.value)}
            required
            placeholder="Search by name / nº..."
          />
          <button type="submit">
            <img src="./Recursos/imagenes/pokeball-icon-2.png" alt="Search" />
          </button>
        </form>
      </section>
      {/*------------------------COMPONENTE POKÉDEX------------------------- */}

      <Pokedex
        {...{
          pokedexContainerRef,
          pokedexContainerClass,
          pokedexBienRef,
          pokedexBienClass,
          pokedexMalRef,
          pokedexMalClass,
        }}
      />

      {/*------------------------COMPONENTE TARJETA------------------------- */}

      <Tarjeta
        {...{
          tarjetaContainerRef,
          tarjetaContainerClass,
          tarjetaRef,
          tarjetaClass,
          tarjetaNameRef,
          pokemonName,
          tarjetaWeightHeightRef,
          pokemonWeightAndHeight,
          pokemonImageFrontRef,
          pokemonImageFront,
          isImageFrontVisible,
          pokemonImageBackRef,
          pokemonImageBack,
          isImageBackVisible,
          pokemonTypesRef,
          pokemonTypes,
          HpTableValueRef,
          hpTableValue,
          attackTableValueRef,
          attackTableValue,
          defenseTableValueRef,
          defenseTableValue,
          specialAttackTableValueRef,
          specialAttackTableValue,
          specialDefenseTableValueRef,
          specialDefenseTableValue,
          speedTableValueRef,
          speedTableValue,
        }}
      />

      {/*------------------------BOTÓN DE REINICIO------------------------- */}
      <div
        id="reloadButtonContainer"
        ref={reinicioContainerRef}
        className={reinicioContainerClass}
      >
        <button id="reloadButton" onClick={reloadPage}>
          RESET
        </button>
      </div>
    </main>
  );
};

PokePedia.propTypes = undefined;
