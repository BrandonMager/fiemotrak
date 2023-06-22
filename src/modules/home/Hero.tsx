import React from "react";
import HeroImage from '../../images/stockhero.jpg'
import HeroGif from '../../images/stock.gif'

export default function Hero(){
    return (<div>
        <div className="text-center w-full bg-gradient-to-r from-black via-[#021714] to-black items-center pt-56 m-auto flex flex-col">
            <h1 className="font-bold text-5xl w-1/4">
                <span className="font-bold text-green-500 italic">Elevate</span> Your Financial Game
            </h1>
            <span className="w-1/6 my-4 text-gray-400 text-lg">Unleash the Magic of Real-Time Indicators, Powerful Indexes, and Game-Changing Insights</span>
            {/*<img src = {HeroImage.src} className="w-[900px] h-[500px]" />*/}
            <div className="relative my-24">
                <img src = {HeroGif.src} className="shadow-lg"/>
            </div>
        </div>
    </div>)
}