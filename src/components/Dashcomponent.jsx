import React from 'react'
import ServicesChart from './ServiceChart'
import DemandesChart from './DemandeChart'
import StatutChart from './StatutChart'
import RevenueChart from './RevenueChart'

export default function Dashcomponent(){
    return (
        <section className='px-6'>
            <div className='mt-22'>
                <div className='flex'>
                    <h2 className='font-medium text-gray-700  mb-4 text-2xl '>Bienvenue dans la partie gestion de GeSpeed</h2>
                    <input type="text" className='rounded-lg border-1 border-[lightgray] right-8 absolute h-8' />
                </div>
                <p className="text-gray-400 ">Tableau de bord récaputilatif</p>
            </div>

            <div>
                <div className="grid grid-cols-4 w-full  mt-8 gap-4 justify-items-around">
                    <div className='w-25'>
                        <h3 className='md:text-4xl text-blue-700 font-bold mb-4'>750</h3>
                        <p>Demandes reçues</p>
                    </div>
                    <div>
                        <h3 className='md:text-4xl  font-bold mb-4'>100</h3>
                        <p>Devis émis</p>
                    </div>
                    <div>
                        <h3 className='md:text-4xl text-blue-700 font-bold mb-4'>10</h3>
                        <p>Missions en cours</p>
                    </div>
                    <div>
                        <h3 className='md:text-4xl font-bold mb-4'>950 000 FCFA</h3>
                        <p>Chiffre d'affaires</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="border-1 rounded-lg shadow-xl border-[lightgray]">
                        <ServicesChart/>
                    </div>
                    <div className="border-1 rounded-lg shadow-xl border-[lightgray]">
                        <StatutChart/>
                    </div>
                </div>
            </div>
        </section>
    )
}