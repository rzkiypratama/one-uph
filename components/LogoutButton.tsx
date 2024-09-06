import React from 'react'
import { Button } from 'antd';
import { BellOutlined, LogoutOutlined } from '@ant-design/icons';
import Image from 'next/image';

type Props = {}

const LogoutButton = (props: Props) => {
  return (
    <div className="absolute top-0 right-0 p-5 items-center">
        <div className='flex gap-2'>
    <Button className='rounded-full px-8 uppercase font-semibold font-montserrat bg-white/20 border-n text-white'><span>Logout <LogoutOutlined /></span></Button>
    <BellOutlined className='text-white text-xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default LogoutButton;