import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import FadeInSection from "../animations/FadeInSection";
import { IconChevronLeft, IconChevronRight, IconTerminal2 } from "@tabler/icons-react";

// Componente interno para el Carrusel
const EventCarousel = ({ images, accentColor = "#8bc34a" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className={`relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-[${accentColor}]/30 group bg-black`}>
            {/* Overlay cyberético */}
            <div className={`absolute inset-0 bg-[${accentColor}]/10 mix-blend-overlay z-10 pointer-events-none`}></div>
            <div className={`absolute top-2 right-2 border border-[${accentColor}]/50 text-[${accentColor}] text-xs px-2 py-1 bg-black/70 backdrop-blur-sm z-20 font-mono`}>
                SYS.CAM_0{currentIndex + 1}
            </div>

            {/* Imágenes */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full relative z-0"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index}`}
                        className="min-w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                    />
                ))}
            </div>

            {/* Controles */}
            <button
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[${accentColor}]/20 border border-transparent hover:border-[${accentColor}] text-[${accentColor}] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20`}
            >
                <IconChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[${accentColor}]/20 border border-transparent hover:border-[${accentColor}] text-[${accentColor}] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20`}
            >
                <IconChevronRight size={24} />
            </button>

            {/* Indicadores (Puntitos) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                            currentIndex === index ? `bg-[${accentColor}] w-8` : "bg-gray-600 w-3 hover:bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const Events = () => {
    useEffect(() => {
        document.title = "Eventos | C3";
    }, []);

    // Arrays de imágenes de prueba
    const confImages = [
        "/C3Conf/IMG_8665.JPG",
        "/C3Conf/IMG_8667.JPG",
        "/C3Conf/IMG_8725.JPG",
    ];

    const ctfImages = [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1510511459019-5efa7aece747?q=80&w=1000&auto=format&fit=crop",
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col items-center pt-24 pb-12 px-6 lg:px-20 gap-24 font-mono relative overflow-hidden">

            {/* Grid Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,195,74,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,195,74,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>
            
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20 z-0"></div>

            {/* Cabecera Informativa */}
            <FadeInSection>
                <div className="text-center max-w-3xl mx-auto mt-10 relative z-10 bg-[#0a0a0a] p-8 rounded-xl border border-[#8bc34a]/30 shadow-[0_0_30px_rgba(139,195,74,0.1)]">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <IconTerminal2 className="text-[#8bc34a]" size={36} />
                        <Heading level={1} size={5} className="text-white font-bold tracking-widest uppercase drop-shadow-[0_0_10px_rgba(139,195,74,0.3)]">
                            Nuestros <span className="text-[#8bc34a]">Eventos</span>
                        </Heading>
                    </div>
                    <Text size="xl" className="text-gray-400 mt-4">
                        <span className="text-[#8bc34a]">$</span> grep -i "conocimiento" /var/log/events.log <br/><br/>
                        Descubre las conferencias, competencias y talleres donde la comunidad se reúne para compartir conocimiento, desafiar sus límites y fortalecer la cultura de ciberseguridad.
                    </Text>
                </div>
            </FadeInSection>

            {/* SECCIÓN: C3Conf */}
            <FadeInSection>
                <div className="flex flex-col lg:flex-row gap-12 items-center w-full max-w-7xl relative z-10">
                    {/* Carrusel (Mitad izquierda) */}
                    <div className="w-full lg:w-1/2 p-2 border border-[#8bc34a]/20 rounded-2xl bg-[#0a0a0a]">
                        <EventCarousel images={confImages} accentColor="#8bc34a" />
                    </div>

                    {/* Información y Botón (Mitad derecha) */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-[#8bc34a] text-sm">
                            <span className="animate-pulse w-2 h-2 rounded-full bg-red-500"></span> LIVE EVENT
                        </div>
                        <h2 className="text-4xl font-bold text-white tracking-wide">
                            <span className="text-[#8bc34a]">&gt;</span> C3Conf <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Perú</span>
                        </h2>
                        
                        <div className="bg-[#111]/80 border-l-2 border-[#8bc34a] p-4 text-gray-300">
                            El C3Conf es nuestro evento principal. Un espacio diseñado para reunir a expertos de la industria, investigadores y entusiastas en un ciclo de conferencias magistrales sobre las últimas tendencias en seguridad de la información, inteligencia artificial y hacking ético.
                        </div>
                        
                        <Text size="lg" className="text-gray-400">
                            Prepárate para la edición 2026, donde contaremos con ponentes internacionales, demostraciones en vivo y oportunidades únicas de networking.
                        </Text>

                        {/* Botón */}
                        <div className="mt-4">
                            <Link
                                to="/eventos/C3Conf"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-300 bg-[#8bc34a]/10 border border-[#8bc34a] text-[#8bc34a] hover:bg-[#8bc34a] hover:text-black rounded-sm shadow-[0_0_15px_rgba(139,195,74,0.2)] hover:shadow-[0_0_25px_rgba(139,195,74,0.6)] hover:-translate-y-1"
                            >
                                [ VER PORTAL C3CONF 2026 ]
                            </Link>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* SECCIÓN: CCCTF */}
            <FadeInSection>
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center w-full max-w-7xl mb-16 relative z-10">
                    {/* Carrusel (Mitad derecha) */}
                    <div className="w-full lg:w-1/2 p-2 border border-blue-500/20 rounded-2xl bg-[#0a0a0a]">
                        <EventCarousel images={ctfImages} accentColor="#3b82f6" />
                    </div>

                    {/* Información y Botón (Mitad izquierda) */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="flex items-center justify-end md:justify-start gap-2 text-blue-500 text-sm">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> COMPETITION
                        </div>
                        <h2 className="text-4xl font-bold text-white tracking-wide">
                            <span className="text-blue-500">&gt;</span> C3 Capture The Flag <span className="text-blue-500">(CCCTF)</span>
                        </h2>
                        
                        <div className="bg-[#111]/80 border-r-2 md:border-l-2 md:border-r-0 border-blue-500 p-4 text-gray-300 text-right md:text-left">
                            Nuestra competencia técnica donde los participantes resuelven retos de criptografía, explotación web, reversing y análisis forense. Una experiencia inmersiva para medir tus habilidades ofensivas y defensivas en escenarios controlados.
                        </div>
                        
                        <Text size="lg" className="text-gray-400 border-l-2 border-gray-700 pl-4 italic">
                            // Este año, la competencia presencial se llevará a cabo del 13 al 18 de julio en las instalaciones de la FIEE UNI.
                        </Text>

                        {/* Botón */}
                        <div className="mt-4 flex justify-end md:justify-start">
                            <Link
                                to="/recursos/CCCTF"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-300 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:-translate-y-1"
                            >
                                [ MÁS INFORMACIÓN DEL CTF ]
                            </Link>
                        </div>
                    </div>
                </div>
            </FadeInSection>

        </div>
    );
};

export default Events;