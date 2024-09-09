"use client";
import { useState, type FC } from "react";
import {
  Divider,
  Input,
  Form,
  Card,
  DatePicker,
  Select,
  Button,
  notification,
  Spin,
} from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (values: any) => {
    setLoading(true);

    try {
      // Simulate a network request with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // On success, redirect to the desired URL
      router.push("/home/nationality?step=8");
    } catch (error) {
      notification.error({
        message: "Registration Failed",
        description: "An error occurred while registering. Please try again.",
      });
      router.push("/home/nationality?step=8");
    } finally {
      setLoading(false);
    }
  };

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
                {/* <p className="text-xs italic text-accent-color">
                  This email will be used for your username
                </p> */}
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
                name="password" // Unik untuk field password
                rules={[
                  {
                    required: true,
                    message: "Password must be at least 8 characters",
                    min: 8, // Validasi panjang password
                  },
                ]}
                className="w-2/3"
              >
                <Input.Password
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword" // Unik untuk field konfirmasi password
                dependencies={["password"]} // Bergantung pada field password
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  // Custom validator untuk mengecek kesamaan password
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || value === getFieldValue("password")) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!"),
                      );
                    },
                  }),
                ]}
                className="w-2/3"
              >
                <Input.Password
                  style={{
                    border: "none",
                    borderBottom: "2px solid #98989844",
                    borderRadius: 0,
                  }}
                />
              </Form.Item>
            </div>
            <Button
              danger
              type="primary"
              htmlType="submit"
              loading={loading}
              onClick={handleRegister}
              className="float-end px-10 py-5"
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default RegisterForm;
