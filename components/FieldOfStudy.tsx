"use client";
import { useState, type FC } from "react";
import { Divider } from "antd";
import CardItem from "@/components/Card";
import { setCookie } from "cookies-next";

interface FieldStudyProps {
  onSelect: (option: string) => void;
}

const FieldStudy: FC<FieldStudyProps> = ({ onSelect }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
    setCookie("FieldStudy", card, { maxAge: 7 * 24 * 60 * 60 });

    onSelect(card);
  };
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-[26rem] font-montserrat">
        <p className="uppercase font-bold text-paragraph-color">step 4 of 8</p>
        <h3 className="text-4xl font-semibold text-header-color">
          Which field of study are you interested in??
        </h3>
        <p className="text-xl text-accent-color">Choose a field of study</p>
        <Divider
          style={{ borderColor: "#407BFF", width: "20px", minWidth: "50px" }}
        ></Divider>
      </div>

      <div className="grid grid-cols-2 items-center gap-3 -mr-24">
        <CardItem
          backgroundImage="/assets/businesstech.jpeg"
          title="Business & Technology"
          height="198px"
          width="282px"
          backgroundPosition="center"
          onClick={() => handleCardClick("Business & Technology")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Business & Technology"
          }
          gradientPosition="right"
          gradientColor="#1C75BC"
          icons="/assets/bistech-icon.png"
          fontColor={"white"}
        />

        <CardItem
          backgroundImage="/assets/nurse.png"
          title="Nursing & Education"
          height="198px"
          width="282px"
          backgroundPosition="left"
          onClick={() => handleCardClick("Nursing & Education")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Nursing & Education"
          }
          gradientPosition="right"
          gradientColor="#FFC841"
          icons="/assets/education-icon.png"
          fontColor="white"
        />
        <CardItem
          backgroundImage="/assets/healthscience.png"
          title="Health Sciences"
          height="198px"
          width="282px"
          backgroundPosition="center"
          onClick={() => handleCardClick("Health Sciences")}
          isDimmed={selectedCard !== null && selectedCard !== "Health Sciences"}
          gradientPosition="right"
          gradientColor="#00A79D"
          icons="/assets/health-icons.png"
          fontColor="white"
        />

        <CardItem
          backgroundImage="/assets/art.png"
          title="Arts & Social Sciences"
          height="198px"
          width="282px"
          backgroundPosition="center"
          onClick={() => handleCardClick("Arts & Social Sciences")}
          isDimmed={
            selectedCard !== null && selectedCard !== "Arts & Social Sciences"
          }
          gradientPosition="right"
          gradientColor="#D7182C"
          icons="/assets/art-icon.png"
          fontColor="white"
        />
      </div>
    </div>
  );
};
export default FieldStudy;
