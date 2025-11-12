import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import Text from "../atoms/Text";
import ProfileImage from "../atoms/ProfileImage";
import Logo from "../../assets/images/isotipo.webp";

const Navbar = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = 520; // altura en px
      setScrolled(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 h-20
        flex flex-row flex-wrap justify-between items-center px-4
        transition-all duration-500
        ${
          scrolled
            ? "opacity-100 backdrop-blur-md bg-bgd/50 shadow-md translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-5"
        }
        ${className}
      `}
    >
      <div>
        <Link to={"/"} target="_self">
          <ProfileImage type="logo" path={Logo} />
        </Link>
      </div>

      <div>
        <ul className="flex flex-row flex-wrap justify-between gap-10">
          <NavLink
            className={({ isActive }) =>
              `font-bold transition-colors duration-300 ${
                isActive ? "text-main" : "text-white"
              }`
            }
            to={"/directiva"}
          >
            <Text type={"neon-white-green"} weight={"bold"}>
              Junta Directiva
            </Text>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold transition-colors duration-300 ${
                isActive ? "text-main" : "text-white"
              }`
            }
            to={"/roadmap"}
          >
            <Text type={"neon-white-green"} weight={"bold"}>
              Roadmap
            </Text>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold transition-colors duration-300 ${
                isActive ? "text-main" : "text-white"
              }`
            }
            to={"/catalogo"}
          >
            <Text type={"neon-white-green"} weight={"bold"}>
              Catálogo
            </Text>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold transition-colors duration-300 ${
                isActive ? "text-main" : "text-white"
              }`
            }
            to={"/logros"}
          >
            <Text type={"neon-white-green"} weight={"bold"}>
              Logros
            </Text>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold transition-colors duration-300 ${
                isActive ? "text-main" : "text-white"
              }`
            }
            to={"/blog"}
          >
            <Text type={"neon-white-green"} weight={"bold"}>
              Blog
            </Text>
          </NavLink>
        </ul>
      </div>

      <div>
        <PrimaryButton text="INICIAR SESIÓN" />
      </div>
    </nav>
  );
};

export default Navbar;
