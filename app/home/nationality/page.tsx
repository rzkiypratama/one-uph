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

type Props = {};

const page = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
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

          <div className="flex justify-between pt-5">
            <Button type="link" onClick={prevStep} disabled={currentStep === 1}>
              {currentStep === 1 ? <ArrowLeftOutlined /> : "Back"}
            </Button>

            <Button
              type="primary"
              danger
              className="px-8 py-4"
              onClick={nextStep}
              disabled={currentStep === 6}
            >
              {currentStep === 6 ? "Submit" : "Next Step"} <RightOutlined />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
