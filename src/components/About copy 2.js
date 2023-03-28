import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
              
                <div className='col-2'>
                    <h2>Objetivo</h2>
                    <span className='line'></span>
                    <p>El objetivo principal del proyecto es diseñar, desarrollar e implementar un sistema de reconocimiento de voz robusto y preciso que permita a los clientes realizar órdenes en tacos y hamburguesas “Mi Chuy” de manera más rápida y fácil, mejorando así su experiencia y aumentando la eficiencia del proceso de pedido, así como poder tener un corte de caja más precisa al final del día al ser esta automatizada.</p>
                    
                </div>
            </div>
        </div>
    )
}

export default About
