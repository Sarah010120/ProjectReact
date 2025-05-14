import React, { useState } from 'react'
import Email from "./assets/Email.jpeg";
import Personne from "./assets/Personne.jpeg";
import Passe from "./assets/Passe.jpeg";

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true)
  
  return (
    <div className="min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-400 to-emerald-400">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>
        
        {/* Toggle buttons */}
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button 
            onClick={() => setIsLoginMode(true)} 
            className={`w-1/2 text-sm sm:text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}
          >
            Se Connecter
          </button>
          <button 
            onClick={() => setIsLoginMode(false)} 
            className={`w-1/2 text-sm sm:text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}
          >
            S'inscrire
          </button>
          <div 
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all duration-300 ${isLoginMode ? "left-0" : "left-1/2"}`}
          ></div>
        </div>
        
        {/* Form */}
        <form className="space-y-4">
          {!isLoginMode && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={Personne} alt="Nom" className="h-5 w-5 opacity-60" />
              </div>
              <input 
                type="text" 
                placeholder="Nom" 
                required 
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 placeholder-gray-400"
              />
            </div>
          )}
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={Email} alt="Email" className="h-5 w-5 opacity-60" />
            </div>
            <input 
              type="email" 
              placeholder="Email Addresse" 
              required 
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 placeholder-gray-400"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={Passe} alt="Mot de Passe" className="h-5 w-5 opacity-60" />
            </div>
            <input 
              type="password" 
              placeholder="Mot De Passe" 
              required 
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 placeholder-gray-400"
            />
          </div>
          
          {!isLoginMode && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={Passe} alt="Confirmer Mot de Passe" className="h-5 w-5 opacity-60" />
              </div>
              <input 
                type="password" 
                placeholder="Confirmez Mot De Passe" 
                required 
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 placeholder-gray-400"
              />
            </div>
          )}
          
          {isLoginMode && (
            <div className="text-right">
              <button type="button" className="text-cyan-600 hover:underline text-sm">
                Mot de passe oublié
              </button>
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
          >
            {isLoginMode ? "Login" : "Sign Up"}
          </button>
          
          <p className="text-center text-gray-600 text-sm sm:text-base">
            {isLoginMode ? "Pas encore de compte?" : "Vous avez déjà un compte"}
            <button 
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)} 
              className="ml-1 text-cyan-600 hover:underline"
            >
              {isLoginMode ? "S'inscrire" : "Se Connecter"}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}