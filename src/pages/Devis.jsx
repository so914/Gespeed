import React from 'react'
import DevisRegister from '../components/DevisRegister'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Devis() {
    return(
        <div>
        <Navbar/>
        <main className='flex items-center md:mb-12 justify-center'>
            <DevisRegister/>
        </main>
        <Footer/>
    </div>
    )
}