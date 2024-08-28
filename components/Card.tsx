import React from 'react';

interface CardProps {
  backgroundImage: string;
  title: string;
  height: string;
  width: string;
  backgroundPosition: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ backgroundImage, title, height, width, backgroundPosition, onClick }) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden cursor-pointer tracking-wider group font-montserrat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height,
        width: width,
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
      }}
      onClick={onClick}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#BCD1FF] to-[#BCD1FF]/20 group-hover:from-[#BCD1FF] group-hover:to-[#BCD1FF]/50"></div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-main-font text-2xl w-32 group-hover:text-white">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
