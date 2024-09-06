import React, { Suspense } from 'react';
import { Card } from 'antd';
import Logo from './Logo';
import LogoutButton from './LogoutButton';
import ApplicationForm from './ApplicationForm';

const RegularForm: React.FC = () => {

  return (
  
    <div className="h-screen">
    <div className='flex'>
    <Logo />
    <LogoutButton/>
    </div>
  <div className="p-20 tracking-wider h-full content-center">
    <Card className="items-center align-middle py-10">
      <Suspense>
       <ApplicationForm/>
      </Suspense>
    </Card>
  </div>
</div>
  );
};

export default RegularForm;

