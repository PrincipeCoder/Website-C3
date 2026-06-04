import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import { IconMapPinShare, IconCalendarEvent, IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const AdCard = ({ title, place, date, pathImage, descriptionImage, url }) => {
  return (
    <div
      className="flex flex-col bg-[#111] border border-gray-800 rounded-3xl p-8 max-w-[350px] w-full gap-6 
                    transition-all duration-500 ease-out hover:-translate-y-2
                    shadow-xl hover:shadow-[0_15px_30px_rgba(34,197,94,0.1)] group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="flex flex-col items-center gap-6 relative z-10">
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/50 border border-gray-800 flex items-center justify-center p-4">
          <img
            src={pathImage}
            alt={descriptionImage}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <Heading className="min-h-16 text-center text-white font-bold" level={4} size={3}>
          {title}
        </Heading>
      </div>

      <div className="flex flex-col items-start gap-3 relative z-10 mt-auto">
        <Text className="flex items-center gap-3 text-gray-400 text-sm">
          <IconMapPinShare size={20} className="text-green-500 flex-shrink-0" stroke={2} />
          {place}
        </Text>
        <Text className="flex items-center gap-3 text-gray-400 text-sm">
          <IconCalendarEvent size={20} className="text-green-500 flex-shrink-0" stroke={2} />
          {date}
        </Text>
      </div>

      <div className="flex justify-end mt-2 relative z-10">
        <Link to={url} target="_blank" className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors font-medium">
          Ver más <IconArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default AdCard;
