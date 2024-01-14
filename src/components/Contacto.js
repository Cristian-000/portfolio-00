import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
    <h1 className='headings'>Contacto</h1>

    <form className='contacto' action="mailto:fcristian480@gmail.com">
      
      <input type="text" placeholder='Nombre'></input>
      <input type="text" placeholder='Apellido'></input>
      <input type="text" placeholder='E-mail'></input>
      <textarea placeholder='Motivo de contacto'></textarea>
      <input type='submit' value="Enviar"></input>

   </form>

   <h3>Redes sociales:</h3>
  </div>
  )
}
