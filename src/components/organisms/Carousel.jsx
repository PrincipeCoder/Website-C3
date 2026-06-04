import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CarouselItem from "../molecules/CarouselItem";
import Dots from "../molecules/Dots";
import Text from "../atoms/Text";
import membersData from "../../data/directiva.json";

const Carousel = () => {
  const Members = membersData;
  const [activeIndex, setActiveIndex] = useState(0); // Set to 0 to avoid out-of-bounds on dummy data

  if (Members.length === 0) return <p>No hay miembros.</p>;

  const member = Members[activeIndex];

  return (
    <div className="flex flex-col items-center gap-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <CarouselItem
            phraseProfile={member.Objetivos?.[0]}
            pathProfileImage={member.Foto}
            nameProfile={member.Nombre}
            rolProfile={member.id}
          />
        </motion.div>
      </AnimatePresence>

      <Dots
        total={Members.length}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
};

export default Carousel;
