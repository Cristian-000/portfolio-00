import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hola, soy Cristian Fernandez y soy <strong>desarrollador Web</strong> en Uruguay,
         ofrezco mis servicios de <strong>programación</strong>  y desarrollo en todo tipo de proyectos web.
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicación web,
         tener más visibilidad y relevancia en internet. 
      </h2>
      <h2 className='title'><Link to="contacto">Contacta conmingo</Link></h2>
      <section className='ultimos-trabajos'>
        <h2 className='headings'>Mis Proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>

        <ListadoTrabajos limite="2"/>

      </section>
    </div>
  )
}
