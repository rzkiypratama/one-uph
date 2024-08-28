import type { FC } from 'react';
import { Divider } from 'antd';
import CardItem from '@/components/Card'

interface FifthStepProps {}

const FifthStep: FC<FifthStepProps> = ({}) => {
        return (
            <div className='flex justify-between'>
            <div className='flex flex-col gap-4 w-[26rem] font-montserrat'>
                <p className='uppercase font-bold text-paragraph-color'>step 5 of 8</p>
                <h3 className='text-4xl font-semibold text-header-color'>Which campus are you interested in?</h3>
                <p className='text-xl text-accent-color'>Choose a campus</p>
                <Divider style={{  borderColor: '#407BFF', width: '20px', minWidth: '50px' }}></Divider>
            </div>

            <div className='grid grid-cols-1 items-center gap-3 -mr-24'>
                <CardItem
                    backgroundImage="/assets/lippocampus.jpeg"
                    title="Lippo Campus"
                    height="128px"
                    width="558px"
                    backgroundPosition="center"
                />

                <CardItem
                    backgroundImage="/assets/medancampus.jpeg"
                    title="Medan Campus"
                    height="128px"
                    width="558px"
                    backgroundPosition="left"
                />
                  <CardItem
                    backgroundImage="/assets/surabayacampus.jpeg"
                    title="Surabaya Campus"
                    height="128px"
                    width="558px"
                    backgroundPosition="center"
                />
            </div>
            </div>
        );
}
export default FifthStep;