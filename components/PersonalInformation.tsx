import React, { FC, useState } from "react";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  message,
  DatePicker,
  Radio,
  ConfigProvider,
  Select,
} from "antd";
import { useRouter } from "next/navigation";

const { Option } = Select;

interface PersonalInformationsProps {}

const PersonalInformations: FC<PersonalInformationsProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("1");
  const [form] = Form.useForm();
  const router = useRouter();

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleSubmit = async () => {
    try {
      // Validasi semua field form
      const values = await form.validateFields();

      // Jika validasi sukses, tampilkan hasilnya di console
      console.log("Form values: ", values);

      // Tampilkan notifikasi berhasil
      message.success("Form submitted successfully!");

      // Reset form setelah submit (opsional)
      form.resetFields();

      // Redirect ke route baru setelah submit
      // router.push("/dashboard?step=familyBackground");
    } catch (error) {
      // Jika ada error saat validasi, tampilkan error
      console.log("Form validation failed:", error);
      // router.push("/dashboard?step=familyBackground");
      message.error("Please fill in the required fields.");
    }
  };

  return (
    <div className="px-8 rounded-xl bg-white">
      {/* Header */}
      <div>
        <div className="flex gap-16 max-w-max mb-10">
          <div
            className={`flex items-center gap-3 mb-3 cursor-pointer ${
              activeTab === "1" ? "border-b-2 border-b-main-color pb-3" : ""
            }`}
            onClick={() => handleTabChange("1")}
          >
            <Image
              src="/assets/personalinformation.png"
              alt="Personal Background 01"
              width={45}
              height={45}
            />
            <span>
              <p className="text-lg font-semibold text-header-color">
                Personal Background
              </p>
              <p className="italic text-sm text-accent-color">
                your background information
              </p>
            </span>
          </div>
          <div
            className={`flex items-center gap-3 mb-3 cursor-pointer ${
              activeTab === "2" ? "border-b-2 border-b-main-color pb-3" : ""
            }`}
            onClick={() => handleTabChange("2")}
          >
            <Image
              src="/assets/personalinformation.png"
              alt="Personal Background 02"
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
              activeTab === "3" ? "border-b-2 border-b-main-color pb-3" : ""
            }`}
            onClick={() => handleTabChange("3")}
          >
            <Image
              src="/assets/contact-icon.png"
              alt="Personal Background 03"
              width={45}
              height={45}
            />
            <span>
              <p className="text-lg font-semibold text-header-color">
                Contact Information
              </p>
              <p className="italic text-sm text-accent-color">
                your contact information
              </p>
            </span>
          </div>
        </div>

        {/* Tabs Content */}
        <Form form={form} layout="vertical">
          {/* Keep all form fields mounted, conditionally hidden */}
          <div style={{ display: activeTab === "1" ? "block" : "none" }}>
            <div className="grid grid-cols-3 gap-5">
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your First Name" },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your First Name"
                />
              </Form.Item>
              <Form.Item
                label="Middle Name"
                name="middleName"
                rules={[
                  { required: true, message: "Please enter your Middle Name" },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your Middle Name"
                />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your Last Name" },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your Last Name"
                />
              </Form.Item>

              <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Date of Birth",
                  },
                ]}
              >
                <DatePicker
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  format="DD-MM-YYYY"
                  placeholder="Your Date of Birth"
                />
              </Form.Item>

              <Form.Item
                label="City of Birth"
                name="cityOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please enter your City of Birth",
                  },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your City of Birth"
                />
              </Form.Item>

              <Form.Item
                label="Select Gender"
                name="genderSelect"
                rules={[
                  { required: true, message: "Please enter your Gender" },
                ]}
              >
                <Radio.Group defaultValue="male" buttonStyle="solid">
                  <ConfigProvider
                    theme={{
                      components: {
                        Radio: {
                          buttonSolidCheckedActiveBg: "#719DFF",
                          buttonSolidCheckedBg: "#719DFF",
                          buttonSolidCheckedHoverBg: "#719DFF",
                          radioSize: 2,
                        },
                      },
                    }}
                  >
                    <Radio.Button value="male">Male</Radio.Button>
                    <Radio.Button value="female">Female</Radio.Button>
                  </ConfigProvider>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>

          <div style={{ display: activeTab === "2" ? "block" : "none" }}>
            <div className="grid grid-cols-2 gap-5 w-2/3">
              <Form.Item
                label="Citizenship"
                name="citizenship"
                rules={[
                  { required: true, message: "Please enter your Citizenship" },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your Citizenship"
                />
              </Form.Item>
              <Form.Item
                label="NIK/ID Number"
                name="idNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter your NIK/ID Number",
                  },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your NIK/ID Number"
                />
              </Form.Item>
              <Form.Item
                label="Religion"
                name="religion"
                rules={[
                  { required: true, message: "Please enter your Religion" },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your Religion"
                />
              </Form.Item>

              <Form.Item
                label="Church Name"
                name="churchName"
                rules={[
                  { required: false, message: "Please enter your Church Name" },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your Church Name"
                />
              </Form.Item>

              <Form.Item
                label="Marital Status"
                name="maritalStatus"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Marital Status",
                  },
                ]}
              >
                <Radio.Group defaultValue="single" buttonStyle="solid">
                  <ConfigProvider
                    theme={{
                      components: {
                        Radio: {
                          buttonSolidCheckedActiveBg: "#719DFF",
                          buttonSolidCheckedBg: "#719DFF",
                          buttonSolidCheckedHoverBg: "#719DFF",
                          radioSize: 2,
                        },
                      },
                    }}
                  >
                    <Radio.Button value="single">Single</Radio.Button>
                    <Radio.Button value="married">Married</Radio.Button>
                  </ConfigProvider>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>

          <div style={{ display: activeTab === "3" ? "block" : "none" }}>
            <div className="grid grid-cols-3 gap-5">
              <Form.Item
                label="Mobile Phone Number"
                name="mobilePhoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Mobile Phone Number",
                  },
                ]}
              >
                <div className="mobile-phone-inputs">
                  <Select
                    placeholder="Select country code"
                    style={{
                      border: "none",
                      borderBottom: "2px solid #98989844",
                      borderRadius: 0,
                      width: "70px", // Adjust width as needed
                      marginRight: "8px", // Space between Select and Input
                    }}
                    variant="borderless"
                  >
                    <Option value="+62">+62</Option>
                    <Option value="+55">+55</Option>
                    <Option value="+68">+68</Option>
                  </Select>
                  <Input
                    style={{
                      border: "none",
                      borderBottom: "2px solid #98989844",
                      borderRadius: 0,
                      width: "calc(100% - 78px)", // Adjust width to fill available space
                    }}
                    placeholder="Your Mobile Phone Number"
                  />
                </div>
              </Form.Item>
              <Form.Item
                label="Whatsapp Number"
                name="whatsappNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Whatsapp Number",
                  },
                ]}
              >
                <div className="mobile-phone-inputs">
                  <Select
                    placeholder="Select country code"
                    style={{
                      border: "none",
                      borderBottom: "2px solid #98989844",
                      borderRadius: 0,
                      width: "70px", // Adjust width as needed
                      marginRight: "8px", // Space between Select and Input
                    }}
                    variant="borderless"
                  >
                    <Option value="+62">+62</Option>
                    <Option value="+55">+55</Option>
                    <Option value="+68">+68</Option>
                  </Select>
                  <Input
                    style={{
                      border: "none",
                      borderBottom: "2px solid #98989844",
                      borderRadius: 0,
                      width: "calc(100% - 78px)", // Adjust width to fill available space
                    }}
                    placeholder="Your Whatsapp Number"
                  />
                </div>
              </Form.Item>
              <Form.Item
                label="Home Phone Number"
                name="homePhoneNumber"
                rules={[
                  {
                    required: false,
                    message: "Please enter your Home Phone Number",
                  },
                ]}
              >
                <div className="mobile-phone-inputs">
                  <Select
                    placeholder="Select country code"
                    style={{
                      border: "none",
                      borderBottom: "2px solid #98989844",
                      borderRadius: 0,
                      width: "70px", // Adjust width as needed
                      marginRight: "8px", // Space between Select and Input
                    }}
                    variant="borderless"
                  >
                    <Option value="+62">+62</Option>
                    <Option value="+55">+55</Option>
                    <Option value="+68">+68</Option>
                  </Select>
                  <Input
                    style={{
                      border: "none",
                      borderBottom: "2px solid #98989844",
                      borderRadius: 0,
                      width: "calc(100% - 78px)", // Adjust width to fill available space
                    }}
                    placeholder="Your Home Phone Number"
                  />
                </div>
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="emailAddress"
                rules={[
                  { required: false, message: "Please enter your Email Address" },
                ]}
              >
                <Input
                  variant="borderless"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                  placeholder="Your Email Address"
                />
              </Form.Item>
              <Form.Item
            label="I prefer to be contacted by:"
            name="contactPreference"
            rules={[{ required: true, message: "Please select your asnwer" }]}
          >
            <Select placeholder="Select your contact preference" variant="borderless" 
            style={{
            border: "none",
            borderBottom: "2px solid #98989844",
            }}>
              <Option value="father">Father</Option>
              <Option value="mother">Mother</Option>
              <Option value="uncle">Uncle</Option>
            </Select>
          </Form.Item>

            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-10">
            <Button
              danger
              icon={<LeftOutlined />}
              size="large"
              className="rounded-none"
            >
              Back
            </Button>
            <Button
              danger
              type="primary"
              size="large"
              className="rounded-none"
              onClick={handleSubmit} // Trigger form submission
            >
              Save Data & Continue <RightOutlined />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PersonalInformations;
