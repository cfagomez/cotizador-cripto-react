import styled from '@emotion/styled'
import React from 'react'

const Contenedor = styled.div`
    background-color: red;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    margin-bottom: 20px;
`
const Parrafo = styled.p`
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: medium;
    font-weight: 700;
`

const Error = () => {
  return (
    <Contenedor>
        <Parrafo>Todos los campos son obligatorios</Parrafo>
    </Contenedor>
  )
}

export default Error