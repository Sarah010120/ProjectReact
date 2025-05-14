import image from "./assets/image.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpeg";

export default function Projet() {
  // Project card component for reusability
  const ProjectCard = ({ image, title, description }) => (
    <div className="w-full sm:w-auto flex justify-center mb-8">
      <div className="w-full max-w-[300px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
        <div className="h-[200px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-col">
            <h4 className="uppercase text-xl font-bold text-black mb-2">
              {title}
            </h4>
            <p className="font-medium text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const projects = [
    {
      image: image,
      title: "Robotic Arm",
      description: "Armes robotiques : télécommandées ou autonomes, équipées de capteurs, précises, communicantes, avec systèmes de sécurité."
    },
    {
      image: image2,
      title: "MegaPi",
      description: "MegaPi V1 10050 : carte ATmega2560, programmable (Arduino IDE, graphique, Python), compatible Raspberry Pi, pour robotique, CNC, imprimantes 3D. Bluetooth optionnel."
    },
    {
      image: image3,
      title: "Camera Dolly",
      description: "Robot dolly: plateforme mobile avec caméra, réglable, stable, télécommandée et connectée."
    },
    {
      image: image4,
      title: "IOT",
      description: "IoT: objets connectés échangeant des données via Internet"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-r from-blue-400 to-emerald-400">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-white mt-50">
          Projets
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}