import type { FC } from 'react';
import { Divider } from 'antd';
import CardItem from '@/components/Card'

interface SecondStepProps {}

const SecondStep: FC<SecondStepProps> = ({}) => {
        return (
            <div className='flex justify-between'>
            <div className='flex flex-col gap-4 w-[26rem] font-montserrat'>
                <p className='uppercase font-bold text-paragraph-color'>step 2 of 8</p>
                <h3 className='text-4xl font-semibold text-header-color'>Which field of study are you interested in??</h3>
                <p className='text-xl text-accent-color'>Choose a field of study</p>
                <Divider style={{  borderColor: '#407BFF', width: '20px', minWidth: '50px' }}></Divider>
            </div>

            <div className='grid grid-cols-2 items-center gap-3 -mr-24'>
                <CardItem
                    backgroundImage="/assets/businesstech.jpeg"
                    title="Business & Technology"
                    height="198px"
                    width="282px"
                    backgroundPosition="center"
                />

                <CardItem
                    backgroundImage="/assets/nurse.png"
                    title="Nursing & Education"
                    height="198px"
                    width="282px"
                    backgroundPosition="left"
                />
                  <CardItem
                    backgroundImage="/assets/healthscience.png"
                    title="Health Sciences"
                    height="198px"
                    width="282px"
                    backgroundPosition="center"
                />

                <CardItem
                    backgroundImage="/assets/art.png"
                    title="Arts & Social Sciences"
                    height="198px"
                    width="282px"
                    backgroundPosition="center"
                />
            </div>
            </div>
        );
}
export default SecondStep;