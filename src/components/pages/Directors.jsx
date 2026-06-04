import { useEffect, useRef } from "react";
import FadeInSection from "../animations/FadeInSection";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { IconBrandLinkedin, IconBrandGithub, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

// Importamos directamente el archivo JSON local
import miembrosData from "../../data/juntaDirectiva.json";

const Directors = () => {
    useEffect(() => {
        document.title = "Junta Directiva | C3";
    }, []);

    const groupedMembers = miembrosData.reduce((acc, miembro) => {
        const area = miembro.area || "Otros";
        if (!acc[area]) {
            acc[area] = [];
        }
        acc[area].push(miembro);
        return acc;
    }, {});

    const areaOrder = [
        "Presidencia",
        "Secretaría General",
        "Asuntos Académicos",
        "Proyectos e Investigación",
        "Relaciones Públicas",
        "Marketing",
        "Economía y Finanzas",
        "Otros",
        "Miembros de Apoyo"
    ];

    const apoyoScrollRef = useRef(null);

    const scrollApoyo = (direction) => {
        if (apoyoScrollRef.current) {
            const scrollAmount = 350; // Aproximadamente el ancho de una tarjeta + gap
            apoyoScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 md:px-20 gap-16 w-full overflow-hidden">
            {/* CSS para esconder scrollbar en Webkit */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            {/* Encabezado Principal */}
            <FadeInSection>
                <div className="text-center max-w-3xl mx-auto mt-10 flex flex-col gap-4">
                    <Heading level={1} size={5} className="text-white text-3xl md:text-5xl font-bold">
                        Nuestra <span className="text-[#8bc34a]">Junta Directiva</span>
                    </Heading>
                    <Text size="lg" className="text-gray-400 text-base md:text-xl leading-relaxed px-2">
                        El equipo encargado de guiar las iniciativas, coordinar los eventos estratégicos y asegurar el crecimiento y la excelencia técnica de nuestra comunidad.
                    </Text>
                </div>
            </FadeInSection>

            {/* Secciones por Área */}
            <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 px-4 md:px-10 lg:px-16 mb-16 items-start">
                {areaOrder.map((area, index) => {
                    const membersInArea = groupedMembers[area];
                    if (!membersInArea || membersInArea.length === 0) return null;

                    // Hacemos que la Presidencia (índice 0) y Miembros de Apoyo ocupen toda la fila superior/inferior
                    const isFullRow = index === 0 || area === "Miembros de Apoyo";

                    return (
                        <div key={area} className={isFullRow ? "lg:col-span-2" : "col-span-1"}>
                            <FadeInSection>
                                <div className="flex flex-col gap-10">
                                    {/* Título del Área */}
                                    <div className="text-center">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block pb-3">
                                            {area}
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-[#8bc34a] rounded-full opacity-80 shadow-[0_0_10px_rgba(139,195,74,0.5)]"></div>
                                        </h2>
                                    </div>

                                    {/* Renderizado condicional: Carrusel para Apoyo, Grid para el resto */}
                                    {area === "Miembros de Apoyo" ? (
                                        <div className="relative w-full max-w-6xl mx-auto flex items-center group/carousel">
                                            {/* Botón Izquierda */}
                                            <button 
                                                onClick={() => scrollApoyo('left')}
                                                className="absolute left-0 z-10 p-2 md:p-3 bg-black/80 border border-[#8bc34a]/50 text-[#8bc34a] rounded-full hover:bg-[#8bc34a] hover:text-black transition-all shadow-[0_0_15px_rgba(139,195,74,0.3)] -ml-4 md:-ml-8 opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
                                                aria-label="Desplazar a la izquierda"
                                            >
                                                <IconChevronLeft size={28} />
                                            </button>

                                            {/* Contenedor Scrolleable */}
                                            <div 
                                                ref={apoyoScrollRef}
                                                className="flex overflow-x-auto gap-6 md:gap-8 px-4 py-4 scrollbar-hide snap-x snap-mandatory scroll-smooth w-full"
                                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                            >
                                                {membersInArea.map((miembro) => (
                                                    <div
                                                        key={miembro.id}
                                                        className="flex-none w-[260px] sm:w-[300px] snap-center bg-[#0a0a0a] border border-gray-900 rounded-2xl p-6 flex flex-col items-center text-center gap-4 group hover:border-[#8bc34a]/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(139,195,74,0.05)]"
                                                    >
                                                        {/* Contenedor de la Foto */}
                                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-[#8bc34a] transition-colors duration-300 bg-[#111] shadow-inner">
                                                            <img
                                                                src={miembro.foto}
                                                                alt={miembro.nombre}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"; }}
                                                            />
                                                        </div>

                                                        {/* Información del Miembro */}
                                                        <div className="flex flex-col gap-1 mt-2">
                                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#8bc34a] transition-colors duration-300">
                                                                {miembro.nombre}
                                                            </h3>
                                                            <p className="text-sm md:text-base text-gray-400 font-mono tracking-wider uppercase">
                                                                {miembro.cargo}
                                                            </p>
                                                        </div>

                                                        {/* Redes Sociales con iconos de Tabler */}
                                                        <div className="flex gap-4 mt-2">
                                                            {miembro.linkedin && (
                                                                <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#111] text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200">
                                                                    <IconBrandLinkedin size={20} />
                                                                </a>
                                                            )}
                                                            {miembro.github && (
                                                                <a href={miembro.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#111] text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200">
                                                                    <IconBrandGithub size={20} />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Botón Derecha */}
                                            <button 
                                                onClick={() => scrollApoyo('right')}
                                                className="absolute right-0 z-10 p-2 md:p-3 bg-black/80 border border-[#8bc34a]/50 text-[#8bc34a] rounded-full hover:bg-[#8bc34a] hover:text-black transition-all shadow-[0_0_15px_rgba(139,195,74,0.3)] -mr-4 md:-mr-8 opacity-0 group-hover/carousel:opacity-100"
                                                aria-label="Desplazar a la derecha"
                                            >
                                                <IconChevronRight size={28} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                            {membersInArea.map((miembro) => (
                                                <div
                                                    key={miembro.id}
                                                    className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(50%-1.5rem)] xl:w-[calc(50%-1.5rem)] min-w-[250px] max-w-[380px] bg-[#0a0a0a] border border-gray-900 rounded-2xl p-6 flex flex-col items-center text-center gap-4 group hover:border-[#8bc34a]/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(139,195,74,0.05)]"
                                                >
                                                    {/* Contenedor de la Foto */}
                                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-[#8bc34a] transition-colors duration-300 bg-[#111] shadow-inner">
                                                        <img
                                                            src={miembro.foto}
                                                            alt={miembro.nombre}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            onError={(e) => {
                                                                // Imagen de respaldo por si no encuentra la foto real
                                                                e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200";
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Información del Miembro */}
                                                    <div className="flex flex-col gap-1 mt-2">
                                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#8bc34a] transition-colors duration-300">
                                                            {miembro.nombre}
                                                        </h3>
                                                        <p className="text-sm md:text-base text-gray-400 font-mono tracking-wider uppercase">
                                                            {miembro.cargo}
                                                        </p>
                                                    </div>

                                                    {/* Redes Sociales con iconos de Tabler */}
                                                    <div className="flex gap-4 mt-2">
                                                        {miembro.linkedin && (
                                                            <a
                                                                href={miembro.linkedin}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="p-2 rounded-lg bg-[#111] text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                                                                title="LinkedIn"
                                                            >
                                                                <IconBrandLinkedin size={20} />
                                                            </a>
                                                        )}
                                                        {miembro.github && (
                                                            <a
                                                                href={miembro.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="p-2 rounded-lg bg-[#111] text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
                                                                title="GitHub"
                                                            >
                                                                <IconBrandGithub size={20} />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </FadeInSection>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Directors;