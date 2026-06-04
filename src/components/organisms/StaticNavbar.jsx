import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import Text from "../atoms/Text";
import ProfileImage from "../atoms/ProfileImage";

import Logo from "../../assets/images/logo-secundario.webp";

const StaticNavbar = ({ className = "" }) => {
    return (
        <nav
            className={`bg-transparent flex flex-row flex-wrap absolute z-20 w-full h-20 justify-between items-center px-4 ${className}`}
        >
            <div>
                <Link to={"/"} target="_self">
                    <ProfileImage type={"logo"} path={Logo}></ProfileImage>
                </Link>
            </div>
            <div>
                <ul className="flex flex-row flex-wrap justify-between gap-10">
                    <li>
                        {/* ✅ Añadimos el "/" antes del "#" */}
                        <a
                            href="/#nosotros"
                            className="font-bold text-white hover:text-main transition-colors duration-300"
                        >
                            <Text type="neon-white-green" weight="bold">
                                Nosotros
                            </Text>
                        </a>
                    </li>
                    <li>
                        <Link to="/eventos" className="font-bold text-white hover:text-main transition-colors duration-300">
                            <Text type="neon-white-green" weight="bold">Eventos</Text>
                        </Link>
                    </li>
                    <li>
                        {/* ✅ Reemplazamos <a> por <Link> apuntando a la ruta de PostgreSQL */}
                        <Link
                            to="/JuntaDirectiva"
                            className="font-bold text-white hover:text-main transition-colors duration-300"
                        >
                            <Text type="neon-white-green" weight="bold">
                                Junta Directiva
                            </Text>
                        </Link>
                    </li>
                    <li>
                        {/* ✅ Añadimos el "/" antes del "#" */}
                        <a
                            href="/#contacto"
                            className="font-bold text-white hover:text-main transition-colors duration-300"
                        >
                            <Text type="neon-white-green" weight="bold">
                                Contacto
                            </Text>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <PrimaryButton text="INICIAR SESIÓN" className={"hidden"} />
            </div>
        </nav>
    );
};

export default StaticNavbar;