import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import Text from "../atoms/Text";
import ProfileImage from "../atoms/ProfileImage";

import Logo from "../../assets/images/isotipo.webp";

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
        <PrimaryButton text={"INICIAR SESIÓN"}></PrimaryButton>
      </div>
    </nav>
  );
};

export default StaticNavbar;
