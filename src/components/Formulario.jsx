import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'

const Header = styled.h2`
    color: white;
    font-size: xx-large;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-bottom: 50px;
`

const Boton = styled.button`
    background-color: indigo;
    color: white;
    width: 100%;
    text-transform: uppercase;
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    }
`

const Contenedor = styled.div`
    margin: 0 auto;
    max-width: 900px;
    width: 90%;
`

const Formulario = ({}) => {

    const monedas = [

        {id: 'USD', nombre: 'Dolar de Estados Unidos'},
        {id: 'MXN', nombre: 'Peso Mexicano'},
        {id: 'EUR', nombre: 'Euro'},
        {id: 'GBP', nombre: 'Libra Esterlina'}
    
    ]

    const [criptomonedas, setCriptomonedas] = React.useState([])
    const [error, setError] = React.useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elegi tu Criptomoneda', criptomonedas)

    React.useEffect(() => {

        const consultaAPI = async () => {

            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptomonedas = resultado.Data.map((criptomoneda) => {

                const objetoCriptomoneda = 

                {
                    id: criptomoneda.CoinInfo.Name,
                    nombre: criptomoneda.CoinInfo.FullName
                }

                return objetoCriptomoneda

            })

            setCriptomonedas(arrayCriptomonedas)

        }

        consultaAPI()

    }, [])

    const validarFormulario = (e) => {

        e.preventDefault()

        if ([moneda, criptomoneda].includes('')) {

            setError(true)

            return

        }

        setError(false)

    }

  return (
    <Contenedor>
        <Header>
            Cotiza Criptomonedas al Instante
        </Header>
        <form
            onSubmit={validarFormulario}
        >
            {
                error ? (
                    <Error />
                ) : (
                    null
                )
            }
            <SelectMonedas />
            <SelectCriptomonedas />
            <Boton
                type='submit'
            >
                Cotizar
            </Boton>
        </form>
    </Contenedor>
  )
}

export default Formulario