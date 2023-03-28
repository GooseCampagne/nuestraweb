import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        
                        <p><span>Misión</span></p>
                        <p>Ofrecer soluciones de software personalizadas y de vanguardia que satisfagan las necesidades y objetivos de nuestros clientes, mediante el uso de tecnologías avanzadas y un equipo altamente capacitado y comprometido. Trabajar en colaboración con nuestros clientes para garantizar el éxito continuo y el crecimiento sostenible.</p>
                        
                    </div>
                    <div className='card'>
                        <p><span>Visión</span></p>
                        <p>Brindar soluciones innovadoras y de alta calidad que impulsen el crecimiento y el éxito de nuestros clientes.</p>
                    </div>
                    <div className='card'>
                        <p><span>Objetivo</span></p>
                        <p>El objetivo principal del proyecto es diseñar, desarrollar e implementar un sistema de reconocimiento de voz robusto y preciso que permita a los clientes realizar órdenes en tacos y hamburguesas “Mi Chuy” de manera más rápida y fácil, mejorando así su experiencia y aumentando la eficiencia del proceso de pedido, así como poder tener un corte de caja más precisa al final del día al ser esta automatizada.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
