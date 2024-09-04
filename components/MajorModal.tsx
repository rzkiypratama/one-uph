import type { FC } from "react";
import { Card, Divider } from "antd";
import CardItem from "@/components/Card";

interface MajorModalProps {
    title: string;
    badgeTitle: string;
    description: string;
    degree: string;
    durationStudy: string;
    careerOpportunity: string[];
    sideImage: string;
}

const MajorModal: FC<MajorModalProps> = ({ title, badgeTitle, description, degree, durationStudy, careerOpportunity, sideImage }) => {
  return (
    <div className="flex gap-10 w-[100%]">
      <div className="flex items-center gap-3">
        <CardItem
          backgroundImage={sideImage}
          title=""
          height="445px"
          width="225px"
          backgroundPosition="center" gradientPosition={""} gradientColor={""}        />
      </div>

      <div className="flex flex-col gap-4 font-montserrat w-[100%]">
        <span className="flex justify-between items-center">
          <p className="text-paragraph-color text-xl">{title}</p>
          <p className="bg-card-color text-main-color px-8 py-2 rounded-lg text-xs">
            {badgeTitle}
          </p>
        </span>
        <p className="text-lg text-text-color">
          {description}
        </p>
        <Divider style={{ borderColor: "#BCD1FF" }}></Divider>
        <div className="flex gap-14 mb-2">
          <span>
            <p className="text-md text-main-color uppercase font-bold">
              Reguler Degree
            </p>
            <p className="text-sm">{degree}</p>
          </span>
          <span>
            <p className="text-md text-main-color uppercase font-bold">
              Study Duration
            </p>
            <p className="text-sm">{durationStudy}</p>
          </span>
        </div>
        <span>
          <p className="text-md text-main-color uppercase font-bold">
            Career Opportunities
          </p>
          <ul className="list-disc">
          {careerOpportunity.map((career, index) => (
             <li key={index}>{career}</li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
};
export default MajorModal;
