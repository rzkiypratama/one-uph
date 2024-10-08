'use client'
import { useState, type FC } from 'react';
import { Divider } from 'antd';
import CardItem from '@/components/Card';
import { setCookie } from "cookies-next";

interface NationalityProps {
  onSelect: (option: string) => void;
}

const Nationality: FC<NationalityProps> = ({ onSelect }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
    setCookie('Nationality', card, { maxAge: 7 * 24 * 60 * 60 });

    onSelect(card);
  };

  return (
    <div className='flex justify-between'>
      <div className='flex flex-col gap-4 w-[26rem] font-montserrat'>
        <p className='uppercase font-bold text-paragraph-color'>step 1 of 8</p>
        <h3 className='text-4xl font-semibold text-header-color'>
          Are you Indonesian or International Student?
        </h3>
        <p className='text-xl text-accent-color'>Choose your nationality</p>
        <Divider style={{ borderColor: '#407BFF', width: '20px', minWidth: '50px' }} />
      </div>

      <div className='flex items-center gap-3 -mr-24'>
        <div onClick={() => handleCardClick("National")}>
          <CardItem
            backgroundImage="/assets/student.jpeg"
            title="I'm an National Student"
            height="402px"
            width="272px"
            backgroundPosition="center"
            isDimmed={selectedCard !== null && selectedCard !== "National"}
            gradientPosition={"right"}
            gradientColor={"#BCD1FF"}
          />
        </div>

        <div onClick={() => handleCardClick("International")}>
          <CardItem
            backgroundImage="/assets/international-student.png"
            title="I'm an International Student"
            height="402px"
            width="272px"
            backgroundPosition="left"
            isDimmed={selectedCard !== null && selectedCard !== "International"}
            gradientPosition={"right"}
            gradientColor={"#BCD1FF"}
          />
        </div>
      </div>
    </div>
  );
};

export default Nationality;
