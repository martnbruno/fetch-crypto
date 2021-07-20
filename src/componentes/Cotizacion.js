import React from "react";
import styled from "@emotion/styled";
import imagen from "../cripto.jpg";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: "Bebas Neue", cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  border-radius: 20px;
  opacity: 0.9;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${imagen});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Info = styled.p`
  font-size: 1.5rem;
  letter-spacing: 1px;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 2rem;
  letter-spacing: 1px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <ResultadoDiv>
      <Precio>
        Precio actual: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
