import React from 'react'

export default function Prueba() {
  return (
    <div className='pt-5 mt-2 container'>
      <h1>Prueba</h1>
      <div>
        <form
          id='formulario'
        >
          <input
            type="text"
            id='usename'
          />
          <button type='submit'></button>
        </form>
      </div>
    </div>
  )
}