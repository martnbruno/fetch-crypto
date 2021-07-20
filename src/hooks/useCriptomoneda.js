import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, listacripto) => {
  // State del custom hook
  const [state, actualizarState] = useState(stateInicial);

  const SelectCripto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value="">- Seleccione -</option>
        {/* Mapear todas las cripto traidas de la API y mostrar solo la información deseada */}
        {listacripto.map((cripto) => (
          <option key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name}>
            {cripto.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  // Retornar state, interfaz y funcion que modifica el state
  return [state, SelectCripto, actualizarState];
};

export default useCriptomoneda;
