import React from 'react';


export default function DashHeader(){
    return(
        <header>
            <div className="flex justify-between shadow-sm px-4 md:px-8 h-[66px] fixed w-full z-20 bg-white top-0 absolute">
                <div className="flex">
                    <img src="./logo.png" alt="logo" className="w-[100px] md:w-[130px]"/>
                </div>
                <div className="flex gap-3">
                    <p className="my-auto font-bold text-gray-600">Ronie Ray NGASSAKI</p>
                    <img src="./avatar.avif" alt="admin photo " className="w-[100px] md:size-14 my-auto border-2 border-[lightgray] rounded-full"/>
                </div>
            </div>
        </header>  
    )
}