import { useEffect, useState } from "react";
import FadeInSection from "../animations/FadeInSection";
import { IconMapPin, IconCalendarEvent, IconMicrophone2, IconTicket, IconTerminal2, IconChevronRight, IconMessageCode, IconShield, IconCloudLock, IconSearch, IconStarFilled, IconCode, IconLock, IconTent, IconBriefcase, IconExternalLink, IconMail } from "@tabler/icons-react";
import sponsorsData from "../../data/sponsors.js";
import c3confData from "../../data/c3conf.json";

const LUMA_URL = "https://luma.com/s7ljmrjx";
const SESSIONIZE_URL = "https://sessionize.com/c3-conf-fiee-uni-2026/";
const VILLAGE_MAILTO = `mailto:ccc@uni.edu.pe?subject=${encodeURIComponent("[C3Conf 2026] Propuesta de Village - Quiero ser village en el C3Conf")}&body=${encodeURIComponent("¡Hola equipo organizador del C3Conf 2026! 🚀🛡️\n\nQuiero ser village en el C3Conf y proponer un espacio interactivo, hacktivista y de aprendizaje para la comunidad tecnológica.\n\nDetalles de nuestra propuesta:\n• Nombre de la comunidad / iniciativa: \n• Temática principal del Village (Hardware, Lockpicking, Red Team, Crypto, IA, Forense, etc.): \n• Dinámica o actividades planeadas (Talleres, retos prácticos, exhibición, demos en vivo): \n• Responsable y datos de contacto (Nombre, Teléfono / Telegram): \n\n¡Quedamos atentos a su confirmación para coordinar los detalles!")}`;
const SPONSOR_MAILTO = `mailto:ccc@uni.edu.pe?subject=${encodeURIComponent("[C3Conf 2026] Oportunidad de Patrocinio - Quiero ser sponsor del C3Conf 2026 dame más información")}&body=${encodeURIComponent("¡Saludos cordiales al comité organizador del C3Conf 2026! 🤝⚡\n\nQuiero ser sponsor del C3Conf 2026 dame más información sobre los paquetes de patrocinio, alcances del evento y presencia de marca.\n\nInformación de nuestra organización:\n• Empresa / Organización: \n• Representante y cargo: \n• Correo corporativo y teléfono: \n• Categoría de interés (Platinum, Gold, Silver, Aliado Tecnológico): \n• Objetivos de la marca (Branding, reclutamiento de talento, demo de producto): \n\nEsperamos el dossier de patrocinio para agendar una breve reunión.")}`;

const C3Conf = () => {
    const [liveCode, setLiveCode] = useState("0x0000");
    const [scanActive, setScanActive] = useState(true);

    useEffect(() => {
        document.title = "C3Conf 2026 | Centro Cultural de Ciberseguridad";
        window.scrollTo(0, 0);

        // Generador de código hex dinámico para la interfaz
        const interval = setInterval(() => {
            const hex = Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0').toUpperCase();
            setLiveCode(`0x${hex}`);
            setScanActive(prev => !prev);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    const { hero, stats, about, tracks, timeline, speakers, testimonials } = c3confData;

    return (
        <div className="min-h-screen bg-[#020202] text-gray-300 font-sans selection:bg-[#8bc34a]/30 selection:text-white relative overflow-hidden">

            {/* Global Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-[#8bc34a]/[0.03] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/[0.03] blur-[180px] rounded-full"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_15%,transparent_100%)]"></div>
            </div>

            {/* 1. HERO SECTION */}
            <div className="relative w-full pt-48 pb-32 px-6 flex flex-col items-center justify-center z-10 min-h-screen border-b border-white/5">

                {/* Elementos Ciber Dinámicos (HUD) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center z-0">
                    {/* Widget Flotante Izquierdo */}
                    <div className="absolute top-[25%] left-[5%] md:left-[10%] lg:left-[15%] hidden sm:flex flex-col gap-1 items-start bg-black/60 backdrop-blur-md border border-[#8bc34a]/20 p-4 rounded-lg shadow-[0_0_20px_rgba(139,195,74,0.1)] animate-[bounce_6s_infinite]">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-[#8bc34a] animate-pulse"></span>
                            <span className="text-[#8bc34a] text-[10px] font-mono tracking-widest">NETWORK_UPLINK</span>
                        </div>
                        <span className="text-white text-xs font-mono font-bold tracking-wider">PACKETS: ENCRYPTED</span>
                        <div className="w-full h-1 bg-gray-800 mt-2 rounded overflow-hidden">
                            <div className="h-full bg-[#8bc34a] animate-[pulse_2s_infinite]" style={{ width: '85%' }}></div>
                        </div>
                    </div>

                    {/* Widget Flotante Derecho */}
                    <div className="absolute bottom-[35%] right-[5%] md:right-[10%] lg:right-[15%] hidden sm:flex flex-col gap-1 items-end bg-black/60 backdrop-blur-md border border-blue-500/20 p-4 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.1)] animate-[bounce_7s_infinite_reverse]">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-blue-400 text-[10px] font-mono tracking-widest">MEM_DUMP_ANALYSIS</span>
                            <IconSearch size={12} className={`text-blue-400 ${scanActive ? 'animate-spin' : ''}`} />
                        </div>
                        <span className="text-white text-sm font-mono font-bold tracking-wider">{liveCode}</span>
                        <span className="text-gray-500 text-[9px] font-mono">HASH VERIFIED</span>
                    </div>

                    {/* Líneas de escaneo y targeting */}
                    <div className="absolute left-[5%] md:left-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#8bc34a]/20 to-transparent"></div>
                    <div className="absolute right-[5%] md:right-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>

                    {/* Retícula central (Targeting HUD) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1600px] h-[70%] border border-white/5 rounded-[40px] opacity-30">
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#8bc34a]/50"></div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-blue-500/50"></div>
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white/20"></div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white/20"></div>
                    </div>
                </div>

                <div className="w-full px-4 md:px-12 flex flex-col items-center text-center relative z-10 pt-10">

                    {/* Status Badge */}
                    <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#8bc34a]/20 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(139,195,74,0.05)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8bc34a] animate-pulse shadow-[0_0_5px_rgba(139,195,74,0.8)]"></span>
                        <span className="text-[10px] font-mono tracking-widest text-[#8bc34a] opacity-80">REGISTRO ABIERTO // {hero.version}</span>
                    </div>

                    {/* Main Title & Subtitle Wrapper with Flanking Cyber Items */}
                    <div className="relative flex items-center justify-center w-full max-w-[1600px] mb-16 px-2 md:px-10">

                        {/* Flanking Item Left */}
                        <div className="hidden md:flex flex-col gap-3 absolute left-0 top-1/2 -translate-y-1/2 text-left opacity-60 border-l border-[#8bc34a]/20 pl-4">
                            <div className="flex items-center gap-2 text-[#8bc34a] font-mono text-[10px] tracking-widest">
                                <IconShield size={14} /> SYS_DEF: ON
                            </div>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-1 h-3 bg-[#8bc34a] animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}></div>
                                ))}
                            </div>
                            <span className="text-gray-500 font-mono text-[9px] tracking-widest">MONITORING</span>
                        </div>

                        <div className="flex flex-col items-center relative w-full">
                            {/* Main Title con Logo Oficial Grande */}
                            <h1 className="relative group flex justify-center w-full mb-6">
                                <span className="sr-only">C3Conf 2026 Perú - {hero.subtitle}</span>
                                <img 
                                    src="/C3Conf/Logo-Principal-C3Conf.png" 
                                    alt="C3Conf 2026 Perú" 
                                    className="w-full max-w-[650px] md:max-w-[900px] lg:max-w-[1150px] h-auto object-contain drop-shadow-[0_0_50px_rgba(139,195,74,0.4)] hover:drop-shadow-[0_0_75px_rgba(139,195,74,0.65)] hover:scale-[1.02] transition-all duration-500 mix-blend-screen" 
                                />
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base md:text-xl text-gray-400 max-w-2xl font-light relative z-10 px-8 text-center leading-relaxed">
                                {hero.subtitle}
                            </p>
                        </div>

                        {/* Flanking Item Right */}
                        <div className="hidden md:flex flex-col gap-3 absolute right-0 top-1/2 -translate-y-1/2 text-right opacity-60 items-end border-r border-blue-500/20 pr-4">
                            <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px] tracking-widest">
                                KERNEL: SECURE <IconCode size={14} />
                            </div>
                            <div className="text-white font-mono text-[10px] border border-white/5 bg-white/5 px-2 py-0.5 rounded">
                                {liveCode}
                            </div>
                            <span className="text-gray-500 font-mono text-[9px] tracking-widest">THREAD_ID</span>
                        </div>

                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-8 mb-16 text-sm font-mono tracking-widest text-gray-300 bg-white/5 px-8 py-4 rounded-xl backdrop-blur-sm border border-white/10">
                        <div className="flex items-center gap-3">
                            <IconCalendarEvent className="text-[#8bc34a]" size={20} />
                            {hero.date}
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                        <div className="flex items-center gap-3">
                            <IconMapPin className="text-blue-400" size={20} />
                            {hero.location}
                        </div>
                    </div>

                    {/* Botón Principal de Inscripción */}
                    <div className="w-full flex justify-center mb-10">
                        <a
                            href={LUMA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xl px-10 py-5 bg-white text-black font-extrabold text-base sm:text-xl rounded-2xl hover:bg-[#8bc34a] hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(139,195,74,0.6)] group border border-white"
                        >
                            <IconTicket size={28} className="group-hover:rotate-12 transition-transform text-black" />
                            <span>Se parte del C3Conf Inscribete aqui</span>
                        </a>
                    </div>

                    {/* Los 3 "CALL FOR" en Grande */}
                    <div className="w-full max-w-5xl">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#8bc34a] animate-pulse"></span>
                            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
                                CONVOCATORIAS ABIERTAS // CALL FOR PARTICIPATION
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                            {/* 1. CALL FOR SPEAKERS */}
                            <a
                                href={SESSIONIZE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 md:p-8 bg-gradient-to-b from-[#111] to-[#080808] border border-gray-800 hover:border-[#8bc34a] rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,195,74,0.25)] hover:-translate-y-1.5 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-[#8bc34a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#8bc34a] mb-4 group-hover:scale-110 group-hover:bg-[#8bc34a]/10 transition-all duration-300">
                                    <IconMicrophone2 size={32} />
                                </div>
                                <span className="text-[11px] font-mono text-[#8bc34a] tracking-widest uppercase mb-1">CONFERENCIAS</span>
                                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#8bc34a] transition-colors mb-2">
                                    CALL FOR SPEAKERS
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                                    Postula tu investigación o charla técnica a través de Sessionize.
                                </p>
                                <div className="mt-auto w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#8bc34a] group-hover:border-[#8bc34a] group-hover:text-black text-white text-xs font-mono font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                                    <span>POSTULAR EN SESSIONIZE</span>
                                    <IconExternalLink size={16} />
                                </div>
                            </a>

                            {/* 2. CALL FOR VILLAGES */}
                            <a
                                href={VILLAGE_MAILTO}
                                className="group p-6 md:p-8 bg-gradient-to-b from-[#111] to-[#080808] border border-gray-800 hover:border-yellow-500 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(234,179,8,0.25)] hover:-translate-y-1.5 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-yellow-400 mb-4 group-hover:scale-110 group-hover:bg-yellow-500/10 transition-all duration-300">
                                    <IconTent size={32} />
                                </div>
                                <span className="text-[11px] font-mono text-yellow-400 tracking-widest uppercase mb-1">COMUNIDADES</span>
                                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors mb-2">
                                    CALL FOR VILLAGES
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                                    Monta tu espacio interactivo, retos prácticos y workshops comunitarios.
                                </p>
                                <div className="mt-auto w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-black text-white text-xs font-mono font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                                    <span>QUIERO SER VILLAGE</span>
                                    <IconMail size={16} />
                                </div>
                            </a>

                            {/* 3. CALL FOR SPONSORS */}
                            <a
                                href={SPONSOR_MAILTO}
                                className="group p-6 md:p-8 bg-gradient-to-b from-[#111] to-[#080808] border border-gray-800 hover:border-blue-500 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:-translate-y-1.5 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                                    <IconBriefcase size={32} />
                                </div>
                                <span className="text-[11px] font-mono text-blue-400 tracking-widest uppercase mb-1">PATROCINIOS</span>
                                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors mb-2">
                                    CALL FOR SPONSORS
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                                    Impulsa el evento tecnológico del año y posiciona tu marca ante la industria.
                                </p>
                                <div className="mt-auto w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-black text-white text-xs font-mono font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                                    <span>QUIERO SER SPONSOR</span>
                                    <IconMail size={16} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. STATS (Dashboard Bento Box) */}
            <div className="w-full relative z-10 px-6 -mt-16">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl backdrop-blur-md shadow-2xl flex flex-col items-center text-center group hover:border-[#8bc34a]/30 transition-colors">
                            <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#8bc34a] transition-colors">{stat.value}</h3>
                            <p className="text-xs font-mono text-gray-500 tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-32 w-full"></div>

            {/* 3. ABOUT & TRACKS */}
            <FadeInSection>
                <div className="w-full relative z-10 px-6">
                    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">
                        {/* Mascot Terminal / SYS.INFO */}
                        <div className="lg:w-1/3 flex flex-col justify-center">
                            <div className="text-[#8bc34a] font-mono text-xs tracking-widest mb-4 flex items-center gap-2">
                                <IconTerminal2 size={16} /> SYS.INFO
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                {about.title}
                            </h2>

                            <div className="rounded-lg overflow-hidden border border-gray-800 bg-black/80 font-mono shadow-[0_0_20px_rgba(0,0,0,0.8)] relative group mb-6">
                                {/* Top bar */}
                                <div className="bg-[#111] px-4 py-2 border-b border-gray-800 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                    </div>
                                    <span className="mx-auto text-xs text-gray-500 font-bold">bash - c3conf_daemon.sh</span>
                                </div>
                                {/* Content */}
                                <div className="p-5 text-sm md:text-base text-gray-300 leading-relaxed relative">
                                    {/* Mascot Image Watermark or Side Image */}
                                    <img src="/Mascota/M_BanderaCCC.png" alt="Mascota C3" className="w-24 h-24 absolute right-4 bottom-4 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_10px_rgba(139,195,74,0.5)] z-0" />

                                    <div className="relative z-10">
                                        <div className="flex gap-2 mb-4">
                                            <span className="text-[#8bc34a] font-bold">root@c3:~#</span>
                                            <span className="text-white">cat vision.txt</span>
                                        </div>
                                        <p className="mb-4">
                                            {about.paragraphs ? about.paragraphs[0] : about.description}
                                        </p>
                                        <div className="flex gap-2 mb-2">
                                            <span className="text-[#8bc34a] font-bold">root@c3:~#</span>
                                            <span className="text-white animate-pulse">_</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tracks Grid */}
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tracks.map((track, idx) => {
                                const icons = {
                                    "red-team": <IconCode className="text-red-400 mb-4" size={32} stroke={1.5} />,
                                    "blue-team": <IconShield className="text-blue-400 mb-4" size={32} stroke={1.5} />,
                                    "cloud-sec": <IconCloudLock className="text-purple-400 mb-4" size={32} stroke={1.5} />,
                                    "osint": <IconSearch className="text-green-400 mb-4" size={32} stroke={1.5} />
                                };
                                return (
                                    <div key={idx} className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/5 p-8 rounded-xl hover:border-white/15 transition-all group">
                                        {icons[track.id]}
                                        <h3 className="text-xl font-semibold text-white mb-3">{track.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{track.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-40 w-full"></div>

            {/* SEDE OFICIAL */}
            <FadeInSection>
                <div className="w-full relative z-10 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-[#0a0a0a] to-[#020202] border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none"></div>
                        
                        <div className="md:w-1/2 relative z-10">
                            <div className="text-blue-500 font-mono text-xs tracking-widest mb-4 flex items-center gap-2">
                                <IconMapPin size={16} /> LOCATION_DATA
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Sede <span className="text-blue-500">Oficial</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                El C3Conf 2026 se llevará a cabo en las instalaciones de INICTEL-UNI, el principal referente de investigación y capacitación en telecomunicaciones.
                            </p>
                            <div className="bg-black/50 border border-white/5 rounded-xl p-6 font-mono text-sm inline-block">
                                <div className="flex items-center gap-3 mb-2">
                                    <IconMapPin className="text-[#8bc34a]" size={18} />
                                    <span className="text-white font-bold">INICTEL UNI</span>
                                </div>
                                <div className="text-gray-500 ml-7">
                                    Av. San Luis 1771 <br />
                                    San Borja 15021, Lima, Perú
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 flex justify-center relative z-10">
                            <div className="relative group p-4 md:p-6 bg-white rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 w-full max-w-xl flex justify-center items-center">
                                <img src="/C3Conf/INICTEL-UNI.png" alt="Sede INICTEL UNI" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-40 w-full"></div>

            {/* 4. TIMELINE */}
            <FadeInSection>
                <div className="w-full relative z-10 px-6 py-20 bg-[#050505] border-y border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white tracking-wide">CRONOGRAMA DE OPERACIONES</h2>
                        </div>

                        <div className="flex justify-center py-10">
                            <span className="text-[#8bc34a] font-mono text-xl animate-pulse">buscando ...</span>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-40 w-full"></div>

            {/* 5. SPEAKERS */}
            <FadeInSection>
                <div className="w-full relative z-10 px-6">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Intel & Speakers</h2>
                                <p className="text-gray-400 font-light max-w-lg">Expertos de clase mundial compartiendo investigaciones inéditas, zero-days y metodologías tácticas.</p>
                            </div>
                            <a
                                href={SESSIONIZE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8bc34a]/10 border border-[#8bc34a] text-[#8bc34a] hover:bg-[#8bc34a] hover:text-black font-mono font-bold text-xs rounded transition-all shadow-[0_0_15px_rgba(139,195,74,0.2)]"
                            >
                                <IconMicrophone2 size={16} /> [ POSTULAR COMO SPEAKER ]
                            </a>
                        </div>

                        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#0c0c0c] to-[#040404] border border-gray-800 text-center max-w-3xl mx-auto flex flex-col items-center">
                            <span className="text-[#8bc34a] font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#8bc34a] animate-pulse"></span> CONVOCATORIA DE PONENTES ABIERTA // SESSIONIZE
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-3">¿Deseas presentar tu ponencia en C3Conf 2026?</h3>
                            <p className="text-gray-400 text-sm mb-6 max-w-xl leading-relaxed">
                                Si estás investigando en ofensiva digital, defensa, IA para ciberseguridad, cloud o reversing, postula a través de nuestra plataforma oficial de Call for Speakers en Sessionize.
                            </p>
                            <a
                                href={SESSIONIZE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 bg-white text-black font-semibold rounded hover:bg-[#8bc34a] hover:text-black transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            >
                                <IconExternalLink size={18} /> ENVIAR PROPUESTA EN SESSIONIZE
                            </a>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-40 w-full"></div>

            {/* 6. TESTIMONIOS */}
            <FadeInSection>
                <div className="w-full relative z-10 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white">RESEÑAS DEL SISTEMA</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((testimonio) => (
                                <div key={testimonio.id} className="rounded-lg overflow-hidden border border-gray-800 bg-black/80 font-mono shadow-[0_0_30px_rgba(0,0,0,0.6)] hover:border-[#8bc34a]/50 transition-colors">
                                    <div className="bg-[#111] px-4 py-2 border-b border-gray-800 flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                        </div>
                                        <span className="ml-4 text-xs text-gray-500">ssh {testimonio.user.toLowerCase().replace(" ", "_")}@c3conf.local</span>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-start gap-4 mb-6">
                                            <img src={testimonio.avatar} alt={testimonio.user} className="w-12 h-12 rounded-full object-cover border border-[#8bc34a]/30 grayscale" />
                                            <div>
                                                <h4 className="text-[#8bc34a] font-bold">{testimonio.user}</h4>
                                                <p className="text-gray-500 text-xs">ROLE: {testimonio.role}</p>
                                            </div>
                                            <div className="ml-auto flex">
                                                {[...Array(testimonio.rating)].map((_, i) => (
                                                    <IconStarFilled key={i} className="text-[#8bc34a]/60" size={14} />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="text-gray-300 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-[#8bc34a]/30">
                                            <span className="text-[#8bc34a]">&gt;</span> "{testimonio.text}"
                                        </div>
                                        <div className="mt-4 text-right text-gray-600 text-xs">
                                            [ CONEXIÓN TERMINADA ]
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-32 w-full"></div>

            {/* 7. SPONSORS */}
            <FadeInSection>
                <div className="w-full bg-[#050505] py-20 px-6 border-y border-white/5 relative z-10">
                    <div className="max-w-[1400px] mx-auto text-center">
                        <p className="text-[#8bc34a] text-sm font-mono tracking-widest mb-10 flex items-center justify-center gap-2">
                            <span className="text-gray-500">&gt;</span> EL C3CONF 2026 LLEGA GRACIAS A NUESTROS SPONSORS OFICIALES
                        </p>

                        <div className="flex flex-wrap justify-center gap-16 md:gap-28 lg:gap-32 items-center opacity-70 hover:opacity-100 transition-opacity duration-500 mt-8 mb-12">
                            <img src="/C3Conf/Sponsor-SecureSoft.png" alt="SecureSoft" className="h-16 md:h-24 lg:h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300" onError={(e) => e.target.style.display = 'none'} />
                            <img src="/C3Conf/Sponsor-Fortinet.png" alt="Fortinet" className="h-12 md:h-20 lg:h-28 object-contain grayscale hover:grayscale-0 transition-all duration-300" onError={(e) => e.target.style.display = 'none'} />
                            <img src="/C3Conf/Sponsor-Radware.png" alt="Radware" className="h-12 md:h-20 lg:h-28 object-contain grayscale hover:grayscale-0 transition-all duration-300" onError={(e) => e.target.style.display = 'none'} />
                        </div>

                        {/* Call for Sponsors CTA */}
                        <div className="pt-8 border-t border-white/5 max-w-2xl mx-auto flex flex-col items-center">
                            <p className="text-gray-400 text-sm mb-4 font-mono">¿Quieres posicionar tu organización ante los futuros líderes en ciberseguridad?</p>
                            <a
                                href={SPONSOR_MAILTO}
                                className="px-8 py-3.5 bg-[#111] border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-black font-mono font-bold text-sm transition-all rounded shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center gap-2"
                            >
                                <IconBriefcase size={18} /> [ SÉ SPONSOR // QUIERO SER SPONSOR DEL C3CONF ]
                            </a>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-24 w-full"></div>

            {/* 8. HUB DE ACCESOS Y CONVOCATORIAS */}
            <FadeInSection>
                <div className="w-full max-w-6xl px-6 py-20 mx-auto relative z-10 mb-20">
                    <div className="bg-gradient-to-br from-[#0a0a0a] to-[#020202] border border-white/10 p-8 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,195,74,0.1)_0%,transparent_70%)] pointer-events-none"></div>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8bc34a]/30 bg-black/50 text-[#8bc34a] font-mono text-xs tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#8bc34a] animate-pulse"></span> CONVOCATORIAS ABIERTAS // 2026
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Participa en el C3Conf 2026
                        </h2>
                        
                        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Forma parte del evento de ciberseguridad más trascendente del año. Elige tu rol en el ecosistema y asegura tu participación:
                        </p>

                        {/* Bento Grid con los 4 Accesos */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
                            
                            {/* Card 1: Asistente / Tickets Luma */}
                            <a
                                href={LUMA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 rounded-2xl bg-[#111]/80 border border-gray-800 hover:border-[#8bc34a] transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,195,74,0.15)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-[#8bc34a] group-hover:scale-110 transition-transform">
                                            <IconTicket size={24} />
                                        </div>
                                        <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2.5 py-1 rounded">LUMA TICKET</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#8bc34a] transition-colors">Inscripción General</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">Reserva tu entrada oficial para asistir al C3Conf en INICTEL-UNI.</p>
                                </div>
                                <div className="mt-5 flex items-center gap-2 text-xs font-mono text-[#8bc34a] font-bold">
                                    REGISTRARSE EN LUMA <IconExternalLink size={14} />
                                </div>
                            </a>

                            {/* Card 2: Call for Speakers Sessionize */}
                            <a
                                href={SESSIONIZE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 rounded-2xl bg-[#111]/80 border border-gray-800 hover:border-[#8bc34a] transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,195,74,0.15)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-[#8bc34a] group-hover:scale-110 transition-transform">
                                            <IconMicrophone2 size={24} />
                                        </div>
                                        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">SESSIONIZE</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#8bc34a] transition-colors">Call for Speakers</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">Postula tu ponencia, investigación o demostración táctica de ciberseguridad.</p>
                                </div>
                                <div className="mt-5 flex items-center gap-2 text-xs font-mono text-[#8bc34a] font-bold">
                                    POSTULAR EN SESSIONIZE <IconExternalLink size={14} />
                                </div>
                            </a>

                            {/* Card 3: Call for Villages Mailto */}
                            <a
                                href={VILLAGE_MAILTO}
                                className="group p-6 rounded-2xl bg-[#111]/80 border border-gray-800 hover:border-yellow-500/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-yellow-400 group-hover:scale-110 transition-transform">
                                            <IconTent size={24} />
                                        </div>
                                        <span className="text-xs font-mono text-yellow-400 bg-yellow-500/10 px-2.5 py-1 rounded">COMUNIDAD</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Call for Villages</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">¿Representas a una comunidad o laboratorio? Monta un Village con retos y actividades.</p>
                                </div>
                                <div className="mt-5 flex items-center gap-2 text-xs font-mono text-yellow-400 font-bold">
                                    QUIERO SER VILLAGE (MAILTO) <IconMail size={14} />
                                </div>
                            </a>

                            {/* Card 4: Call for Sponsors Mailto */}
                            <a
                                href={SPONSOR_MAILTO}
                                className="group p-6 rounded-2xl bg-[#111]/80 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                                            <IconBriefcase size={24} />
                                        </div>
                                        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">EMPRESAS</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Call for Sponsors</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">Auspicia el C3Conf 2026. Conecta con talento calificado y lidera la industria.</p>
                                </div>
                                <div className="mt-5 flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
                                    SOLICITAR DOSSIER DE SPONSOR <IconMail size={14} />
                                </div>
                            </a>

                        </div>

                        {/* Canal de correo general */}
                        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
                            <div>
                                CONTACTO OFICIAL: <a href="mailto:ccc@uni.edu.pe" className="text-gray-300 hover:text-[#8bc34a] underline">ccc@uni.edu.pe</a>
                            </div>
                            <div>
                                ENCRYPTED_CHANNEL // ACTIVE
                            </div>
                        </div>

                    </div>
                </div>
            </FadeInSection>

        </div>
    );
};

export default C3Conf;
