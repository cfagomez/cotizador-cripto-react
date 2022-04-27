import styled from '@emotion/styled'
import React from 'react'

const Label = styled.label`
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: large;
    font-weight: 400;
`

const Select = styled.select`
    width: 100%;
    font-size: medium;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
    }
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = React.useState('')
  
    const SelectMonedas = () => (

        <>
            <Label>
                {label}
            </Label>
            <Select
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {
                    opciones.map((opcion) => (
                        <option
                            value={opcion.id}
                            key={opcion.id}
                        >
                            {opcion.nombre}
                        </option>
                    ))
                }
            </Select>
        </>

    )

    return [ state, SelectMonedas ]

}

export default useSelectMonedas
