import { useEffect, useRef } from "react";
import FadeInSection from "../animations/FadeInSection";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { IconFlag, IconTerminal2, IconCalendarEvent, IconUsers, IconCertificate } from "@tabler/icons-react";

const sponsors = [
    { name: "CWL", logo: "/C3TF/Sponsor-CWL.png" },
    { name: "Altered Security", logo: "/C3TF/Sponsor-AlteredSecurity.png" },
    { name: "Spartan Cybersecurity", logo: "/C3TF/Sponsor-SpartanCybersecurity.png" },
    { name: "Hackviser", logo: "/C3TF/Sponsor-Hackviser.png" }
];

const categories = [
    { name: "Web Exploitation", desc: "Vulnerabilidades web, inyecciones, XSS." },
    { name: "Criptografía", desc: "Cifrados clásicos, RSA, matemáticas." },
    { name: "Cloud Security", desc: "AWS, Azure, configuraciones erróneas." },
    { name: "Mobile", desc: "Ingeniería inversa de APKs e iOS." },
    { name: "Forense", desc: "Análisis de memoria, red y esteganografía." },
    { name: "Reversing", desc: "Desensamblado de binarios y malware." },
    { name: "Pwn", desc: "Corrupción de memoria y explotación." },
    { name: "OSINT", desc: "Inteligencia de fuentes abiertas." }
];

const C3TF = () => {
    useEffect(() => {
        document.title = "C3TF 2026 | Centro Cultural de Ciberseguridad";
    }, []);

    return (
        <div className="min-h-screen bg-[#030a05] flex flex-col items-center pt-24 pb-20 px-6 lg:px-20 gap-20 font-mono relative overflow-hidden">
            
            {/* Overlays para garantizar lectura de texto */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030a05]/40 via-[#030a05]/80 to-[#030a05] z-0 pointer-events-none"></div>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(139,195,74,1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,195,74,1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            

            
            {/* Header Section */}
            <FadeInSection>
                <div className="w-full max-w-7xl mt-10 relative z-10 text-center flex flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#8bc34a]/10 border border-[#8bc34a]/40 rounded-full text-[#8bc34a] mb-4 shadow-[0_0_15px_rgba(139,195,74,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-[#8bc34a]"></span>
                        <span className="text-sm font-bold tracking-widest uppercase">Competencia Oficial 2026</span>
                    </div>
                    
                    <div className="flex justify-center w-full mb-2">
                        <img 
                            src="/C3TF/Logo-Principal-C3TF.png" 
                            alt="Logo Oficial C3TF" 
                            className="w-48 md:w-64 lg:w-80 object-contain drop-shadow-[0_0_20px_rgba(139,195,74,0.5)]" 
                        />
                    </div>
                    
                    <Text size="xl" className="text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
                        <span className="text-[#8bc34a] font-bold">$</span> /ejecutar ctf.sh --nivel=experto <br/>
                        Capture The Flag. El desafío técnico definitivo donde equipos se enfrentan a escenarios de hacking reales para demostrar su dominio en seguridad informática.
                    </Text>

                    {/* Quick Info Badges */}
                    <div className="flex flex-col md:flex-row gap-6 mt-10 w-full justify-center">
                        <div className="flex items-center gap-4 bg-[#08110a]/80 backdrop-blur-md border border-green-900/50 hover:border-[#8bc34a] transition-colors p-5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.6)]">
                            <IconCalendarEvent className="text-[#8bc34a]" size={36} />
                            <div className="text-left">
                                <p className="text-xs text-green-600 uppercase font-bold tracking-wider mb-1">Fecha de Combate</p>
                                <p className="text-white font-bold">21 y 22 Nov, 2026</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-[#08110a]/80 backdrop-blur-md border border-green-900/50 hover:border-[#8bc34a] transition-colors p-5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.6)]">
                            <IconUsers className="text-[#8bc34a]" size={36} />
                            <div className="text-left">
                                <p className="text-xs text-green-600 uppercase font-bold tracking-wider mb-1">Formación</p>
                                <p className="text-white font-bold">Equipos de 3 integrantes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* Categorías (Hacking Vectors) */}
            <FadeInSection>
                <div className="w-full max-w-[1400px] relative z-10 flex flex-col gap-10">
                    <div className="text-center">
                        <Heading level={2} size={4} className="text-white font-bold">
                            Vectores de <span className="text-[#8bc34a]">Ataque</span>
                        </Heading>
                        <Text className="text-gray-400 mt-2 max-w-2xl mx-auto">
                            Domina múltiples disciplinas. Las banderas están escondidas en sistemas vulnerables de diversas categorías.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-[#060e08] border border-green-900/40 hover:border-[#8bc34a]/50 p-6 rounded-2xl group transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,195,74,0.15)] hover:-translate-y-1">
                                <div className="text-[#8bc34a] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                    <IconTerminal2 size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{cat.name}</h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>

            {/* Premios */}
            <FadeInSection>
                <div className="w-full max-w-7xl bg-gradient-to-br from-[#08110a] to-[#050b07] border border-green-900/40 rounded-3xl p-8 md:p-12 relative z-10 shadow-[0_0_40px_rgba(139,195,74,0.05)] overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8bc34a]/10 rounded-full blur-[80px] pointer-events-none"></div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#8bc34a]/20 blur-2xl rounded-full"></div>
                                <IconCertificate className="relative z-10 text-[#8bc34a] drop-shadow-[0_0_15px_rgba(139,195,74,0.6)]" size={140} stroke={1.2} />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-6">
                            <Heading level={3} size={4} className="text-white font-bold">
                                Glória y <span className="text-[#8bc34a]">Recompensas</span>
                            </Heading>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Demuestra tu valía en el campo de batalla digital. Contamos con <strong className="text-white">muchos certificados internacionales</strong> como premios principales para los mejores equipos, además del reconocimiento en la comunidad hacker, acceso a oportunidades laborales únicas y botines exclusivos cortesía de nuestros aliados.
                            </p>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 bg-green-900/30 border border-green-800 text-green-400 text-sm rounded-lg font-bold">Certificaciones</span>
                                <span className="px-4 py-2 bg-[#8bc34a]/20 border border-green-700 text-[#8bc34a] text-sm rounded-lg font-bold">Swag Exclusivo</span>
                                <span className="px-4 py-2 bg-green-900/30 border border-green-800 text-green-400 text-sm rounded-lg font-bold">Reconocimiento</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* Sponsors Section */}
            <FadeInSection>
                <div className="w-full max-w-7xl flex flex-col items-center gap-10 relative z-10">
                    <div className="text-center">
                        <Heading level={2} size={4} className="text-white font-bold">
                            Sponsors y Aliados
                        </Heading>
                        <Text className="text-gray-400 mt-2 max-w-2xl mx-auto">
                            Agradecemos a las organizaciones que hacen posible este evento e impulsan el desarrollo de la ciberseguridad.
                        </Text>
                    </div>
                    
                    <div className="w-full bg-[#050b07]/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-10 flex flex-wrap justify-center items-center gap-12 md:gap-20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,195,74,0.05)_0%,transparent_70%)] pointer-events-none"></div>
                        
                        {sponsors.map((sponsor, index) => (
                            <div key={index} className="relative group p-4 flex flex-col items-center gap-4">
                                <div className="absolute inset-0 bg-[#8bc34a]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img 
                                    src={sponsor.logo} 
                                    alt={`Logo de ${sponsor.name}`} 
                                    className="relative z-10 h-16 md:h-20 lg:h-24 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(139,195,74,0.3)]"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Placeholder */}
                                <div className="hidden relative z-10 h-16 md:h-20 lg:h-24 w-40 items-center justify-center border-2 border-dashed border-gray-700 text-gray-500 text-xs text-center rounded-lg group-hover:border-green-800 group-hover:text-[#8bc34a] transition-colors">
                                    [ {sponsor.name} ]
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>

            {/* CTA */}
            <FadeInSection>
                <div className="w-full max-w-3xl text-center relative z-10 mt-10">
                    <IconFlag className="text-[#8bc34a] mx-auto mb-6" size={56} />
                    <Heading level={2} size={3} className="text-white font-bold mb-6">
                        Inicia la Infiltración
                    </Heading>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Arma tu escuadrón, afila tus scripts y prepárate para el C3TF. El sistema está esperando ser vulnerado.
                    </p>
                    <button className="px-12 py-5 bg-transparent border-2 border-[#8bc34a] text-[#8bc34a] font-bold hover:bg-[#8bc34a] hover:text-black transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(139,195,74,0.3)] hover:shadow-[0_0_40px_rgba(139,195,74,0.6)] hover:-translate-y-1 text-lg">
                        [ ROOT ACESS: PRÓXIMAMENTE ]
                    </button>
                </div>
            </FadeInSection>

        </div>
    );
};

export default C3TF;

