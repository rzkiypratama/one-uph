import { useState, type FC } from 'react';
import { Divider } from 'antd';
import CardItem from '@/components/Card'
import { setCookie } from 'cookies-next';

interface CampusProps {
  onSelect: (option: string) => void;
}

const Campus: FC<CampusProps> = ({onSelect}) => {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const handleCardClick = (card: string) => {
        setSelectedCard(card);
        setCookie('Campus', card, { maxAge: 7 * 24 * 60 * 60 });
        
    onSelect(card);
    };

        return (
            <div className='flex justify-between'>
            <div className='flex flex-col gap-4 w-[26rem] font-montserrat'>
                <p className='uppercase font-bold text-paragraph-color'>step 3 of 8</p>
                <h3 className='text-4xl font-semibold text-secondary-color'>Which campus are you interested in?</h3>
                <p className='text-xl text-accent-color'>Choose a campus</p>
                <Divider style={{  borderColor: '#407BFF', width: '20px', minWidth: '50px' }}></Divider>
            </div>

            <div className='grid grid-cols-2 items-center gap-3 -mr-24'>
                <CardItem
                        backgroundImage="/assets/lippocampus.jpeg"
                        title="Lippo Village Campus"
                        height="128px"
                        width="272px"
                        backgroundPosition="center"
                        gradientPosition='right'
                        onClick={() => handleCardClick("Lippo Village Campus")}
                        isDimmed={selectedCard !== null && selectedCard !== "Lippo Village Campus"} gradientColor={'#BCD1FF'}                />

                <CardItem
                        backgroundImage="/assets/medancampus.jpeg"
                        title="Medan Campus"
                        height="128px"
                        width="272px"
                        backgroundPosition="left"
                        onClick={() => handleCardClick("Medan Campus")}
                        isDimmed={selectedCard !== null && selectedCard !== "Medan Campus"} 
                        gradientPosition='right'
                        gradientColor={'#BCD1FF'}               />
                  <CardItem
                        backgroundImage="/assets/surabayacampus.jpeg"
                        title="Surabaya Campus"
                        height="128px"
                        width="272px"
                        backgroundPosition="center"
                        gradientPosition='right'
                        onClick={() => handleCardClick("Surabaya Campus")}
                        isDimmed={selectedCard !== null && selectedCard !== "Surabaya Campus"} gradientColor={'#BCD1FF'}                />
                <CardItem
                        backgroundImage="/assets/surabayacampus.jpeg"
                        title="Plaza Semanggi Campus"
                        height="128px"
                        width="272px"
                        backgroundPosition="center"
                        gradientPosition='right'
                        onClick={() => handleCardClick("Plaza Semanggi Campus")}
                        isDimmed={selectedCard !== null && selectedCard !== "Plaza Semanggi Campus"} gradientColor={'#BCD1FF'}                />
                <CardItem
                        backgroundImage="/assets/surabayacampus.jpeg"
                        title="Plaza Semanggi EEC Campus"
                        height="128px"
                        width="272px"
                        backgroundPosition="center"
                        gradientPosition='right'
                        onClick={() => handleCardClick("Plaza Semanggi EEC Campus")}
                        isDimmed={selectedCard !== null && selectedCard !== "Plaza Semanggi EEC Campus"} gradientColor={'#BCD1FF'}                />
            </div>
            </div>
        );
}
export default Campus;