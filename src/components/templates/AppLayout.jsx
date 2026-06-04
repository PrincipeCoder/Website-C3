import { Link, Outlet, useLocation } from "react-router-dom";
import StaticNavbar from "../organisms/StaticNavbar";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import IconPage from "../../assets/favicon.ico";
import Favicon from "react-favicon";

const AppLayout = () => {
    const location = useLocation();
    // Detectamos si el usuario está en la página principal
    const isHome = location.pathname === "/";

    return (
        <div className="min-h-screen bg-black overflow-x-hidden w-full relative">
            <Favicon url={IconPage} />

            {/* HEADER / BANNER */}
            <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 bg-transparent absolute top-0 w-full z-10 gap-4 md:gap-0">
                {/* Logo C3 */}
                <div className="logo-container">
                    {/* Tu logo aquí */}
                </div>

                {/* Navegación Principal */}
                <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-white font-medium text-xs md:text-sm">
                    <Link to="/" className={`hover:text-green-500 transition-colors ${location.pathname === '/' ? 'text-green-500 font-bold' : ''}`}>Inicio</Link>
                    <Link to="/nosotros" className={`hover:text-green-500 transition-colors ${location.pathname.startsWith('/nosotros') ? 'text-green-500 font-bold' : ''}`}>Nosotros</Link>
                    <Link to="/eventos" className={`hover:text-green-500 transition-colors ${location.pathname.startsWith('/eventos') ? 'text-green-500 font-bold' : ''}`}>Eventos</Link>

                    <Link to="/JuntaDirectiva" className={`hover:text-green-500 transition-colors ${location.pathname.startsWith('/JuntaDirectiva') ? 'text-green-500 font-bold' : ''}`}>
                        Junta Directiva
                    </Link>

                    <Link to="/contacto" className={`hover:text-green-500 transition-colors ${location.pathname.startsWith('/contacto') ? 'text-green-500 font-bold' : ''}`}>Contacto</Link>
                </nav>
            </header>

            {/* CONTENIDO DINÁMICO */}
            {/* Si es Home (isHome), quitamos el padding para que el banner toque el techo. Si no, lo mantenemos */}
            <main className={`${isHome ? "pt-0" : "pt-28 md:pt-24"} w-full`}>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;