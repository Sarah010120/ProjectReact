import { useState } from "react";
import Membres from "./Membres.jsx";
import Evenement from "./Evenement.jsx";
import Contact from "./Contact.jsx";
import Projet from "./Projet.jsx";
import Acceuill from "./Acceuill.jsx"
import { Routes,Route,Link } from 'react-router-dom';
import Login from './Login.jsx';
import logo from "./assets/logo.png";
import fsbm from "./assets/fsbm.jpeg";
function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   return (
    <div className="w-full h-full bg-gradient-to-r from-blue-400 to-emerald-400 min-h-screen ">

      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 ">
              <a href="/" className="z-20">
                <img src={logo} alt="Logo" width={100} height={100} className="h-12 w-auto hover:scale-105 transition-all"/>
               
              </a>
            </div>
            <div className="sm:hidden md:flex space-x-4">
              {['Acceuill', 'Membres', 'Evenement', 'Projet', 'Contact', 'Login'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Acceuill', 'Membres', 'Evenement', 'Contact', 'Projet', 'Login'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    <Routes>
       <Route path="/acceuill" element={<Acceuill />} /> 
       <Route path="/membres" element={<Membres />} />
       <Route path="/evenement" element={<Evenement />} />
       <Route path="/projet" element={<Projet />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login/>} />
       <Route path="/" element={<Acceuill />} />
     </Routes>
    </div>
  );
  
  
}

export default App
