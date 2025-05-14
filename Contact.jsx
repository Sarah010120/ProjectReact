import image from "./assets/image.jpg";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-emerald-400 min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full mx-auto bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl shadow-xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Contact information */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent">
              Contactez-Nous
            </h2>
            
            <p className="text-black/80 text-base sm:text-lg mb-6">
              Suivez-nous sur les réseaux sociaux pour trouver des informations sur le club CRIOT et nos activités.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/criot.fsbm?igsh=MTIyaGt6eWs5cXZieQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-pink-50 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.facebook.com/CRIoT.FSBM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:criot.club@gmail.com" 
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-green-50 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={image} 
              alt="Contact" 
              className="rounded-lg shadow-lg max-w-full h-auto object-cover max-h-80"
            />
          </div>
        </div>
        
        {/* Optional Contact Form */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Envoyez-nous un message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre message"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-md hover:shadow-lg transition-all duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}