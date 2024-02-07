import './Pokedex.css';

/*------------------------COMPONENTE POKEDEX----------------------------*/

export const Pokedex = (props) => {
  /* Recojo las props que recibe el componente */
  const {
    pokedexContainerRef,
    pokedexContainerClass,
    pokedexBienRef,
    pokedexBienClass,
    pokedexMalRef,
    pokedexMalClass,
  } = props;

  return (
    <section
      id="pokedex"
      ref={pokedexContainerRef}
      className={pokedexContainerClass}
    >
      <div>
        <img
          id="pokedexGif"
          ref={pokedexBienRef}
          className={pokedexBienClass}
          src="./Recursos/imagenes/pokedex.gif"
        />
        <img
          id="pokedexGifError"
          ref={pokedexMalRef}
          className={pokedexMalClass}
          src="./Recursos/imagenes/pokedexerror.gif"
        />
      </div>
    </section>
  );
};

/* Anulo la declaración de los PropTypes para el componente Tarjeta */
Pokedex.propTypes = undefined;
