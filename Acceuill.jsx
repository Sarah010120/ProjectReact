import { Routes, Route, Link } from 'react-router-dom';

import Lottie from "lottie-react";
import robot from "./robot.json";
export default function Acceuill() {
  return (

    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] text-center px-4 py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row">
          <div className='lottie '></div>
         <Lottie loop={true} animationData = {robot} />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold my-0 bg-gradient-to-r from-blue-800 to-cyan-950 bg-clip-text text-transparent leading-tight">
            Bienvenus Au Club Robotique CRIOT
          </h1>
          
          <p className="text-black text-base sm:text-lg md:text-xl mb-8 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
            Le Club Robotique et IoT (CRIOT) de la FSBM, fondé en 2021 par le Professeur Mohamed Talea, est une communauté étudiante passionnée par les technologies connectées. Le club propose des ateliers pratiques, des projets collaboratifs et des formations spécialisées pour développer les compétences en robotique et IoT, préparant ainsi ses membres aux opportunités dans ces domaines d'avenir.
          </p>
          
          <div className="mt-4">
            <Link 
              to="/Login" 
              className="inline-block bg-gradient-to-br from-cyan-950 to-blue-800 px-5 py-3 rounded-lg text-white font-medium 
              hover:-translate-y-1 hover:shadow-[0_0_15px] transition-all duration-300"
            >
              Rejoindre le club
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}