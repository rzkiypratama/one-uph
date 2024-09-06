'use client'
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Modal } from "antd";
import { useState, type FC } from "react";

interface CardDashboardProps {}

const CardDashboard: FC<CardDashboardProps> = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
    console.log('ini ditekan');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  return (
    <div
    className="relative rounded-lg overflow-hidden tracking-wider group font-montserrat"
      style={{
        backgroundImage: `url('/assets/student.jpeg')`,
        height: "461px",
        width: "272px",
        backgroundSize: "cover",
      }}>
         {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#BCD1FF] to-[#BCD1FF]/20`}
      ></div>
      {/* Title */}
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <img src='/assets/form-icons.png' alt="icon" className="w-30 mb-2" />
        <h3 className={`text-secondary-color text-2xl w-40`}>
        Buy a Registration Form
        </h3>
        <Button onClick={() => showModal()} className="w-full bg-gradient-to-l from-[#FF7A78] to-[#FF5351]/90 border-none text-white font-semibold font-montserrat py-5 mt-2">Buy New Form</Button>
      </div>
      <Modal
      centered
      open={isModalVisible}
      onCancel={handleCancel}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}>
        <div className="flex justify-between text-center py-9">
        <div>
        <Form layout="vertical">
        <Form.Item label=''>
        <p className="code-title">I have an e-code</p>
        <p className="code-subtitle">Please enter your E-code</p>
        <Input variant="borderless" placeholder="ABCD12345678" allowClear/>
        <Divider className='border-[#d3d3d3] p-0 m-0'></Divider>
        </Form.Item>
        <Button className="code-button">Submit E-code</Button>
        </Form>
        </div>

        <Divider type="vertical" className='border-divider-color h-auto'></Divider>

        <div className="content-end">
        <Form layout="vertical">
        <Form.Item label=''>
        <p className="code-title">I don’t have an E-code</p>
        <p className="code-subtitle">Proceed with your admission process</p>
        </Form.Item>
        <Button className="code-button">Proceed without E-code</Button>
        </Form>
        </div>
        </div>
      </Modal>
    </div>
  );
};
export default CardDashboard;
