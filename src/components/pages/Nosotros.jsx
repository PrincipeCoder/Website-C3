import { useState, useEffect } from "react";
import FadeInSection from "../animations/FadeInSection";
import SimpleSection from "../templates/SimpleSection";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { IconChevronLeft, IconChevronRight, IconTarget, IconAward, IconTerminal2 } from "@tabler/icons-react";
import logrosData from "../../data/logros.json";

const Nosotros = () => {
    useEffect(() => {
        document.title = "Nosotros | C3";
    }, []);

    const { institucionales: logrosC3, miembros: logrosMiembros } = logrosData;

    const [indexC3, setIndexC3] = useState(0);
    const [indexMiembros, setIndexMiembros] = useState(0);

    const nextC3 = () => setIndexC3((prev) => (prev === logrosC3.length - 1 ? 0 : prev + 1));
    const prevC3 = () => setIndexC3((prev) => (prev === 0 ? logrosC3.length - 1 : prev - 1));

    const nextMiembros = () => setIndexMiembros((prev) => (prev === logrosMiembros.length - 1 ? 0 : prev + 1));
    const prevMiembros = () => setIndexMiembros((prev) => (prev === 0 ? logrosMiembros.length - 1 : prev - 1));

    return (
        <div className="flex flex-col pb-20 w-full overflow-hidden bg-black min-h-screen pt-24 font-mono relative">
            
            {/* Background Details */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.05)_0%,transparent_50%)]"></div>

            {/* SECCIÓN 1: ¿QUÉ ES EL C CÚBICO? */}
            <FadeInSection>
                <section className="flex flex-col justify-center gap-8 px-4 md:px-20 mt-10 relative z-10 bg-transparent">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <IconTerminal2 className="text-[#8bc34a]" size={40} />
                        <Heading level={1} size={5} className="text-center text-3xl md:text-5xl text-white font-bold drop-shadow-[0_0_10px_rgba(139,195,74,0.3)]">
                            ¿Qué es el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-green-600">C Cúbico</span>?
                        </Heading>
                    </div>
                    
                    <div className="w-full max-w-4xl m-auto bg-[#0a0a0a] border border-[#8bc34a]/30 p-6 md:p-10 rounded-xl shadow-[0_0_30px_rgba(139,195,74,0.1)] relative overflow-hidden group hover:border-[#8bc34a]/60 transition-all duration-500">
                        {/* Decorative Top Bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8bc34a] to-transparent opacity-50"></div>
                        
                        <div className="flex items-center gap-2 mb-4 text-[#8bc34a] text-sm">
                            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                            <span className="ml-2 text-gray-500">bash - /etc/c3/about.sh</span>
                        </div>
                        
                        <Text className="text-left text-base md:text-xl text-gray-300 leading-relaxed font-mono">
                            <span className="text-[#8bc34a]">$</span> cat about.txt <br/><br/>
                            El <strong className="text-white">Centro Cultural de Ciberseguridad (CCC)</strong> es una comunidad activa y comprometida con la difusión de la cultura digital, la formación técnica de alto rendimiento y el desarrollo del pensamiento crítico frente a los desafíos del mundo tecnológico actual. Nacimos como un espacio donde el conocimiento, la ética y la innovación convergen.
                        </Text>
                    </div>
                </section>
            </FadeInSection>

            {/* SECCIÓN 2: NUESTRO OBJETIVO */}
            <FadeInSection>
                <section className="w-full flex justify-center px-4 md:px-20 py-16 relative z-10">
                    <div className="w-full max-w-5xl bg-[#0d0d0d] border border-cyan-500/20 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(34,211,238,0.05)] flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500">
                        {/* Grid Background Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

                        <div className="relative bg-black p-6 rounded-xl border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500">
                            <IconTarget size={60} className="text-cyan-400" />
                        </div>
                        
                        <div className="flex flex-col gap-4 text-center md:text-left relative z-10">
                            <Heading level={2} size={4} className="text-3xl md:text-4xl text-cyan-400 font-bold tracking-wide">
                                &gt; Objetivo_Principal
                            </Heading>
                            <Text className="text-base md:text-xl text-gray-400 leading-relaxed">
                                Formar profesionales y entusiastas de la ciberseguridad con un alto rigor ético y técnico. Buscamos democratizar el acceso a la educación en seguridad de la información y ser el principal nexo entre el talento académico de la universidad y las necesidades de protección del sector corporativo y nacional.
                            </Text>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* SECCIÓN 3: NUESTROS LOGROS (C3) */}
            <FadeInSection>
                <div className="px-4 md:px-20 py-16 bg-[#050505] relative z-10 border-t border-b border-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-12 justify-center">
                            <IconAward className="text-[#8bc34a]" size={40} />
                            <Heading level={2} size={4} className="text-white text-3xl md:text-4xl font-bold uppercase tracking-widest text-center">
                                Logros <span className="text-[#8bc34a]">Institucionales</span>
                            </Heading>
                        </div>

                        <div className="relative flex flex-col md:flex-row items-stretch gap-0 bg-[#0a0a0a] rounded-xl border border-[#8bc34a]/30 shadow-[0_0_30px_rgba(139,195,74,0.1)] overflow-hidden">
                            {/* Lado Izquierdo: Texto */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 order-2 md:order-1 relative z-10">
                                <div className="text-[#8bc34a] text-sm mb-4">STATUS: <span className="text-white">ACHIEVED</span></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    <span className="text-[#8bc34a]">&gt; </span>{logrosC3[indexC3].titulo}
                                </h3>
                                <Text className="text-gray-400 text-lg leading-relaxed mb-8 whitespace-pre-line">
                                    {logrosC3[indexC3].descripcion}
                                </Text>
                                
                                {/* Controles */}
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-800">
                                    <div className="flex gap-2">
                                        {logrosC3.map((_, i) => (
                                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === indexC3 ? 'bg-[#8bc34a] w-8' : 'bg-gray-700 w-3'}`} />
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={prevC3} className="p-3 rounded-lg bg-black border border-gray-800 hover:border-[#8bc34a] text-gray-400 hover:text-[#8bc34a] transition-all"><IconChevronLeft size={24} /></button>
                                        <button onClick={nextC3} className="p-3 rounded-lg bg-black border border-gray-800 hover:border-[#8bc34a] text-gray-400 hover:text-[#8bc34a] transition-all"><IconChevronRight size={24} /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Lado Derecho: Imagen */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[400px] order-1 md:order-2 relative overflow-hidden bg-black/50">
                                <div className="absolute inset-0 bg-[#8bc34a]/10 mix-blend-overlay z-10 pointer-events-none"></div>
                                <img
                                    key={indexC3} // force re-render for css transition
                                    src={logrosC3[indexC3].imagen}
                                    alt="Logro C3"
                                    className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-in-out]"
                                />
                                {/* Cyber UI overlays */}
                                <div className="absolute top-4 right-4 border border-[#8bc34a]/50 text-[#8bc34a] text-xs px-2 py-1 bg-black/70 backdrop-blur-sm z-20">DATA.FILE_{indexC3 + 1}</div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#8bc34a]/50 z-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* SECCIÓN 4: LOGROS DE MIEMBROS */}
            <FadeInSection>
                <div className="px-4 md:px-20 py-16 bg-black relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-12 justify-center">
                            <IconAward className="text-cyan-500" size={40} />
                            <Heading level={2} size={4} className="text-white text-3xl md:text-4xl font-bold uppercase tracking-widest text-center">
                                Logros de <span className="text-cyan-500">Miembros</span>
                            </Heading>
                        </div>

                        <div className="relative flex flex-col md:flex-row-reverse items-stretch gap-0 bg-[#0a0a0a] rounded-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.1)] overflow-hidden">
                            {/* Lado Derecho: Texto */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 relative z-10">
                                <div className="text-cyan-500 text-sm mb-4">STATUS: <span className="text-white">VERIFIED</span></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    <span className="text-cyan-500">&gt; </span>{logrosMiembros[indexMiembros].titulo}
                                </h3>
                                <Text className="text-gray-400 text-lg leading-relaxed mb-8 whitespace-pre-line">
                                    {logrosMiembros[indexMiembros].descripcion}
                                </Text>
                                
                                {/* Controles */}
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-800">
                                    <div className="flex gap-2">
                                        {logrosMiembros.map((_, i) => (
                                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === indexMiembros ? 'bg-cyan-500 w-8' : 'bg-gray-700 w-3'}`} />
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={prevMiembros} className="p-3 rounded-lg bg-black border border-gray-800 hover:border-cyan-500 text-gray-400 hover:text-cyan-500 transition-all"><IconChevronLeft size={24} /></button>
                                        <button onClick={nextMiembros} className="p-3 rounded-lg bg-black border border-gray-800 hover:border-cyan-500 text-gray-400 hover:text-cyan-500 transition-all"><IconChevronRight size={24} /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Lado Izquierdo: Imagen */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[400px] relative overflow-hidden bg-black/50">
                                <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
                                <img
                                    key={indexMiembros} // force re-render for css transition
                                    src={logrosMiembros[indexMiembros].imagen}
                                    alt="Logro Miembro"
                                    className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-in-out]"
                                />
                                {/* Cyber UI overlays */}
                                <div className="absolute top-4 left-4 border border-cyan-500/50 text-cyan-500 text-xs px-2 py-1 bg-black/70 backdrop-blur-sm z-20">MEMBER.REC_{indexMiembros + 1}</div>
                                <div className="absolute bottom-0 right-0 w-full h-1 bg-cyan-500/50 z-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
};

export default Nosotros;