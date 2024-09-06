import { Button } from 'antd';
import Image from 'next/image';
import type { FC } from 'react';

interface SuccessModalProps {}

const SuccessModal: FC<SuccessModalProps> = ({}) => {
        return (
            <div className='flex flex-col justify-center text-center items-center gap-3 text-secondary-color'>
                <Image src='/assets/success.png' width={70} height={25} quality={100} unoptimized alt='image'/>
                <h3 className='text-xl font-semibold'>Registration Success</h3>
                <p className='text-xs text-accent-color flex flex-col'>
                    Your account has been created.
                    <span>Please continue to fill Application Form.</span>
                </p>
                <Button type='primary' className='px-20 py-5 rounded-none font-semibold'>Sign In</Button>
            </div>
        );
}
export default SuccessModal;