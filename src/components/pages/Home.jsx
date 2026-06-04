import { useEffect } from "react";
import FadeInSection from "../animations/FadeInSection";
import Banner from "../organisms/Banner";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { Link } from "react-router-dom";
import sponsorsData from "../../data/sponsors.js";

const Home = () => {
    useEffect(() => {
        document.title = "Centro Cultural de Ciberseguridad";
    }, []);

    return (
        <div className="flex flex-col pb-10 w-full overflow-hidden bg-black min-h-screen">
            <Banner
                intetactionUserBtn1={() => {
                    const section = document.getElementById("nosotros");
                    const navbarHeight = 140;
                    window.scrollTo({ top: section?.getBoundingClientRect().top + window.scrollY - navbarHeight, behavior: "smooth" });
                }}
                intetactionUserBtn2={() => {
                    // Ahora redirige a contacto pero podríamos hacer que navegue vía router. Por ahora mantenemos scroll.
                    const section = document.getElementById("contacto");
                    if (section) {
                        const navbarHeight = 40;
                        window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - navbarHeight, behavior: "smooth" });
                    } else {
                        // Si no hay id="contacto", mandarlo a /contacto (esto es mejor para el nuevo routing)
                        window.location.href = "/contacto";
                    }
                }}
            />

            <FadeInSection>
                <section id="nosotros" className="w-full flex justify-center px-4 md:px-20 py-16 mt-10 relative z-10">
                    <div className="w-full max-w-5xl bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(34,197,94,0.05)] flex flex-col items-center gap-8 relative overflow-hidden">
                        {/* Subtle grid background for card */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

                        <Heading level={2} size={4} className="text-center text-3xl md:text-5xl text-white font-bold relative z-10">
                            ¿Quiénes Somos?
                        </Heading>
                        <div className="flex flex-col max-w-[80ch] m-auto gap-6 text-center relative z-10">
                            <Text size="xl" className="text-gray-300 leading-relaxed mx-auto text-lg md:text-xl">
                                El <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-green-600 font-bold">Centro Cultural de Ciberseguridad</span> es una comunidad activa y comprometida con la difusión de la cultura digital, la formación en ciberseguridad y el desarrollo del pensamiento crítico frente a los desafíos del mundo tecnológico actual.
                            </Text>
                            <Text size="xl" className="text-gray-400 leading-relaxed mx-auto text-lg md:text-xl">
                                Buscamos conectar a estudiantes, profesionales, instituciones y entusiastas en un espacio donde el conocimiento, la ética y la innovación se encuentren. A través de talleres, charlas, proyectos colaborativos y eventos culturales, promovemos una ciudadanía digital consciente, inclusiva y resiliente.
                            </Text>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="w-full flex justify-center items-center px-4 md:px-20 py-12">
                    <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(34,197,94,0.15)] border border-green-500/30">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/HfnHyfnUvLw"
                            title="Presentación C3"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="w-full flex flex-col items-center px-4 md:px-20 py-24 relative overflow-hidden" id="eventos">
                    {/* Background glow effects */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-20 pointer-events-none">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
                    </div>

                    <div className="text-center mb-16 relative z-10">
                        <Heading level={2} size={4} className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-black mb-6">
                            ¿Están preparados para la cúspide de la ciberseguridad?
                        </Heading>
                        <Text className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Únete a nuestros eventos principales. El conocimiento te espera, el desafío también. Demuestra tus habilidades al más alto nivel.
                        </Text>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl relative z-10">
                        {/* Tarjeta C3Conf */}
                        <div className="flex-1 bg-[#111] border border-gray-800 hover:border-green-500/50 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-20 h-20 bg-black border border-green-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-500">
                                <span className="text-2xl font-black text-white">C3<span className="text-green-500">C</span></span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">C3Conf</h3>
                            <p className="text-gray-400 mb-8 flex-1">La conferencia anual donde convergen expertos e investigadores. Charlas, talleres y networking para elevar tu nivel técnico.</p>
                            <Link to="/eventos/C3Conf" className="w-full py-4 bg-white/5 hover:bg-green-500 text-white hover:text-black font-bold rounded-xl transition-all duration-300">
                                Descubrir más
                            </Link>
                        </div>

                        {/* Tarjeta CCCTF */}
                        <div className="flex-1 bg-[#111] border border-gray-800 hover:border-blue-500/50 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-20 h-20 bg-black border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-500">
                                <span className="text-2xl font-black text-white">CC<span className="text-blue-500">CTF</span></span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">CCCTF</h3>
                            <p className="text-gray-400 mb-8 flex-1">Capture The Flag. Pon a prueba tus habilidades ofensivas y defensivas en un entorno simulado. ¿Tienes lo necesario para ganar?</p>
                            <Link to="#" className="w-full py-4 bg-white/5 hover:bg-blue-500 text-white hover:text-black font-bold rounded-xl transition-all duration-300">
                                Próximamente
                            </Link>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="w-full flex flex-col items-center gap-10 px-4 md:px-20 py-16 mb-10">
                    <Heading level={2} size={4} className="text-center text-3xl md:text-5xl text-white font-bold">
                        Nuestros Sponsors
                    </Heading>
                    <div className="w-full max-w-5xl bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)] pointer-events-none"></div>

                        {sponsorsData.length === 0 ? (
                            <Text className="text-center text-gray-500 relative z-10">Aún no hay sponsors disponibles.</Text>
                        ) : (
                            <div className="flex gap-10 md:gap-16 flex-wrap justify-center items-center relative z-10">
                                {sponsorsData.map((sp) => (
                                    <Link to={sp.enlace} key={sp.id} target="_blank" className="relative group p-4">
                                        <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <img src={sp.imagen} alt={sp.nombre} className="relative z-10 max-w-24 max-h-24 md:max-w-32 md:max-h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110" />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </FadeInSection>
        </div>
    );
};

export default Home;