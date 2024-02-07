import './Tarjeta.css';

/*------------------------COMPONENTE TARJETA----------------------------*/

export const Tarjeta = (props) => {
  /* Recojo las props que recibe el componente */
  const {
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
  } = props;

  /* Pongo en mayúsculas el nombre del pokemon */
  const pokemonNameUpperCamelCase = pokemonName
    ? pokemonName.toUpperCase()
    : '';

  return (
    <div
      id="tarjeta-container"
      ref={tarjetaContainerRef}
      className={tarjetaContainerClass}
    >
      <div id="tarjeta" ref={tarjetaRef} className={tarjetaClass}>
        <section id="contenedor-nombre-y-foto-pokemon">
          <div className="container-name">
            <h1 id="pokemon-name-h1" ref={tarjetaNameRef}>
              {pokemonNameUpperCamelCase}
            </h1>
            <p id="pokemon-weight-height" ref={tarjetaWeightHeightRef}>
              {pokemonWeightAndHeight}
            </p>
          </div>

          <div id="container-photos">
            <img
              id="pokemonImageFront"
              ref={pokemonImageFrontRef}
              src={pokemonImageFront}
              alt="Imagen frontal del Pokémon"
              className={isImageFrontVisible ? 'show' : 'doNotShow'}
            />
            <img
              id="pokemonImageBack"
              ref={pokemonImageBackRef}
              src={pokemonImageBack}
              alt="Imagen trasera del Pokémon"
              className={isImageBackVisible ? 'show' : 'doNotShow'}
            />
          </div>

          <div ref={pokemonTypesRef} id="types-container">
            {pokemonTypes}
          </div>
        </section>

        <section className="contenedor-info-pokemon">
          <table id="table">
            <thead>
              <tr className="primera-fila">
                <th className="tabla-celda-izda">Base</th>
                <th className="tabla-celda-dcha">Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tabla-celda-izda">HP:</td>
                <td ref={HpTableValueRef} className="td-hp tabla-celda-dcha">
                  {hpTableValue}
                </td>
              </tr>
              <tr>
                <td className="tabla-celda-izda">Ataque:</td>
                <td
                  ref={attackTableValueRef}
                  className="td-attack tabla-celda-dcha"
                >
                  {attackTableValue}
                </td>
              </tr>
              <tr>
                <td className="tabla-celda-izda">Defensa:</td>
                <td
                  ref={defenseTableValueRef}
                  className="td-defense tabla-celda-dcha"
                >
                  {defenseTableValue}
                </td>
              </tr>
              <tr>
                <td className="tabla-celda-izda">Ataque especial:</td>
                <td
                  ref={specialAttackTableValueRef}
                  className="td-special-attack tabla-celda-dcha"
                >
                  {specialAttackTableValue}
                </td>
              </tr>
              <tr>
                <td className="tabla-celda-izda">Defensa especial:</td>
                <td
                  ref={specialDefenseTableValueRef}
                  className="td-special-defense tabla-celda-dcha"
                >
                  {specialDefenseTableValue}
                </td>
              </tr>
              <tr>
                <td className="tabla-celda-izda">Velocidad:</td>
                <td
                  ref={speedTableValueRef}
                  className="td-speed tabla-celda-dcha"
                >
                  {speedTableValue}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

/* Anulo la declaración de los PropTypes para el componente Tarjeta */
Tarjeta.propTypes = undefined;
