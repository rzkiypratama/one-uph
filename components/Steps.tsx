import { Divider } from 'antd';
import type { FC } from 'react';

interface StepsProps {
    firstStep: string;
    secondStep: string;
    thirdStep: string;
    fourthStep: string;
    fiveStep: string;
    sixStep: string;

}

const Steps: FC<StepsProps> = ({ firstStep, secondStep, thirdStep, fourthStep, fiveStep, sixStep }) => {
        return (
            <div className='flex mb-8'>
            <div className='flex flex-col gap-2'>
              <span className='flex gap-2'>
              <p className='text-2xl font-semibold'>01</p>
              <p className='grid grid-cols-1 text-sm text-accent-color font-semibold'>Intake <span>year</span></p>
              </span>
              <div className='flex items-center'>
              <img src={firstStep} alt="steps" className='w-5 h-5' />
              <Divider style={{ borderColor: "#407BFF", width: "50px", minWidth: "180px", opacity: '0.5', margin: '0px 5px' }}></Divider>
              </div>
            </div>
      
            <div className='flex flex-col gap-2'>
              <span className='flex gap-2'>
              <p className='text-2xl font-semibold'>02</p>
              <p className='grid grid-cols-1 text-sm text-accent-color font-semibold'>Personal <span>Informations</span></p>
              </span>
              <div className='flex items-center'>
              <img src={secondStep} alt="steps" className='w-5 h-5' />
              <Divider style={{ borderColor: "#407BFF", width: "50px", minWidth: "180px", opacity: '0.5', margin: '0px 5px' }}></Divider>
              </div>
            </div>
      
            <div className='flex flex-col gap-2'>
              <span className='flex gap-2'>
              <p className='text-2xl font-semibold'>03</p>
              <p className='grid grid-cols-1 text-sm text-accent-color font-semibold'>Family <span>Background</span></p>
              </span>
              <div className='flex items-center'>
              <img src={thirdStep} alt="steps" className='w-5 h-5' />
              <Divider style={{ borderColor: "#407BFF", width: "50px", minWidth: "180px", opacity: '0.5', margin: '0px 5px' }}></Divider>
              </div>
            </div>
      
            <div className='flex flex-col gap-2'>
              <span className='flex gap-2'>
              <p className='text-2xl font-semibold'>04</p>
              <p className='grid grid-cols-1 text-sm text-accent-color font-semibold'>Education <span>Information</span></p>
              </span>
              <div className='flex items-center'>
              <img src={fourthStep} alt="steps" className='w-5 h-5' />
              <Divider style={{ borderColor: "#407BFF", width: "50px", minWidth: "180px", opacity: '0.5', margin: '0px 5px' }} dashed></Divider>
              </div>
            </div>
      
            <div className='flex flex-col gap-2'>
              <span className='flex gap-2'>
              <p className='text-2xl font-semibold'>05</p>
              <p className='grid grid-cols-1 text-sm text-accent-color font-semibold'>Entry <span>Option</span></p>
              </span>
              <div className='flex items-center'>
              <img src={fiveStep} alt="steps" className='w-5 h-5' />
              <Divider style={{ borderColor: "#407BFF", width: "50px", minWidth: "180px", opacity: '0.5', margin: '0px 5px' }}></Divider>
              </div>
            </div>
      
            <div className='flex flex-col gap-2'>
              <span className='flex gap-2'>
              <p className='text-2xl font-semibold'>06</p>
              <p className='grid grid-cols-1 text-sm text-accent-color font-semibold'>Review & <span>Payment</span></p>
              </span>
              <div className='flex items-center'>
              <img src={sixStep} alt="steps" className='w-5 h-5' />
              <Divider style={{ borderColor: "#407BFF", width: "50px", minWidth: "180px", opacity: '0.5', margin: '0px 5px' }}></Divider>
              </div>
            </div>
            </div>
        );
}
export default Steps;