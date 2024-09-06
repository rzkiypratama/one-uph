'use client'
import { useState, type FC } from "react";
import { Card, Divider } from "antd";
import CardItem from "@/components/Card";
import { setCookie, getCookie } from "cookies-next";

interface FacultyProps {
  onSelect: (option: string) => void;
}

const Faculty: FC<FacultyProps> = ({ onSelect }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
    setCookie("Faculty", card, { maxAge: 7 * 24 * 60 * 60 });

    onSelect(card);
  };
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-[26rem] font-montserrat">
        <p className="uppercase font-bold text-paragraph-color">step 5 of 8</p>
        <h3 className="text-4xl font-semibold text-header-color">
          Which Faculty are you interested in?
        </h3>
        <p className="text-xl text-accent-color">Choose a program major</p>
        <Divider
          style={{ borderColor: "#407BFF", width: "20px", minWidth: "50px" }}
        ></Divider>
        <p className="bg-card-color w-max p-2 rounded-md text-main-color">
          {getCookie("FieldStudy")}
        </p>
      </div>

      <div className="grid grid-cols-2 items-center gap-3 -mr-24">
        <CardItem
          backgroundImage="/assets/law.jpeg"
          title="Law"
          height="198px"
          width="282px"
          backgroundPosition="center"
          onClick={() => handleCardClick("Law")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Law"
          }
          gradientPosition="right"
          gradientColor={"#BCD1FF"}
        />

        <CardItem
          backgroundImage="/assets/design.jpeg"
          title="Design"
          height="198px"
          width="282px"
          backgroundPosition="left"
          onClick={() => handleCardClick("Design")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Design"
          }
          gradientPosition="right"
          gradientColor={"#BCD1FF"}
        />
        <CardItem
          backgroundImage="/assets/socialpolitic.jpeg"
          title="Social & Political Sciences"
          height="198px"
          width="282px"
          backgroundPosition="center"
          onClick={() => handleCardClick("Social & Political Sciences")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Social & Political Sciences"
          }
          gradientPosition="right"
          gradientColor={"#BCD1FF"}
        />

        <CardItem
          backgroundImage="/assets/music.jpeg"
          title="Music"
          height="198px"
          width="282px"
          backgroundPosition="center"
          onClick={() => handleCardClick("Music")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Music"
          }
          gradientPosition="right"
          gradientColor={"#BCD1FF"}
        />
      </div>
    </div>
  );
};
export default Faculty;
