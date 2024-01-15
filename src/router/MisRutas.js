import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Servicios } from '../components/Servicios'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
import { Footer } from "../components/layout/Footer"
import { HeaderNav } from "../components/layout/HeaderNav"
import { Proyecto } from '../components/Proyecto'

export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION*/}
            <HeaderNav></HeaderNav>

            {/* CONTENIDO CENTRAL */}
            <section className='content'>

                <Routes>
                    <Route path="/" element={<Navigate to= "/inicio" />}></Route>
                    <Route path="/build" element={<Navigate to= "/inicio" />}></Route>
                    <Route path="" element={<Navigate to= "/inicio" />}></Route>
                    <Route path="/inicio" element={<Inicio />}></Route>
                    <Route path="/portafolio" element={<Portafolio />}></Route>
                    <Route path="/servicios" element={<Servicios />}></Route>
                    <Route path="/curriculum" element={<Curriculum />}></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                    <Route path="/proyecto/:id" element={<Proyecto />}></Route>
                    <Route path="*" element={
                        <div className='page'>
                            <h1 className='headings'>Error 404</h1>
                        </div>
                    }></Route>
                </Routes>

            </section>



            {/* FOOTER*/}
            <Footer />
        </BrowserRouter>


    )
}
