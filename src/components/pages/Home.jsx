import { useEffect } from "react";
import FadeInSection from "../animations/FadeInSection";
import Banner from "../organisms/Banner";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import AdCard from "../organisms/AdCard";
import { useAd } from "../../hooks/useAd";
import { Link } from "react-router-dom";
import sponsorsData from "../../data/sponsors.json";

const Home = () => {
    useEffect(() => {
        document.title = "Centro Cultural de Ciberseguridad";
    }, []);

    const { Ads, loadingAd } = useAd();

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
                <section className="w-full flex flex-col items-center gap-10 px-4 md:px-20 py-16" id="eventos">
                    <Heading level={2} size={4} className="text-center text-3xl md:text-5xl text-white font-bold">
                        Eventos
                    </Heading>
                    {loadingAd ? (
                        <Text className="text-center text-green-500">Cargando datos...</Text>
                    ) : Ads.length === 0 ? (
                        <Text className="text-center text-green-500">No hay eventos disponibles.</Text>
                    ) : (
                        <div className="flex gap-8 justify-center flex-wrap max-w-7xl mx-auto">
                            {Ads.map((ad) => (
                                <AdCard key={ad.id} pathImage={ad.Imagen} descriptionImage={ad.Descripción} title={ad.Titulo} place={ad.Lugar} date={ad.Fecha} url={ad.Url} />
                            ))}
                        </div>
                    )}
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