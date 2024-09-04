"use client";
import { useState, type FC } from "react";
import { Divider } from "antd";
import CardItem from "@/components/Card";
import { setCookie } from "cookies-next";

interface StudyLevelProps {
  onSelect: (option: string) => void;
}

const StudyLevel: FC<StudyLevelProps> = ({ onSelect }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
    setCookie("StudyLevel", card, { maxAge: 7 * 24 * 60 * 60 });

    onSelect(card);
  };
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-[26rem] font-montserrat">
        <p className="uppercase font-bold text-paragraph-color">step 2 of 8</p>
        <h3 className="text-4xl font-semibold text-header-color">
          Which field of study are you interested in??
        </h3>
        <p className="text-xl text-accent-color">Choose a field of study</p>
        <Divider
          style={{ borderColor: "#407BFF", width: "20px", minWidth: "50px" }}
        ></Divider>
      </div>

      <div className="grid grid-cols-1 items-center gap-3 -mr-24">
        <CardItem
          backgroundImage="/assets/businesstech.jpeg"
          title="Undergraduate (S1)"
          height="133px"
          width="558px"
          backgroundPosition="center"
          onClick={() => handleCardClick("Undergraduate (S1)")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Undergraduate (S1)"
          }
          gradientPosition={"right"}
          gradientColor={"#BCD1FF"}
        />

        <CardItem
          backgroundImage="/assets/nurse.png"
          title="Graduate (S2 & S3)"
          height="133px"
          width="558px"
          backgroundPosition="left"
          onClick={() => handleCardClick("Graduate (S2 & S3)")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Graduate (S2 & S3)"
          }
          gradientPosition={"right"}
          gradientColor={"#BCD1FF"}
        />
      </div>
    </div>
  );
};
export default StudyLevel;
