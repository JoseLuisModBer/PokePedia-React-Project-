import './Footer.css';

/*------------------------COMPONENTE FOOTER----------------------------*/

export const Footer = () => {
  // Obtenemos el año actual (para la función de mostrarTodosCumpleanos)
  const hoy = new Date();
  const añoActual = hoy.getFullYear();

  return (
    <footer>
      <p>
        &copy;{' '}
        <a href="https://www.linkedin.com/in/joseluismodro%C3%B1oberdi%C3%B1as/">
          Jose Luis Modroño Berdiñas
        </a>
        <span> {añoActual}</span>
      </p>
    </footer>
  );
};
