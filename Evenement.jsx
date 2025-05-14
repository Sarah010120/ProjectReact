import "./Rejoindre.css";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import "./Evenement.css";

export default function Evenement() {
  // Event card component for reusability
  const EventCard = ({ image, number, description }) => (
    <div className="w-full sm:w-auto flex justify-center mb-8">
      <div className="w-full max-w-[330px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
        <div className="h-[200px] overflow-hidden">
          <img
            src={image}
            alt={`Événement ${number}`}
            className="w-full h-full object-cover hover:grayscale transition duration-300"
          />
        </div>
        <div className="py-6 px-5">
          <div className="flex flex-col">
            <h4 className="uppercase text-xl font-bold text-black mb-2">
              Événement {number}
            </h4>
            <p className="font-medium text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const events = [
    {
      image: img1,
      number: 1,
      description:
        "Le 2 décembre 2023, le club CRIOT a formé les participants à l'Arduino UNO, combinant découverte, programmation et projets simples."
    },
    {
      image: img2,
      number: 2,
      description:
        "Le 9 décembre, le club de robotique et IoT a tenu une formation Arduino axée sur des exercices pratiques et un projet LED pour renforcer les compétences."
    },
    {
      image: img3,
      number: 3,
      description:
        "Le 9 mars, CRIOT-LAB, lancé par le club de robotique et IoT, a proposé formation en gestion de projets et atelier créatif pour booster créativité et entrepreneuriat."
    },
    {
      image: img4,
      number: 4,
      description:
        "Le 20 mars, le club de robotique et IoT a tenu une journée sur l'IA avec formations, ateliers pratiques et la présence du Doyen, motivant les participants à explorer ses applications."
    },
    {
      image: img5,
      number: 5,
      description:
        "Le 25 mai, le club CRIOT et la Faculté Ben M'Sick ont tenu un atelier de robotique et d'IA au collège Ettahadi pour initier les collégiens aux sciences et technologies."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-r from-blue-400 to-emerald-400 ">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-blue-950 mt-50">
           Événements
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              number={event.number}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
