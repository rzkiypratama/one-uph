"use client";
import { useState, type FC } from "react";
import { Button, Divider, Input, Modal, Form, Card, DatePicker } from "antd";
import CardItem from "@/components/Card";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-1/3 font-montserrat">
        <p className="uppercase font-bold text-paragraph-color"> 7 of 8</p>
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
          <Form variant="borderless" layout="vertical">
            <div className="flex gap-3 text-yellow-400 mb-5">
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
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
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
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
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
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
              </Form.Item>
            </div>

            <div className="flex gap-3 mb-5">
              <Form.Item
                label="Phone Number"
                name="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
                className="w-2/3"
              >
                <Input />
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
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
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
              </Form.Item>
            </div>

            <div className="flex gap-3 mb-5">
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
                <DatePicker format='DD-MM-YYYY' />
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
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
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
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
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
              </Form.Item>
            </div>

            <div className="flex gap-3">
              <Form.Item
                label="Parent/Guardian Name"
                name="Parent/Guardian Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Parent/Guardian Name!",
                  },
                ]}
                className="w-1/2"
              >
                <Input />
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
              </Form.Item>

              <Form.Item
                label="Parent/Guardian Mobile Phone Number*"
                name="Parent/Guardian Mobile Phone Number*"
                rules={[
                  {
                    required: true,
                    message:
                      "Please input your Parent/Guardian Mobile Phone Number*!",
                  },
                ]}
                className="w-1/2"
              >
                <Input />
                <Divider
                  className="p-0 m-0"
                  style={{ borderColor: "#407BFF" }}
                ></Divider>
              </Form.Item>
            </div>
          </Form>
          <Button danger type="primary">Submit</Button>
        </Card>
      </div>
    </div>
  );
};
export default RegisterForm;
