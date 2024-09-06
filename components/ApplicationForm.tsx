import React, { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Form, Select, Button, Divider, notification, Modal } from "antd";
import Steps from "./Steps";
import PersonalInformation from "./PersonalInformation";
import FamilyBackground from "./FamilyBackground";
import EducationInformation from "./PersonalInformation";
import EntryOption from "./PersonalInformation";
import ReviewPayment from "./PersonalInformation";
import axios from "axios";
import IntakeYear from "./IntakeYear";

const { Option } = Select;

interface ApplicationFormProps {}

const ApplicationForm: FC<ApplicationFormProps> = ({}) => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "intakeYear";

  const getStepImage = (currentStep: string, thisStep: string) => {
    const stepsOrder = [
      "intakeYear",
      "personalInformation",
      "familyBackground",
      "educationInformation",
      "entryOption",
      "reviewPayment",
    ];

    const currentIndex = stepsOrder.indexOf(currentStep);
    const thisStepIndex = stepsOrder.indexOf(thisStep);

    if (thisStepIndex < currentIndex) {
      return "/assets/circle-done.png"; // step done
    } else if (thisStepIndex === currentIndex) {
      return "/assets/circle-bold.png"; // current step
    } else {
      return "/assets/circle-normal.png"; // step inactive
    }
  };

  return (
    <div className="px-8 rounded-xl bg-white">
       <Steps
        firstStep={getStepImage(step, "intakeYear")}
        secondStep={getStepImage(step, "personalInformation")}
        thirdStep={getStepImage(step, "familyBackground")}
        fourthStep={getStepImage(step, "educationInformation")}
        fiveStep={getStepImage(step, "entryOption")}
        sixStep={getStepImage(step, "reviewPayment")}
      />

      <Divider />

      {/* URL params yang rturn component */}
      <div>
        {step === "intakeYear" && <IntakeYear />}
        {step === "personalInformation" && <PersonalInformation />}
        {step === "familyBackground" && <FamilyBackground />}
        {step === "educationInformation" && <EducationInformation />}
        {step === "entryOption" && <EntryOption />}
        {step === "reviewPayment" && <ReviewPayment />}
      </div>
    </div>
  );
};

export default ApplicationForm;
