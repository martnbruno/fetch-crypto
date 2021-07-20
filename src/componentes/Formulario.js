import React from "react";
import { useEffect, useState } from "react";
import Error from "./Error";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-family: 'Bebas Neue',cursive;
  font-size: 30px;
  padding: 15px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  letter-spacing: 2px;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  // State del listado de criptomonedas retornado de la API
  const [listacripto, guardarCriptomonedas] = useState([]);

  //   State para validar el formulario
  const [error, guardarError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dólar Estadounidense" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  // Utilizar useMoneda
  const [moneda, SelectMoneda] = useMoneda("Elige tu moneda", "", MONEDAS);

  // Utilizar useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige tu criptomoneda",
    "",
    listacripto
  );

  //   Ejecutar llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    };

    consultarAPI();
  }, []);

  //Cuando el usuario presiona submit
  const cotizarMoneda = (e) => {
    e.preventDefault();

    // Validar si ambos campos estan correctamente completados.
    if (moneda.trim() === "" || criptomoneda.trim() === "") {
      guardarError(true);
      return;
    }
    // Si no hay error pasar los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SelectCripto />
      <SelectMoneda />
      <Boton type="submit" value="Obtener Cotización"></Boton>
    </form>
  );
};

export default Formulario;
