import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashSide from '../components/DashSide';
import DashHeader from '../components/DashHeader';
import Dashcomponent from '../components/Dashcomponent'; 
import UserDashboard from '../components/UserDashboard';    
import CommandeDashboard from '../components/CommandeDashboard';
import ServicesDash from '../components/ServicesDash';

export default function DashLayout() {
  return (
    <div>
        <DashHeader />
        <div className="flex">
      <DashSide />

      <main className="flex-1">
        <Routes>
          <Route index element={<Dashcomponent />} />

          <Route path="utilisateurs" element={<UserDashboard />} />
           {/* <Route path="devis"        element={<Devis />} /> */}
          <Route path="commandes"    element={<CommandeDashboard />} />
           <Route path="services"     element={<ServicesDash />} /> 
        </Routes>
      </main>
    </div>
    </div>
  );
}
