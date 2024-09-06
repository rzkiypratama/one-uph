import { Button, Card, Divider } from 'antd';
import type { FC } from 'react';
import Logo from './Logo';
import Image from 'next/image';
import { EditOutlined } from '@ant-design/icons';
import CardDashboard from './CardDashboard';
import LogoutButton from './LogoutButton';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
        return (
    <div className="h-screen">
        <div className='flex'>
        <Logo />
        <LogoutButton/>
        </div>
      <div className="p-20 tracking-wider h-full content-center">
        <Card className="w-[90%] items-center align-middle py-10">
            <div className='flex justify-between'>
            <div className='font-montserrat w-full'>
                <div className='px-3'>
                <Image src={'/assets/signin.png'} alt={'image'} width={40} height={40}/>
                <p className='text-xl'>Welcome,</p>
                <h1 className='text-4xl font-semibold text-header-color'>Orion Scope</h1>
                <span className='flex justify-between items-center'>
                    <p className='text-sm text-paragraph-color'>ID #000000</p>
                    <Button className='border-paragraph-color text-paragraph-color'><EditOutlined /> Edit Profile</Button>
                </span>
                </div>
                <Divider className='border-divider-color'></Divider>
                <div className='grid grid-cols-3 px-3 gap-7'>
                <span>
                    <p className='form-title'>Study Category</p>
                    <p className='form-subtitle'>Undergraduate (S1)</p>
                </span>

                <span>
                    <p className='form-title'>Program</p>
                    <p className='form-subtitle'>Law</p>
                </span>

                <span>
                    <p className='form-title'>Entry Option</p>
                    <p className='form-subtitle'>Regular Application</p>
                </span>

                <span>
                    <p className='form-title'>Campus</p>
                    <p className='form-subtitle'>Lippo Campus</p>
                </span>

                <span>
                    <p className='form-title'>Campus</p>
                    <p className='form-subtitle'>Lippo Campus</p>
                </span>

                <span>
                    <p className='form-title'>Entry Type</p>
                    <p className='form-subtitle'>Direct Admission</p>
                </span>
                </div>
                <Divider className='border-divider-color'></Divider>
                <div className='px-3'>
                    <p>Application Status</p>
                    <span className='flex flex-col gap-1 pt-3'>
                    <p className="bg-card-color w-max p-2 rounded-md text-header-color">Your current application status is <span className='font-semibold'>Registered</span></p>
                    <p className="bg-card-color w-max p-2 rounded-md text-header-color">Your next step is to <span className='font-semibold'>Buy a Registration Form</span></p>
                    </span>
                </div>
            </div>

            <div className='-mr-24'>
            <CardDashboard/>
            </div>
            </div>
        </Card>
      </div>
    </div>
        );
}
export default Dashboard;