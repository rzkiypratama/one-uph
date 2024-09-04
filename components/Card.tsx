import React from 'react';

interface CardProps {
  backgroundImage: string;
  title: string;
  height: string;
  width: string;
  icons?: string;
  backgroundPosition: string;
  gradientPosition: string;
  gradientExtraPosition?: string;
  gradientColor: string;
  fontColor?: string;
  onClick?: () => void;
  isDimmed?: boolean;
}

const Card: React.FC<CardProps> = ({ backgroundImage, title, height, width, icons, backgroundPosition, gradientPosition, gradientExtraPosition, gradientColor, fontColor, onClick, isDimmed }) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden cursor-pointer tracking-wider group font-montserrat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height,
        width: width,
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
        filter: isDimmed ? 'brightness(50%)' : 'none',
      }}
      onClick={onClick}
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 from-[#BCD1FF] to-[#BCD1FF]/20 group-hover:from-[#BCD1FF] group-hover:ease-in-out ${isDimmed ? 'bg-[#F1F1F1] opacity-50' : ''}`}
      style={{
        backgroundImage: `linear-gradient(to ${gradientPosition}, ${gradientColor}, #f1f1f122)`, // default color #BCD1FF
        transition: 'background-image 0.3s ease', 
      }}
      ></div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 p-4">
        {icons && (
          <img src={icons} alt="icon" className="w-30 mb-2" />
        )}
        <h3 className={`text-${fontColor} text-xl w-40 group-hover:text-white`}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;