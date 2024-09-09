"use client";
import React, { useState, useEffect, Suspense } from "react";
import Logo from "@/components/Logo";
import { Button, Card } from "antd";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import FieldStudy from "@/components/FieldOfStudy";
import Campus from "@/components/Campus";
import Faculty from "@/components/FacultyMajor";
import Programs from "@/components/Programs";
import Nationality from "@/components/Nationality";
import StudyLevel from "@/components/StudyLevel";
import RegisterForm from "@/components/RegisterForm";
import ReviewForm from "@/components/ReviewForm";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

type SelectedOption = {
  [key: number]: string;
};

const Registering = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedOption, setSelectedOption] = useState<SelectedOption>({});
  const [loading, setLoading] = useState(false);

  // Get the current step from the URL or default to 1
  const currentStep = Number(searchParams.get("step")) || 1;

  useEffect(() => {
    // Update URL when the step changes
    router.push(`?step=${currentStep}`, undefined);
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < 8) {
      router.push(`?step=${currentStep + 1}`, undefined);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      router.push(`?step=${currentStep - 1}`, undefined);
    }
  };

  const handleOptionSelect = (step: number, option: string) => {
    setSelectedOption((prev) => ({ ...prev, [step]: option }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nextStep();
    }, 1500);
  };

  const isNextEnabled = selectedOption[currentStep] !== undefined;

  const renderBackButtonContent = () => {
    switch (currentStep) {
      case 1:
        return <>{<ArrowLeftOutlined />} back to Sign In</>;
      case 2:
        return <>{<ArrowLeftOutlined />} back to Student Nationality</>;
      case 3:
      case 4:
        return <>{<ArrowLeftOutlined />} back to Campus Selection</>;
      case 5:
        return <>{<ArrowLeftOutlined />} back to Program Selection</>;
      case 6:
        return <>{<ArrowLeftOutlined />} back to Admission Type</>;
      case 7:
        return <>{<ArrowLeftOutlined />} Edit your Personal Data</>;
      default:
        return <>{<ArrowLeftOutlined />} Back</>;
    }
  };

  return (
    <div className="h-screen">
      <Logo />
      <div className="p-20 tracking-wider h-full flex flex-col justify-center">
 
        <Card className="w-[90%] p-8 items-center align-middle">
          {/* Render the appropriate step based on the current step */}
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
          {currentStep === 7 && <RegisterForm />}
          {currentStep === 8 && <ReviewForm />}

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
                disabled={!isNextEnabled}
              >
                Next Step <RightOutlined />
              </Button>
            )}

            {currentStep === 7 && (
              <Button
                type="primary"
                danger
                className="px-8 py-4"
                onClick={handleSubmit}
                loading={loading}
              >
                Submit
              </Button>
            )}
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Registering;
