import React from 'react';
import DashSide from '../components/DashSide';
import DashHeader from '../components/DashHeader';
import Dashcomponent from '../components/Dashcomponent';

export default function Dashboard(){
    return(
        <div>
            <DashHeader/>
            <main>
                <div className="flex">
                    <DashSide />
                    <div>
                        <Dashcomponent/>
                    </div>
                </div>
            </main>
        </div>
    )
}