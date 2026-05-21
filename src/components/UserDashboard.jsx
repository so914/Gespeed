import React from 'react'
import DeviceChart from './DeviceChart'
import { GoSearch } from "react-icons/go";
import UserNumber from "./UserNumber";
import UserTable from "./UserTable";

export default function UserDashboard (){
    return (
        <div className="mt-28 px-6">
        <div className="flex justify-between">
	<h2 className="text-2xl font-thin text-gray-400">Gestion des utilisateurs</h2> 
	 <div className="py-[6px] mb-8  ps-4 shadow-sm pe-2 flex gap-2 border-1 border-gray-100 rounded-2xl">
            <input
            type="text"
            className="focus:outline-none focus:ring-0 text-gray-400 focus:border-transparent"
          />
          <GoSearch size={24} className="text-gray-400" />
	</div>
        </div>
	<div className="grid grid-cols-1 gap-4 md:flex mb-6 ">
	<div className="w-90">  
	 <UserNumber />
	</div>
	<div className="w-full">
	 <UserTable />
	</div>
	</div>
	<div className="grid grid-cols-3">
	 
	</div>
	<DeviceChart />
	
</div>
 )
}
