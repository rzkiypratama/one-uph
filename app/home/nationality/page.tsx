"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { Button, Card, Divider } from "antd";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import FirstStep from "@/components/FirstStep";
import SecondStep from "@/components/SecondStep";
import ThirdStep from "@/components/ThirdStep";
import FourthStep from "@/components/FourthStep";
import FifthStep from "@/components/FifthStep";
import SixthStep from "@/components/SixthStep";
import SeventhStep from "@/components/SeventhStep";

type Props = {};

const Page = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 7) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderBackButtonContent = () => {
    if (currentStep === 1) return <>{<ArrowLeftOutlined />} back to Sign In</>;
    if (currentStep === 2)
      return <>{<ArrowLeftOutlined />} back to Student Nationality</>;
    if (currentStep === 3)
      return <>{<ArrowLeftOutlined />} back to Student Nationality</>;
    if (currentStep === 4)
      return <>{<ArrowLeftOutlined />} back to Student Nationality</>;
    if (currentStep === 5)
      return <>{<ArrowLeftOutlined />} back to Program Selection</>;
    if (currentStep === 6)
      return <>{<ArrowLeftOutlined />} back to Campus Selection</>;
    if (currentStep === 7)
      return <>{<ArrowLeftOutlined />} back to Admission Type</>;

    return <>{<ArrowLeftOutlined />} Back</>;
  };
  return (
    <div className="h-screen">
      <Logo />
      <div className="p-20 tracking-wider">
        <Card className="w-[90%] p-8 h-[100%]">
          {currentStep === 1 && <FirstStep />}
          {currentStep === 2 && <SecondStep />}
          {currentStep === 3 && <ThirdStep />}
          {currentStep === 4 && <FourthStep />}
          {currentStep === 5 && <FifthStep />}
          {currentStep === 6 && <SixthStep />}
          {currentStep === 7 && <SeventhStep />}

          <div className="flex justify-between pt-5">
            <Button type="link" onClick={prevStep} disabled={currentStep === 1}>
              {renderBackButtonContent()}
            </Button>

            {currentStep < 7 && (
              <Button
                type="primary"
                danger
                className="px-8 py-4"
                onClick={nextStep}
              >
                {currentStep === 6 ? "Submit" : "Next Step"} <RightOutlined />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
