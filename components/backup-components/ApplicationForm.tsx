import React, { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Form, Select, Button, Divider, notification, Modal } from "antd";
import Steps from "../Steps";
import PersonalInformation from "../PersonalInformation";
import FamilyBackground from "../PersonalInformation";
import EducationInformation from "../PersonalInformation";
import EntryOption from "../PersonalInformation";
import ReviewPayment from "../PersonalInformation";
import axios from "axios";
import IntakeYear from "../IntakeYear";

const { Option } = Select;

interface ApplicationFormProps {}

const ApplicationForm: FC<ApplicationFormProps> = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "intakeYear";
  const [form] = Form.useForm();

  const apiSubmit = async (endpoint: string, data: any) => {
    try {
      const response = await axios.post(endpoint, data); // Menggunakan Axios untuk melakukan POST request
      if (response.status === 200 || response.status === 201) {
        notification.success({
          message: "Data submitted successfully",
        });
        return true;
      } else {
        notification.error({
          message: "Failed to submit data",
        });
        return false;
      }
    } catch (error) {
      notification.error({
        message: "Network error",
        description: "Something went wrong",
      });
      return true;
    }
  };

  // Fungsi untuk handle submit berdasarkan steps
  const handleSubmit = async () => {
    try {
      const formData = await form.validateFields();
      let apiSuccess = false;

      if (step === "intakeYear") {
        apiSuccess = await apiSubmit("/api/intake-year", formData);
        if (apiSuccess) router.push("?step=personalInformation");
      } else if (step === "personalInformation") {
        apiSuccess = await apiSubmit("/api/personal-information", formData);
        if (apiSuccess) router.push("?step=familyBackground");
      } else if (step === "familyBackground") {
        apiSuccess = await apiSubmit("/api/family-background", formData);
        if (apiSuccess) router.push("?step=educationInformation");
      } else if (step === "educationInformation") {
        apiSuccess = await apiSubmit("/api/education-information", formData);
        if (apiSuccess) router.push("?step=entryOption");
      } else if (step === "entryOption") {
        apiSuccess = await apiSubmit("/api/entry-option", formData);
        if (apiSuccess) router.push("?step=reviewPayment");
      } else if (step === "reviewPayment") {
        setIsModalVisible(true); // Tampilkan modal ketika di ReviewPayment
      }
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };

  const handleBack = () => {
    if (step === "personalInformation") router.push("?step=intakeYear");
    else if (step === "familyBackground") router.push("?step=personalInformation");
    else if (step === "educationInformation") router.push("?step=familyBackground");
    else if (step === "entryOption") router.push("?step=educationInformation");
    else if (step === "reviewPayment") router.push("?step=entryOption");
  };

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
      return "/assets/circle-done.png"; // Langkah ini sudah selesai
    } else if (thisStepIndex === currentIndex) {
      return "/assets/circle-bold.png"; // Langkah saat ini
    } else {
      return "/assets/circle-normal.png"; // Langkah belum dilewati
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    // Tambahkan logika jika ada, misalnya navigasi ke halaman pembayaran
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

      {/* Komponen dinamis berdasarkan URL params */}
      <div>
        {step === "intakeYear" && <IntakeYear />}
        {step === "personalInformation" && <PersonalInformation />}
        {step === "familyBackground" && <FamilyBackground />}
        {step === "educationInformation" && <EducationInformation />}
        {step === "entryOption" && <EntryOption />}
        {step === "reviewPayment" && <ReviewPayment />}
      </div>

      {/* Button Components */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
        {step !== "intakeYear" && (
          <Button danger icon={<LeftOutlined />} size="large" className="rounded-none" onClick={handleBack}>
            Back
          </Button>
        )}
        <Button
          danger
          type="primary"
          size="large"
          className="rounded-none"
          onClick={handleSubmit}
        >
          {step === "reviewPayment" ? "Proceed to Payment" : "Save Data & Continue"}{" "}
          <RightOutlined />
        </Button>
      </div>

      {/* Modal untuk ReviewPayment */}
      <Modal
        title="Payment Confirmation"
        open={isModalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        okText="Proceed"
        cancelText="Cancel"
      >
        <p>Are you sure you want to proceed to payment?</p>
      </Modal>
    </div>
  );
};

export default ApplicationForm;
