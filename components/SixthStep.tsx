"use client"
import { useState, type FC } from 'react';
import { Button, Divider, Input, Modal } from 'antd';
import CardItem from '@/components/Card';
import Image from "next/image";
import toga from "@/public/assets/toga.png";

interface SixthStepProps {}

const SixthStep: FC<SixthStepProps> = ({}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (title: string) => {
    setIsModalVisible(true);
  };

    const handleCancel = () => {
    setIsModalVisible(false);
  };

    const handleOk = () => {
    setIsModalVisible(false);
  };
        return (
            <div className='flex justify-between'>
            <div className='flex flex-col gap-4 w-[26rem] font-montserrat'>
                <p className='uppercase font-bold text-paragraph-color'>step 6 of 8</p>
                <h3 className='text-4xl font-semibold text-header-color'>Regular or Scholarship?</h3>
                <p className='text-xl text-accent-color'>Choose a Admission Pathway</p>
                <Divider style={{  borderColor: '#407BFF', width: '20px', minWidth: '50px' }}></Divider>
            </div>

            <div className='flex items-center gap-3 -mr-24'>
                <CardItem
                        backgroundImage="/assets/regular.jpeg"
                        title="Regular Admission"
                        height="402px"
                        width="272px"
                        backgroundPosition="center" gradientPosition={''} gradientColor={''}                />

                <CardItem
                        backgroundImage="/assets/schoolarship.png"
                        title="Scholarship (I have an e-code)"
                        height="402px"
                        width="272px"
                        backgroundPosition="left"
                        onClick={() => showModal("")} gradientPosition={''} gradientColor={''}                />

                <Modal
                open={isModalVisible}
                onCancel={handleCancel}
                footer={false}
                centered
                width={578}
                >
                    <div className='text-center flex flex-col items-center justify-center gap-3 font-montserrat tracking-wide'>
                    <Image src={toga} width={90} alt="image" className="cursor-pointer"/>
                    <p className='text-xl text-main-color font-semibold'>Scholarshipe E-code</p>
                    <p className='text-text-color text-xs'>Please enter your E-code for Scholarship</p>
                    <Input.OTP length={8} />
                    <Button type='primary' className='rounded-none px-8 py-5 bg-main-color font-semibold'>Submit E-Code</Button>
                    </div>
                </Modal>
            </div>
            </div>
        );
}
export default SixthStep;