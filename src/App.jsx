import React from 'react'
import Cotizacion from './components/Cotizacion'
import Formulario from "./components/Formulario"
import styled from '@emotion/styled'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
    margin: 0 auto;
    max-width: 900px;
    width: 90%;
`

function App() {
  
  const [monedaSeleccionada, setMonedaSeleccionada] = React.useState({})
  const [cotizacion, setCotizacion] = React.useState({})
  const [cargando, setCargando] = React.useState(false)

  React.useEffect(() => {

    if (Object.keys(monedaSeleccionada).length > 0) {

      const consultaAPI = async () => {
        
        setCargando(true)
        setCotizacion({})

        const {moneda, criptomoneda} = monedaSeleccionada

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCotizacion(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      
      }

      consultaAPI()

    }

  }, [monedaSeleccionada])

  return (
    <Contenedor>
      <Formulario
        monedaSeleccionada={monedaSeleccionada} 
        setMonedaSeleccionada={setMonedaSeleccionada}
      />
      {
        cargando ? (
          <Spinner />
        ) : (
          null
        )
      }
      {
        Object.keys(cotizacion).length > 0 ? (
          <Cotizacion 
            cotizacion={cotizacion}
          />
        ) : (
          null
        )
      }
      
    </Contenedor>
  )
}

export default App
