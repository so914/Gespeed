import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa6";

export default function DashSide(){
    return(
        <div className='px-6 md:grid hidden border-r-1 border-[lightgray] min-h-[650px]'>
            <div className="mt-26 flex justify-between">
                <h2 className="font-bold text-blue-900">Administration</h2>
                <FaGlobe className='text-red-700 mt-1'/>
            </div>

            <h3 className='-translate-y-20 text-gray-700 mt-4'>Dashboard</h3>
            <div className="-translate-y-38">
                <h3 className='font-bold text-gray-600 uppercase text-sm'>Gestion</h3>
            <ul className=' text-gray-700 ps-2'>
                
                <li  className='my-4' >Gestion des utilisateurs</li>
                <li className='my-4'>Gestion des devis</li>
                <li className='my-4'>Gestion des commandes</li>
                <li className='my-4'>Gestion des services</li>
            </ul>
            </div>
            

            <div className="bottom-0 absolute text-white bg-blue-900 py-4 px-8 rounded-lg -translate-y-8">
                <NavLink to="/">Retour à l'accueil</NavLink><br />
                <NavLink to="/signIn" className="mt-4">Déconnexion</NavLink>
            </div>
        </div>   
    )
}