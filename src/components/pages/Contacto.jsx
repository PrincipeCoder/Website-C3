import { useEffect, useState } from "react";
import FadeInSection from "../animations/FadeInSection";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconBrandTiktok, IconMail, IconSend } from "@tabler/icons-react";

const Contacto = () => {
    useEffect(() => {
        document.title = "Contacto | C3";
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "" // Honeypot field
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Limpiar error del campo modificado
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Honeypot check (si se llena, es un bot)
        if (formData.honeypot !== "") {
            newErrors.honeypot = "Bot detectado";
        }

        // Validación estricta
        if (formData.name.trim().length < 3) {
            newErrors.name = "El nombre debe tener al menos 3 caracteres";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Ingresa un correo electrónico válido";
        }

        if (formData.subject.trim().length < 5) {
            newErrors.subject = "El asunto debe tener al menos 5 caracteres";
        }

        if (formData.message.trim().length < 15) {
            newErrors.message = "El mensaje debe ser más detallado (mínimo 15 caracteres)";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        // Simulación de envío seguro
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
        }, 1500);
    };

    const socials = [
        { name: "Instagram", handle: "@c_cubico_ccc", icon: <IconBrandInstagram size={24} />, url: "https://www.instagram.com/c_cubico_ccc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { name: "LinkedIn", handle: "Centro Cultural de Ciberseguridad - C Cúbico UNI", icon: <IconBrandLinkedin size={24} />, url: "https://www.linkedin.com/company/ccc-uni" },
        { name: "Facebook", handle: "Centro Cultural de Ciberseguridad - C Cúbico", icon: <IconBrandFacebook size={24} />, url: "https://www.facebook.com/CCCUNI" },
        { name: "YouTube", handle: "@C-Cúbico", icon: <IconBrandYoutube size={24} />, url: "https://www.youtube.com/@C-C%C3%BAbico" },
        { name: "TikTok", handle: "@ccubico", icon: <IconBrandTiktok size={24} />, url: "#" },
    ];

    return (
        <div className="flex flex-col pb-20 w-full bg-black min-h-screen pt-28 md:pt-36 px-4 md:px-20 overflow-hidden relative">
            {/* Grid Pattern Background para ese toque cyber */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

            <FadeInSection>
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                        <div className="flex-1">
                            <Heading level={1} size={5} className="text-center md:text-left text-3xl md:text-5xl text-white mb-4">
                                Ponte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-green-600">Contacto</span> con Nosotros
                            </Heading>
                            <Text className="text-center md:text-left text-base md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0">
                                Estamos aquí para responder tus preguntas, explorar colaboraciones o simplemente hablar de ciberseguridad.
                            </Text>
                        </div>
                        <div className="hidden md:flex flex-shrink-0 w-48 lg:w-64 justify-center items-center">
                            <img
                                src="/Mascota/M_BanderaCCC.png"
                                alt="Mascota C Cúbico"
                                className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(139,195,74,0.2)]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* LEFT COLUMN: SOCIALS */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <Heading level={2} size={4} className="text-2xl text-white mb-2">Síguenos y Mantente Actualizado</Heading>
                                <Text className="text-gray-400">Únete a nuestra comunidad en redes sociales para enterarte de eventos, talleres y competencias.</Text>
                            </div>

                            <div className="flex flex-col gap-4">
                                {socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-gray-800 hover:border-green-500/50 hover:bg-[#1a1a1a] transition-all group"
                                    >
                                        <div className="p-3 bg-black rounded-lg border border-gray-800 group-hover:border-green-500/30 text-gray-300 group-hover:text-green-500 transition-colors">
                                            {social.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium">{social.name}</span>
                                            <span className="text-gray-500 text-sm">{social.handle}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: CONTACT FORM & EMAIL */}
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#111] to-black border border-gray-800">
                                <div className="p-4 bg-black rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                                    <IconMail className="text-green-500" size={32} />
                                </div>
                                <div>
                                    <span className="block text-gray-400 text-sm mb-1">Correo Institucional</span>
                                    <a href="mailto:ccc@uni.edu.pe" className="text-white text-lg md:text-xl font-medium hover:text-green-500 transition-colors">
                                        ccc@uni.edu.pe
                                    </a>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 md:p-8 rounded-3xl bg-[#111] border border-gray-800 shadow-2xl relative overflow-hidden">
                                <Heading level={3} size={3} className="text-2xl text-white mb-2">Envíanos un Mensaje</Heading>

                                {/* Honeypot - Oculto visualmente para los usuarios pero visible para bots que leen el DOM */}
                                <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
                                    <label htmlFor="honeypot">No llenes este campo si eres humano</label>
                                    <input type="text" id="honeypot" tabIndex="-1" autoComplete="off" value={formData.honeypot} onChange={handleChange} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-400">Nombre Completo</label>
                                        <input required type="text" id="name" value={formData.name} onChange={handleChange} className={`bg-black border ${errors.name ? 'border-red-500' : 'border-gray-800'} rounded-lg p-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-600`} placeholder="Ej. Jane Doe" />
                                        {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-400">Correo Electrónico</label>
                                        <input required type="email" id="email" value={formData.email} onChange={handleChange} className={`bg-black border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-lg p-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-600`} placeholder="Ej. jane@ejemplo.com" />
                                        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-400">Asunto</label>
                                    <input required type="text" id="subject" value={formData.subject} onChange={handleChange} className={`bg-black border ${errors.subject ? 'border-red-500' : 'border-gray-800'} rounded-lg p-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-600`} placeholder="¿En qué te podemos ayudar?" />
                                    {errors.subject && <span className="text-red-500 text-xs mt-1">{errors.subject}</span>}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Mensaje</label>
                                    <textarea required id="message" rows="4" value={formData.message} onChange={handleChange} className={`bg-black border ${errors.message ? 'border-red-500' : 'border-gray-800'} rounded-lg p-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-600 resize-none`} placeholder="Escribe tu mensaje aquí..."></textarea>
                                    {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-2 flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-white text-black font-bold text-base hover:bg-green-500 hover:text-black transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? "Enviando de forma segura..." : "Enviar Mensaje"}
                                    {!isSubmitting && <IconSend size={20} className="group-hover:translate-x-1 transition-transform" />}
                                </button>

                                {submitted && (
                                    <div className="absolute top-4 right-4 left-4 bg-green-500/10 border border-green-500 text-green-400 p-3 rounded-lg text-sm text-center animate-fade-in-down">
                                        ¡Mensaje validado y enviado con éxito! Te contactaremos pronto.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
};

export default Contacto;
