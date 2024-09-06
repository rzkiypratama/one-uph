"use client";
import { useState, type FC } from "react";
import { Button, Divider, Input, Modal, Form, Card, DatePicker } from "antd";
import CardItem from "@/components/Card";
import { RightOutlined } from "@ant-design/icons";
import { getCookie } from "cookies-next";
import SuccessModal from "./SuccessModal";

interface ReviewFormProps {}

const ReviewForm: FC<ReviewFormProps> = ({}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleVerify = () => {
        setLoading(true);
        // set disini untuk API
        setTimeout(() => {
          setLoading(false);
          setIsModalVisible(true);
        }, 2000); // nanti saat API siap di implementasi loader dibuat otomatis 
      };
    
      const handleSignIn = () => {
        setIsModalVisible(false);
        // Lanjutkan ke route page sign in
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    const Nationality = getCookie('Nationality')
    const StudyLevel = getCookie('StudyLevel')
    const Campus = getCookie('Campus')
    const FieldStudy = getCookie('FieldStudy')
    const Programs = getCookie('Programs')
    const Faculty = getCookie('Faculty')

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-1/3 font-montserrat">
        <p className="uppercase font-bold text-paragraph-color">8 of 8</p>
        <h3 className="text-4xl font-semibold text-header-color">
            Review
        </h3>
        <p className="text-xl text-review-text">
            Please check your inputted data
        </p>
        <Divider
          style={{ borderColor: "#407BFF", width: "20px", minWidth: "50px" }}
        ></Divider>
      </div>

      <div className="w-2/3 font-semibold">
        <div>
          <Form variant="borderless" layout="vertical">
          <Divider style={{ borderColor: "#7AA3FF" }}></Divider>
            {/* hidden field get by their cookies */}
            <div className="flex-1 hidden">
            <Form.Item
                label="Nationality"
                name="nationality"
                className="w-1/3"
                initialValue={Nationality}>
                <Input value={Nationality} disabled />
              </Form.Item>

              <Form.Item
                label="Study Level"
                name="studyLevel"
                className="w-1/3"
                initialValue={StudyLevel}>
                <Input value={StudyLevel} disabled />
              </Form.Item>

              <Form.Item
                label="Campus"
                name="campus"
                className="w-1/3"
                initialValue={Campus}>
                <Input value={Campus} disabled />
              </Form.Item>

              <Form.Item
                label="Field Study"
                name="fieldStudy"
                className="w-1/3"
                initialValue={FieldStudy}>
                <Input value={FieldStudy} disabled />
              </Form.Item>

              <Form.Item
                label="Programs"
                name="programs"
                className="w-1/3"
                initialValue={Programs}>
                <Input value={Programs} disabled />
              </Form.Item>

              <Form.Item
                label="Faculty"
                name="faculty"
                className="w-1/3"
                initialValue={Faculty}>
                <Input value={Faculty} disabled />
              </Form.Item>

              <Form.Item
                label="First Name"
                name="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
                className="w-1/3"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Middle Name"
                name="Middle Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
                className="w-1/3"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
                className="w-1/3"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mobile Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
                className="w-1/3"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Guardian Name"
                name="guardianName"
                rules={[
                  {
                    required: true,
                    message: "Please input your guardian name!",
                  },
                ]}
                className="w-1/3"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Guardian Mobile Phone Number"
                name="guardianMobilePhoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your guardian phone number!",
                  },
                ]}
                className="w-1/3"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Date of Birth"
                name="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: "Please input your Date of Birth!",
                  },
                ]}
                className="w-1/3"
              >
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>

              <Form.Item
                label="School Name"
                name="School Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your School Name!",
                  },
                ]}
                className="w-full"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Grade"
                name="Grade"
                rules={[
                  {
                    required: true,
                    message: "Please input your Grade!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="Email Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Address!",
                  },
                ]}
                className="w-full"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input password!",
                  },
                ]}
                className="w-2/3"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                ]}
                className="w-2/3"
              >
                <Input disabled />
              </Form.Item>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-5 text-secondary-color font-montserrat">
                <h1 className="text-sm">
                Full Name
                    <span className="text-review-text">
                    <p>{'FirstName + MiddleName + LastName'}</p>
                    </span>
                </h1>
                <h1 className="text-sm">
                Intended Study Program
                    <span className="text-review-text">
                    <p>{'Study Programs'}</p>
                    </span>
                </h1>
                <h1 className="text-sm">
                Mobile Phone Number
                    <span className="text-review-text">
                    <p>{'+628'}</p>
                    </span>
                </h1>
                <h1 className="text-sm">
                Campus Location
                    <span className="text-review-text">
                    <p>{'Lippo Village Campus'}</p>
                    </span>
                </h1>
                <h1 className="text-sm">
                Email Address
                    <span className="text-review-text">
                    <p>{'email@gmail.com'}</p>
                    </span>
                </h1>
                <h1 className="text-sm">
                Admission Type
                    <span className="text-review-text">
                    <p>{'Regular'}</p>
                    </span>
                </h1>
                <h1 className="text-sm col-span-2">
                School
                    <span className="text-review-text">
                    <p>{'SMK Telkom'}</p>
                    </span>
                </h1>
                <h1 className="text-sm">
                Grade
                    <span className="text-review-text">
                    <p>{'12'}</p>
                    </span>
                </h1>
            </div>

          <Divider style={{ borderColor: "#7AA3FF" }}></Divider>
          </Form>
          <Button className="px-10 py-5 float-end" danger type="primary" onClick={handleVerify}>
            Verify <RightOutlined />
          </Button>
        </div>
      </div>
      {/* Modal */}
      <Modal
        centered
        open={isModalVisible}
        onOk={handleSignIn}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
       <SuccessModal/>
      </Modal>
    </div>
  );
};
export default ReviewForm;
