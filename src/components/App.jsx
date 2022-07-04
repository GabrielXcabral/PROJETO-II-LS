import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

import Artes from "./Artes"; //Sendo usado no .map
import ArtesForm from "./ArtesForm";
import api from "../services/api";
import { useArte } from "../contexts/FoodContext";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const buttonEl = useRef(null); //criando uma referencia para o botão que adiciona

  const { artes, setArtes, toggleArteForm } = useArte(); //Trazendo referências armazenadas no contexst.jsx

  const handleClick = (event) => {
    toggleArteForm();

    event.currentTarget.blur();
  }; // Tratando a adição de novos objetos ao clicar no botão 

  useEffect(() => {
    const loadArtes = async (arte) => {
      const data = await api.readAll(arte);

      setArtes([...artes, ...data]);
    };

    loadArtes();
  }, []); //Retornando objetos da api

  return (
    <body>
      <header>
        <h1 className="heading">Aluno: Gabriel Xavier Cabral</h1>
      </header>

      
      <main>
        <section className="leading">
          <p className="leading-bigtext">AnimeX</p>
          <p className="leading-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
        </section>

        <Button id="tt" 
          className="btn btn-secondary" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasRight" 
          aria-controls="offcanvasRight"
          onClick={handleClick}
          ref={buttonEl}>
          Encomendar
          </Button>


        <section id="cards">
          {artes.map((arte) => (
            <Artes arte={arte} key={arte.id} />
          ))}
        </section>
        <ArtesForm />
      </main>
    </body>
  );
} // Corpo de código

export default App;
