import { useEffect } from "react";
import FadeInSection from "../animations/FadeInSection";
import Banner from "../organisms/Banner";
import PanelForm from "../organisms/PanelForm";
import SimpleSection from "../templates/SimpleSection";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Carousel from "../organisms/Carousel";
import TwoColumnSection from "../templates/TwoColumnSection";
import AdCard from "../organisms/AdCard";
import { useAd } from "../../hooks/useAd";
import { useSponsors } from "../../hooks/useSponsors";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Centro Cultural de Ciberseguridad";
  }, []);

  const { Ads, loadingAd } = useAd();
  const { Sponsor, loadingSp } = useSponsors();

  return (
    <div className="flex flex-col gap-20">
      <Banner
        intetactionUserBtn1={() => {
          const section = document.getElementById("nosotros");
          const navbarHeight = 140;
          const y =
            section.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top: y, behavior: "smooth" });
        }}
        intetactionUserBtn2={() => {
          const section = document.getElementById("contacto");
          const navbarHeight = 40;
          const y =
            section.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top: y, behavior: "smooth" });
        }}
      ></Banner>

      <FadeInSection>
        <SimpleSection id={"nosotros"} className="gap-10 px-20">
          <Heading level={2} size={4} className="text-center">
            ¿Quienes Somos?
          </Heading>
          <div className="flex flex-col max-w-320 m-auto">
            <Text size="2xl" className="text-center">
              El
              <Text type="gradient">
                {" "}
                &nbsp;Centro Cultural de Ciberseguridad
              </Text>
              , es una comunidad activa y comprometida con la difusión de la
              cultura digital, la formación en ciberseguridad y el desarrollo
              del pensamiento crítico frente a los desafíos del mundo
              tecnológico actual.
            </Text>
            <Text size="2xl" className="text-center">
              Buscamos conectar a estudiantes, profesionales, instituciones y
              entusiastas en un espacio donde el conocimiento, la ética y la
              innovación se encuentren. A través de talleres, charlas, proyectos
              colaborativos y eventos culturales, promovemos una ciudadanía
              digital consciente, inclusiva y resiliente. Te invitamos a formar
              parte de este movimiento y construir juntos una cultura de
              seguridad digital con impacto social.
            </Text>
          </div>
        </SimpleSection>
      </FadeInSection>

      <FadeInSection>
        <SimpleSection className="gap-10" id={"eventos"}>
          <Heading level={2} size={4} className="text-center">
            Eventos
          </Heading>
          {loadingAd ? (
            <Text type="green" className="text-center">
              Cargando datos...
            </Text>
          ) : Ads.length === 0 ? (
            <Text type="green" className="text-center">
              No hay eventos disponibles.
            </Text>
          ) : (
            <div className="flex gap-10 justify-center flex-wrap">
              {Ads.map((ad) => (
                <AdCard
                  key={ad.id}
                  pathImage={ad.Imagen}
                  descriptionImage={ad.Descripción}
                  title={ad.Titulo}
                  place={ad.Lugar}
                  date={ad.Fecha}
                  url={ad.Url}
                />
              ))}
            </div>
          )}
        </SimpleSection>
      </FadeInSection>

      <FadeInSection>
        <SimpleSection className="flex flex-col gap-10" id={"directiva"}>
          <Heading level={2} size={4} className="text-center">
            Junta Directiva
          </Heading>
          <Carousel />
        </SimpleSection>
      </FadeInSection>

      <FadeInSection>
        <TwoColumnSection
          id={"contacto"}
          className="bg-[linear-gradient(135deg,rgba(0,191,255,0.2)_15%,rgba(0,255,106,0.2)_55%,rgba(46,46,46,0.2)_100%)] py-20 px-20"
          dirChildenLeft="col"
          childrenLeft={
            <>
              <Heading level={2} size={4} className="min-w-100 max-w-xl">
                ¿Te gustaría colaborar con nosotros?
              </Heading>
              <Text type="green" size="2xl" className="min-w-100 max-w-xl">
                Si representas a una empresa, institución educativa o deseas
                vincularte como aliado estratégico, este es el lugar para
                comenzar.
              </Text>
            </>
          }
          childrenRight={<PanelForm />}
        />
      </FadeInSection>
      <FadeInSection>
        <SimpleSection className="flex flex-col gap-10">
          <Heading level={2} size={4} className="text-center">
            Nuestros Sponsors
          </Heading>
          <div className="flex gap-10 justify-center flex-wrap">
            {loadingSp ? (
              <Text type="green" className="text-center">
                Cargando sponsors...
              </Text>
            ) : Ads.length === 0 ? (
              <Text type="green" className="text-center">
                No hay sponsors disponibles.
              </Text>
            ) : (
              <div>
                {Sponsor.map((sp) => (
                  <Link to={sp.Url} target="_blank" key={sp.id}>
                    <img
                      src={sp.Imagen}
                      alt={sp.Descripción}
                      className="max-w-20 max-h-20 transition-shadow duration-300 hover:shadow-[0_0_20px_var(--color-main)] rounded-full"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </SimpleSection>
      </FadeInSection>
    </div>
  );
};

export default Home;
