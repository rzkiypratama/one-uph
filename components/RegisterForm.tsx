"use client";
import { type FC } from "react";
import { Divider, Input, Form, Card, DatePicker, Select, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const [form] = Form.useForm();

  return (
    <div className="flex justify-between">
      <div className="flex w-1/3 flex-col gap-4 font-montserrat">
        <p className="font-bold uppercase text-paragraph-color"> 7 of 8</p>
        <h3 className="text-4xl font-semibold text-header-color">
          Personal Information
        </h3>
        <p className="text-xl text-accent-color">
          We would like to know you more!
        </p>
        <Divider
          style={{ borderColor: "#407BFF", width: "20px", minWidth: "50px" }}
        ></Divider>
      </div>

      <div className="w-2/3 font-semibold">
        <Card className="-mr-24">
          <Form variant="borderless" layout="vertical" form={form}>
            <div className="mb-5 flex gap-3 text-yellow-400">
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
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
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
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
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
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
              </Form.Item>
            </div>

            <div className="mb-5 flex gap-3 text-yellow-400">
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
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
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
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
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
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
              </Form.Item>
            </div>

            <div className="mb-5 flex gap-3">
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
                <DatePicker
                  format="DD-MM-YYYY"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
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
                className="w-1/2"
              >
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
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
                <Select
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                >
                  <Select.Option value="10">10</Select.Option>
                  <Select.Option value="10">11</Select.Option>
                  <Select.Option value="10">12</Select.Option>
                  <Select.Option value="10">Undergraduate</Select.Option>
                  <Select.Option value="10">Lainnya</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <div className="mb-5 flex gap-3">
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
                <p className="text-xs italic text-accent-color">
                  This email will be used for your username
                </p>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
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
                <p className="text-xs italic text-accent-color">
                  minimum 8 characters
                </p>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
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
                <p className="text-xs italic text-accent-color">
                  minimum 8 characters
                </p>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
              </Form.Item>
            </div>
            <Button className="float-end px-10 py-5" danger type="primary">
              Submit <RightOutlined />
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default RegisterForm;
