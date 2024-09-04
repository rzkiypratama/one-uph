"use client";
import { useState, type FC } from "react";
import { Button, Card, Divider, Modal } from "antd";
import CardItem from "@/components/Card";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import MajorModal from "./MajorModal";
import { modalData } from "@/utils/modalData";
import { setCookie, getCookie } from "cookies-next";

interface ProgramsProps {
  onSelect: (option: string) => void;
}

const Programs: FC<ProgramsProps> = ({ onSelect }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [confirmedCard, setConfirmedCard] = useState<string | null>(null);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
    setCookie("Programs", card, { maxAge: 7 * 24 * 60 * 60 });

    onSelect(card);
  };

  const showModal = (title: string) => {
    setModalTitle(title);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setConfirmedCard(selectedCard);
    if (selectedCard) {
      onSelect(selectedCard); // Panggil onSelect untuk melanjutkan ke langkah berikutnya
    }
  };
  const selectedModalData = modalTitle ? modalData[modalTitle] : null;
  console.log(modalData);

  const cardItems = [
    {
      title: "Graphic Design",
      backgroundImage: "/assets/design.jpeg",
      backgroundPosition: "center",
    },
    {
      title: "Product Design",
      backgroundImage: "/assets/productdesign.png",
      backgroundPosition: "left",
    },
    {
      title: "Digital Arts",
      backgroundImage: "/assets/art.png",
      backgroundPosition: "center",
    },
    {
      title: "Interior Design",
      backgroundImage: "/assets/interiordesign.jpeg",
      backgroundPosition: "center",
    },
    {
      title: "Film",
      backgroundImage: "/assets/movie.png",
      backgroundPosition: "center",
    },
    {
      title: "Architecture",
      backgroundImage: "/assets/arcitecture.png",
      backgroundPosition: "center",
    },
  ];

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-[26rem] font-montserrat">
        <p className="uppercase font-bold text-paragraph-color">step 6 of 8</p>
        <h3 className="text-4xl font-semibold text-header-color">
          Which kind of Program are you interested in?
        </h3>
        <p className="text-xl text-accent-color">Choose a program</p>
        <Divider
          style={{ borderColor: "#407BFF", width: "20px", minWidth: "50px" }}
        ></Divider>
        <p className="bg-card-color w-max p-2 rounded-md text-main-color">
          {getCookie("FieldStudy")}
        </p>
        <p className="bg-card-color w-max p-2 rounded-md text-main-color">
          {getCookie("Faculty")}
        </p>
      </div>

      <div className="grid grid-cols-2 items-center gap-3 -mr-24">
        {cardItems.map((item) => (
          <CardItem
            key={item.title}
            backgroundImage={item.backgroundImage}
            title={item.title}
            height="128px"
            width="282px"
            backgroundPosition={item.backgroundPosition}
            onClick={() => {
              handleCardClick(item.title);
              showModal(item.title);
            }}
            isDimmed={confirmedCard !== null && confirmedCard !== item.title}
            gradientPosition={"right"}
            gradientColor={"#BCD1FF"}
          />
        ))}
      </div>

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <div className="flex justify-between" key={modalTitle}>
            <Button type="link" onClick={handleCancel}>
              <ArrowLeftOutlined /> Back
            </Button>
            <Button key="submit" type="primary" danger onClick={handleOk}>
              Select this program <RightOutlined />
            </Button>
          </div>,
        ]}
        width={1000}
      >
        {selectedModalData && (
          <MajorModal
            title={selectedModalData.title}
            badgeTitle={selectedModalData.badgeTitle}
            description={selectedModalData.description}
            degree={selectedModalData.degree}
            durationStudy={selectedModalData.durationStudy}
            careerOpportunity={selectedModalData.careerOpportunity}
            sideImage={selectedModalData.sideImage}
          />
        )}
      </Modal>
    </div>
  );
};

export default Programs;
