import Icon from "../atoms/Icon";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandTiktok } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Text from "../atoms/Text";

const Footer = () => {
    const dataLinks = {
        "Sobre Nosotros": {
            // ✅ Cambiamos "/directiva" por "/JuntaDirectiva"
            "Junta Directiva": { url: "/JuntaDirectiva", target: "_self" },
            Roadmaps: { url: "/roadmap", target: "_self" },
            /* FAQs: { url: "/catalogo", target: "_self" },
            Catálogo: { url: "/catalogo", target: "_self" },
            Logros: { url: "/logros", target: "_self" }, */
        },
        Recursos: {
            /* Blog: { url: "/blog", target: "_self" }, */
            Github: {
                url: "https://github.com/JoaoH24/Website-C3",
                target: "_blank",
            },
        },
        Aliados: {
            "Ekogroup Lima": {
                url: "https://ekoparty.org/ekogroups/",
                target: "_blank",
            },
            /* HTBox: { url: "https://academy.hackthebox.com/", target: "_blank" }, */
        },
    };
    return (
        <div className="flex flex-col bg-bgd mt-10">
            <div className="flex flex-row  gap-32 px-20 pb-10">
                {Object.entries(dataLinks).map(([title, subtitle]) => (
                    <div key={title} className="flex flex-col gap-5">
                        <Text weight={"bold"} className="text-white">
                            {title}
                        </Text>
                        <div className="flex flex-col gap-1">
                            {Object.entries(subtitle).map(([label, { url, target }]) => (
                                <Link
                                    key={label}
                                    to={url}
                                    target={target}
                                    className="text-white font-ps font-normal"
                                >
                                    <Text type={"neon-white-green"}>{label}</Text>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-bgl mx-20 h-0.5"></div>
            <div className="flex flex-row px-20 min-h-14 text-bgl justify-between items-center">
                <Text weight={"medium"}>&copy; 2025 Todos los derechos reservados</Text>
                <div className="flex">
                    <Link to={"https://web.facebook.com/CCCUNI"} target="_blank">
                        <IconBrandFacebook color="var(--color-bgl)" stroke={2} />
                    </Link>
                    <Link to={"https://www.instagram.com/c_cubico_ccc/"} target="_blank">
                        <IconBrandInstagram color="var(--color-bgl)" stroke={2} />
                    </Link>
                    <Link to={"https://www.tiktok.com/@cccuni"} target="_blank">
                        <IconBrandTiktok color="var(--color-bgl)" stroke={2} />
                    </Link>
                    <Link to={"https://github.com/JoaoH24/Website-C3"} target="_blank">
                        <IconBrandGithub color="var(--color-bgl)" stroke={2} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;