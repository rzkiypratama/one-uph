"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { Button, Card, Divider } from "antd";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import FieldStudy from "@/components/FieldOfStudy";
import Campus from "@/components/Campus";
import Faculty from "@/components/FacultyMajor"
import FourthStep from "@/components/Programs";
import Nationality from "@/components/Nationality";
import StudyLevel from "@/components/StudyLevel";
import Programs from "@/components/Programs";
import RegisterForm from "@/components/RegisterForm";

type Props = {};

type SelectedOption = {
  [key: number]: string;
};

const Page = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<SelectedOption>({});

  const nextStep = () => {
    if (currentStep < 7) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleOptionSelect = (step: number, option: string) => {
    setSelectedOption((prev) => ({ ...prev, [step]: option }));
  };

  const isNextEnabled = selectedOption[currentStep] !== undefined;

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
      <div className="p-20 tracking-wider h-full flex flex-col justify-center">
        <Card className="w-[90%] p-8 items-center align-middle">
          {currentStep === 1 && (
            <Nationality onSelect={(option) => handleOptionSelect(1, option)} />
          )}
          {currentStep === 2 && (
            <StudyLevel onSelect={(option) => handleOptionSelect(2, option)} />
          )}
          {currentStep === 3 && (
            <Campus onSelect={(option) => handleOptionSelect(3, option)} />
          )}
          {currentStep === 4 && (
            <FieldStudy onSelect={(option) => handleOptionSelect(4, option)} />
          )}
          {currentStep === 5 && (
            <Faculty onSelect={(option) => handleOptionSelect(5, option)} />
          )}
          {currentStep === 6 && (
            <Programs onSelect={(option) => handleOptionSelect(6, option)} />
          )}
          {currentStep === 7 && (
            <RegisterForm />
          )}

          <div className="flex justify-between pt-12 h-full">
            <Button type="link" onClick={prevStep} disabled={currentStep === 1}>
              {renderBackButtonContent()}
            </Button>

            {currentStep < 7 && (
              <Button
                type="primary"
                danger
                className="px-8 py-4"
                onClick={nextStep}
                disabled={!isNextEnabled} // Tombol hanya aktif jika pengguna telah memilih opsi
              >
                Next Step <RightOutlined />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
