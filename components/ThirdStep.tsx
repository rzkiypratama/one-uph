import type { FC } from 'react';
import { Card, Divider } from 'antd';
import CardItem from '@/components/Card'

interface ThirdStepProps {}

const ThirdStep: FC<ThirdStepProps> = ({}) => {
        return (
            <div className='flex justify-between'>
            <div className='flex flex-col gap-4 w-[26rem] font-montserrat'>
                <p className='uppercase font-bold text-paragraph-color'>step 3 of 8</p>
                <h3 className='text-4xl font-semibold text-header-color'>Which kind of Major are you interested in?</h3>
                <p className='text-xl text-accent-color'>Choose a program major</p>
                <Divider style={{  borderColor: '#407BFF', width: '20px', minWidth: '50px' }}></Divider>
                <Card className='bg-blue-300 w-max'>value card sebelumnya</Card>
            </div>

            <div className='grid grid-cols-2 items-center gap-3 -mr-24'>
                <CardItem
                    backgroundImage="/assets/law.jpeg"
                    title="Law"
                    height="198px"
                    width="282px"
                    backgroundPosition="center"
                />

                <CardItem
                    backgroundImage="/assets/design.jpeg"
                    title="Design"
                    height="198px"
                    width="282px"
                    backgroundPosition="left"
                />
                  <CardItem
                    backgroundImage="/assets/socialpolitic.jpeg"
                    title="Social & Political Sciences"
                    height="198px"
                    width="282px"
                    backgroundPosition="center"
                />

                <CardItem
                    backgroundImage="/assets/music.jpeg"
                    title="Music"
                    height="198px"
                    width="282px"
                    backgroundPosition="center"
                />
            </div>
            </div>
        );
}
export default ThirdStep;