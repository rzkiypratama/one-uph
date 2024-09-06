import React, { FC, useState } from "react";
import Image from "next/image";
import PersonalInformation from "./PersonalInformation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Form, Select, Button, Divider, Card } from "antd";
import Steps from "../Steps";

const { Option } = Select;

interface PersonalInformationsProps {
}

const PersonalInformations: FC<PersonalInformationsProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="px-8 rounded-xl bg-white">

      {/* Header */}
      <div>
      <div className="flex gap-5 max-w-max">
        <div
          className={`flex items-center gap-3 mb-3 cursor-pointer ${
            activeTab === "1" ? "border-b-2 pb-3" : ""
          }`}
          onClick={() => handleTabChange("1")}
        >
          <Image
            src="/assets/personalinformation.png"
            alt="Intake Year"
            width={45}
            height={45}
          />
          <span>
            <p className="text-lg font-semibold text-header-color">
              Personal Background 01
            </p>
            <p className="italic text-sm text-accent-color">
              your background information
            </p>
          </span>
        </div>
        <div
          className={`flex items-center gap-3 mb-3 cursor-pointer ${
            activeTab === "2" ? "border-b-2 pb-3" : ""
          }`}
          onClick={() => handleTabChange("2")}
        >
          <Image
            src="/assets/personalinformation.png"
            alt="Intake Year"
            width={45}
            height={45}
          />
          <span>
            <p className="text-lg font-semibold text-header-color">
              Personal Background 02
            </p>
            <p className="italic text-sm text-accent-color">
              your background information
            </p>
          </span>
        </div>
        <div
          className={`flex items-center gap-3 mb-3 cursor-pointer ${
            activeTab === "3" ? "border-b-2 pb-3" : ""
          }`}
          onClick={() => handleTabChange("3")}
        >
          <Image
            src="/assets/personalinformation.png"
            alt="Intake Year"
            width={45}
            height={45}
          />
          <span>
            <p className="text-lg font-semibold text-header-color">
              Personal Background 03
            </p>
            <p className="italic text-sm text-accent-color">
              your background information
            </p>
          </span>
        </div>
      </div>

      {/* Tabs Content */}
      <div>
        {activeTab === "1" && (
          <div>
            <IntakeYear />
          </div>
        )}
        {activeTab === "2" && (
          <div>
            <IntakeYear />
          </div>
        )}
        {activeTab === "3" && (
          <div>
            <IntakeYear />
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

interface IntakeYearProps {
}

const IntakeYear: FC<IntakeYearProps> = ({}) => {
  return (
    <div>
      <Form layout="vertical">
        {/* Intake Year */}
        <Form.Item
          label="Intake Year"
          name="intakeYear"
          rules={[
            { required: true, message: "Please select your intake year" },
          ]}
        >
          <Select placeholder="Select intake year">
            <Option value="2024">2024</Option>
            <Option value="2023">2023</Option>
            <Option value="2022">2022</Option>
          </Select>
        </Form.Item>

        {/* Campus */}
        <Form.Item
          label="Campus"
          name="campus"
          rules={[{ required: true, message: "Please select your campus" }]}
        >
          <Select placeholder="Select campus">
            <Option value="lippoVillage">Lippo Village Campus</Option>
            <Option value="medanCampus">Medan Campus</Option>
          </Select>
        </Form.Item>

        {/* Category of Study */}
        <Form.Item
          label="Category of Study"
          name="categoryOfStudy"
          rules={[
            { required: true, message: "Please select your category of study" },
          ]}
        >
          <Select placeholder="Select category of study">
            <Option value="undergraduate">Undergraduate (S1)</Option>
            <Option value="postgraduate">Postgraduate (S2)</Option>
          </Select>
        </Form.Item>
      </Form>

      {/* Button Components */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <Button
          danger
          icon={<LeftOutlined />}
          size="large"
          className="rounded-none"
        >
          Back
        </Button>
        <Button danger type="primary" size="large" className="rounded-none">
          Save Data & Continue <RightOutlined />
        </Button>
      </div> */}
    </div>
  );
};

export default PersonalInformations;
