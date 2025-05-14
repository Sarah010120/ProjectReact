import BOUGABOUCHRA from "./assets/BOUGA BOUCHRA.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import SOUFIANEARYBOU from "./assets/SOUFIANE ARYBOU.png";
import MYRIEMBENHADDOU from "./assets/MYRIEM BENHADDOU.png";
import NOUHAILAKHACHTAOUI from "./assets/NOUHAILA KHACHTAOUI.png";
import AZIZANASYF from "./assets/AZIZA NASYF.png";
import HARTALSANAA from "./assets/HARTAL SANAA.png";
import ELHAOUZISALMA from "./assets/EL HAOUZI SALMA.png";
import WALIDRACHID from "./assets/WALID RACHID.png";
import ELHANSALIAYMAN from "./assets/EL HANSALI AYMAN.png";
import ABDESSAMADMORAD from "./assets/ABDESSAMAD MORAD.png";
import MOUJAHIDLATIFA from "./assets/MOUJAHID LATIFA.png";
import METAHIIMAD from "./assets/METAHI IMAD.png";
import AYMENABID from "./assets/AYMEN ABID.png";
import MOUNIRBOUGUI from "./assets/MOUNIR BOUGUI.png";
import BOUTAINASOULTANA from "./assets/BOUTAINA SOULTANA.png";
import NAITILYAS from "./assets/NAIT ILYAS.png";
import CHTAINIYASSINE from "./assets/CHTAINI YASSINE.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

export default function Membres(){
    // Create a member card component for reusability
    const MemberCard = ({ image, name, role, email }) => (
        <div className="h-full flex justify-center items-center">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] bg-white rounded-md overflow-hidden shadow-lg">
                <div className="w-full h-[140px] sm:h-[160px] bg-sky-700 flex items-center justify-center">
                    <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full bg-white relative overflow-hidden">
                        <img src={image} alt={name} className="mx-auto w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="py-6 sm:py-8 px-4 sm:px-6">
                    <div className="flex flex-col items-center text-center">
                        <h4 className="uppercase text-lg sm:text-xl font-bold text-black">{name}</h4>
                        <p className="font-semibold text-gray-700 mt-1">{role}</p>
                        {email && (
                            <a 
                                href={`mailto:${email}`} 
                                className="mt-3 inline-flex items-center bg-blue-400 px-3 py-2 rounded-lg shadow-md hover:bg-sky-100 transition-all duration-300"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
    
    return (
        <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center text-white bg-gradient-to-r from-blue-400 to-emerald-400">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
                 Équipe
            </h2>
            
            <div className="w-full max-w-6xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="pb-12"
                >
                    <SwiperSlide>
                        <MemberCard 
                            image={BOUGABOUCHRA}
                            name="BOUGA BOUCHRA"
                            role="Presidente"
                            email="bouga.bouchra@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={ABDESSAMADMORAD}
                            name="ABDESSAMAD MORAD"
                            role="Vice President"
                            email="abdessamad.morad01@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={SOUFIANEARYBOU}
                            name="SOUFIANE ARYBOU"
                            role="Trésorier"
                            email="soufianearybou@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={MYRIEMBENHADDOU}
                            name="MYRIEM BENHADDOU"
                            role="secretaire generalee"
                            email="benhaddoumyriem1@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={NOUHAILAKHACHTAOUI}
                            name="NOUHAILA KHACHTAOUI"
                            role="secretaire generale"
                            email="nouhailakhachtaoui5@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={AZIZANASYF}
                            name="AZIZA NASYF"
                            role="Responsable De communication"
                            email="azizanasyf6@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={HARTALSANAA}
                            name="HARTAL SANAA"
                            role="Responsable De communication"
                            email="hartalsanaa@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={ELHAOUZISALMA}
                            name="EL HAOUZI SALMA"
                            role="Responsable De communication"
                            email="salma123elhaouzi@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={WALIDRACHID}
                            name="WALID RACHID"
                            role="Responsable du materiel"
                            email="rachidwalid427@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={ELHANSALIAYMAN}
                            name="EL HANSALI AYMAN"
                            role="Responsable du materiel"
                            email="aymenabid084@gmail.com.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={MOUJAHIDLATIFA}
                            name="MOUJAHID LATIFA"
                            role="Cellule des evenments"
                            email="latifamoujahud@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={METAHIIMAD}
                            name="METAHI IMAD"
                            role="Cellule des evenments"
                            email="metahi.imad@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={AYMENABID}
                            name="AYMEN ABID"
                            role="Cellule des evenments"
                            email="aymenabid084@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={MOUNIRBOUGUI}
                            name="MOUNIR BOUGUI"
                            role="Designer"
                            email="bouguimounir875@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={BOUTAINASOULTANA}
                            name="BOUTAINA SOULTANA"
                            role="Responsable RSE"
                            email="boutaina.soultana@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={NAITILYAS}
                            name="NAIT ILYAS"
                            role="MembreResponsable RSE"
                            email="boutaina2002maroc@gmail.com"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <MemberCard 
                            image={CHTAINIYASSINE}
                            name="CHTAINI YASSINE"
                            role="Designer"
                            email="chtaini.yassine@gmail.com"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}