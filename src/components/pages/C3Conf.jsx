import { useEffect, useState } from "react";
import FadeInSection from "../animations/FadeInSection";
import { IconMapPin, IconCalendarEvent, IconMicrophone2, IconTicket, IconTerminal2, IconChevronRight, IconMessageCode, IconShield, IconCloudLock, IconSearch, IconStarFilled, IconCode, IconLock } from "@tabler/icons-react";
import sponsorsData from "../../data/sponsors.json";
import c3confData from "../../data/c3conf.json";
import logoC3Conf from "../../assets/images/LogoC3Conf-Photoroom.webp";

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
                    <div className="absolute left-[20%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#8bc34a]/20 to-transparent"></div>
                    <div className="absolute right-[20%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>

                    {/* Retícula central (Targeting HUD) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[60%] border border-white/5 rounded-[40px] opacity-30">
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#8bc34a]/50"></div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-blue-500/50"></div>
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white/20"></div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white/20"></div>
                    </div>
                </div>

                <div className="max-w-6xl w-full flex flex-col items-center text-center relative z-10 pt-10">

                    {/* Header Brand Mark (Logo) */}
                    <div className="mb-16">
                        <img src={logoC3Conf} alt="C3Conf Logo" className="h-16 md:h-20 lg:h-24 object-contain drop-shadow-[0_0_15px_rgba(139,195,74,0.2)] opacity-90" />
                    </div>

                    {/* Status Badge */}
                    <div className="mb-12 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#8bc34a]/20 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(139,195,74,0.05)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8bc34a] animate-pulse shadow-[0_0_5px_rgba(139,195,74,0.8)]"></span>
                        <span className="text-[10px] font-mono tracking-widest text-[#8bc34a] opacity-80">REGISTRO ABIERTO // {hero.version}</span>
                    </div>

                    {/* Main Title & Subtitle Wrapper with Flanking Cyber Items */}
                    <div className="relative flex items-center justify-center w-full max-w-4xl mb-20">

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

                        <div className="flex flex-col items-center relative">
                            {/* Main Title */}
                            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-none mb-8 relative group">
                                C3<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-blue-500">CONF</span>
                                <span className="absolute -top-4 -right-8 text-lg font-mono text-white/30 tracking-normal hidden md:block opacity-60">v.{hero.year}</span>
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

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <button className="px-10 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.15)] group">
                            <IconLock size={18} className="group-hover:text-[#8bc34a] transition-colors" />
                            {hero.ctaPrimary}
                        </button>
                        <button className="px-10 py-4 bg-transparent border border-white/10 text-white font-semibold rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                            {hero.ctaSecondary} <IconChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. STATS (Dashboard Bento Box) */}
            <div className="w-full relative z-10 px-6 -mt-16">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
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

            {/* 4. TIMELINE */}
            <FadeInSection>
                <div className="w-full relative z-10 px-6 py-20 bg-[#050505] border-y border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white tracking-wide">CRONOGRAMA DE OPERACIONES</h2>
                        </div>

                        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
                            {timeline.map((item, idx) => (
                                <div key={idx} className="mb-12 relative pl-8 md:pl-0 md:flex md:items-center gap-8 group">
                                    <div className="hidden md:block w-1/3 text-right">
                                        <span className="text-sm font-mono text-gray-500 tracking-widest">{item.date}</span>
                                        <h3 className="text-xl font-bold text-[#8bc34a]">{item.day}</h3>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="absolute left-[-5px] md:left-[33.33%] md:-translate-x-1/2 w-2.5 h-2.5 bg-white/20 rounded-full group-hover:bg-[#8bc34a] group-hover:shadow-[0_0_10px_rgba(139,195,74,0.8)] transition-all"></div>

                                    <div className="md:w-2/3 md:pl-8">
                                        <div className="md:hidden mb-2">
                                            <span className="text-xs font-mono text-[#8bc34a] tracking-widest">{item.day} - {item.date}</span>
                                        </div>
                                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                                        <p className="text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-40 w-full"></div>

            {/* 5. SPEAKERS */}
            <FadeInSection>
                <div className="w-full relative z-10 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Intel & Speakers</h2>
                                <p className="text-gray-400 font-light max-w-lg">Expertos de clase mundial compartiendo investigaciones inéditas, zero-days y metodologías tácticas.</p>
                            </div>
                            <button className="text-sm font-mono text-white hover:text-[#8bc34a] transition-colors flex items-center gap-2">
                                VER AGENDA COMPLETA <IconChevronRight size={16} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {speakers.map((speaker) => (
                                <div key={speaker.id} className="group relative rounded-2xl overflow-hidden bg-[#050505] border border-white/5 aspect-[3/4]">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>

                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] font-mono text-white rounded">{speaker.level}</span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold text-white mb-1">{speaker.name}</h3>
                                        <p className="text-[#8bc34a] text-sm font-medium mb-3">{speaker.role}</p>

                                        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <span className="text-gray-400 text-xs">{speaker.company}</span>
                                            <span className="text-white text-xs font-mono">{speaker.social}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-40 w-full"></div>

            {/* 6. TESTIMONIOS */}
            <FadeInSection>
                <div className="w-full relative z-10 px-6">
                    <div className="max-w-5xl mx-auto">
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
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-gray-500 text-sm font-mono tracking-widest mb-10">NUESTROS ALIADOS TECNOLÓGICOS</p>

                        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                            {sponsorsData.map((sp) => (
                                <a href={sp.enlace} key={sp.id} target="_blank" rel="noreferrer" className="relative group">
                                    <img src={sp.imagen} alt={sp.nombre} className="max-w-[120px] max-h-12 object-contain grayscale group-hover:grayscale-0 group-hover:brightness-200 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="h-24 w-full"></div>

            {/* 8. CTA FINAL */}
            <FadeInSection>
                <div className="w-full max-w-4xl px-6 py-20 mx-auto relative z-10 mb-20">
                    <div className="bg-gradient-to-br from-[#0a0a0a] to-[#020202] border border-white/10 p-12 md:p-20 rounded-3xl text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,195,74,0.1)_0%,transparent_70%)] pointer-events-none"></div>

                        <IconTicket size={48} className="text-white/20 mx-auto mb-6" />

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Asegura tu acceso a C3Conf
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-light">
                            Los cupos son estrictamente limitados para mantener la calidad técnica de los talleres y el CTF. Únete a la élite de ciberseguridad.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#8bc34a]/50 focus:bg-white/10 w-full placeholder:text-gray-600 transition-all"
                            />
                            <button
                                type="button"
                                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-[#8bc34a] hover:text-black transition-all whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(139,195,74,0.3)]"
                            >
                                SOLICITAR ACCESO
                            </button>
                        </form>

                        <p className="mt-6 text-xs text-gray-600 font-mono">
                            CONNECTION SECURE // ENCRYPTED_CHANNEL_ACTIVE
                        </p>
                    </div>
                </div>
            </FadeInSection>

        </div>
    );
};

export default C3Conf;
