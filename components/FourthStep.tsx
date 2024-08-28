"use client";
import { useState, type FC } from "react";
import { Button, Card, Divider, Modal } from "antd";
import CardItem from "@/components/Card";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import MajorModal from "./MajorModal";
import { modalData } from "@/utils/modalData";

interface FourthStepProps {}

const FourthStep: FC<FourthStepProps> = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  const showModal = (title: string) => {
    setModalTitle(title);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const selectedModalData = modalTitle ? modalData[modalTitle] : null;
    console.log(modalData);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-[26rem] font-montserrat">
        <p className="uppercase font-bold text-paragraph-color">step 4 of 8</p>
        <h3 className="text-4xl font-semibold text-header-color">
            Which kind of Program are you interested in?
        </h3>
        <p className="text-xl text-accent-color">Choose a program</p>
        <Divider
          style={{ borderColor: "#407BFF", width: "20px", minWidth: "50px" }}
        ></Divider>
        <Card className="bg-card-color w-max">value card sebelumnya #1</Card>
        <Card className="bg-card-color w-max">value card sebelumnya #2</Card>
      </div>

      <div className="grid grid-cols-2 items-center gap-3 -mr-24">
        <CardItem
          backgroundImage="/assets/design.jpeg"
          title="Graphic Design"
          height="128px"
          width="282px"
          backgroundPosition="center"
          onClick={() => showModal("Graphic Design")}
        />

        <CardItem
          backgroundImage="/assets/productdesign.png"
          title="Product Design"
          height="128px"
          width="282px"
          backgroundPosition="left"
          onClick={() => showModal("Product Design")}
        />

        <CardItem
          backgroundImage="/assets/art.png"
          title="Digital Arts"
          height="128px"
          width="282px"
          backgroundPosition="center"
          onClick={() => showModal("Digital Arts")}
        />

        <CardItem
          backgroundImage="/assets/interiordesign.jpeg"
          title="Interior Design"
          height="128px"
          width="282px"
          backgroundPosition="center"
          onClick={() => showModal("Interior Design")}
        />

        <CardItem
          backgroundImage="/assets/movie.png"
          title="Film"
          height="128px"
          width="282px"
          backgroundPosition="center"
          onClick={() => showModal("Film")}
        />

        <CardItem
          backgroundImage="/assets/arcitecture.png"
          title="Architecture"
          height="128px"
          width="282px"
          backgroundPosition="center"
          onClick={() => showModal("Architecture")}
        />
      </div>

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <div className="flex justify-between">
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
            key={modalTitle}
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

export default FourthStep;
