import styled from '@emotion/styled'
import React from 'react'

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
`

const Precio = styled.span`
    font-size: larger;
`

const Imagen = styled.img`
    width: 200px;
    margin-right: 20px;
`

const Cotizacion = ({cotizacion}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, LASTUPDATE, IMAGEURL} = cotizacion

  return (
    <Contenedor>

        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="logo-criptomoneda" />

        <div>
            <p>
                El precio es de: <Precio>{PRICE}</Precio>
            </p>
            <p>
                Precio mas alto del dia: <Precio>{HIGHDAY}</Precio>
            </p>
            <p>
                Precio mas bajo del dia: <Precio>{LOWDAY}</Precio>
            </p>
            <p>
                Variaciones ultimas 24 horas: <Precio>{CHANGE24HOUR}</Precio>
            </p>
            <p>
                Ultima actualizacion: <Precio>{LASTUPDATE}</Precio>
            </p>
        </div>
        
    </Contenedor>
  )
}

export default Cotizacion