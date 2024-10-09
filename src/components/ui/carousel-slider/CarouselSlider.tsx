import React, { useRef } from 'react';
import { Carousel } from 'antd';
import InsuranceInfo from '../../insurance-info/InsuranceInfo';
import InfoCard from '../../info-card/InfoCard';

import "./CarouselSlider.scss"

const contentStyle: React.CSSProperties = {
    margin: 0,

    background: 'transparent',
};

const CustomPrevArrow = () => {
    return (
        <div
            className='prev-icon'

        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    )
}

const CustomNextArrow = () => {
    return (
        <div
            className='next-icon'

        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    )
}

const CustomArrows = (props: { onClickPrev: any, onClickNext: any }) => {
    const { onClickPrev, onClickNext } = props;

    return (
        <div className="custom-arrows">
            <div className="custom-arrow custom-prev-arrow" onClick={onClickPrev}>
                <CustomPrevArrow />
            </div>
            <div className="custom-arrow custom-next-arrow" onClick={onClickNext}>
                <CustomNextArrow />
            </div>
        </div>
    );
};

export const CarouselSlider: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    const carouselRef = useRef(null);

    const goToPrev = () => {
        if (carouselRef.current) {

            (carouselRef.current as any).prev();
        }

    };

    const goToNext = () => {
        if (carouselRef.current) {

            (carouselRef.current as any).next();
        }
    };



    return (
        <>
            <Carousel
                ref={carouselRef}
                dots={false}
                prevArrow={<></>}
                nextArrow={<></>}
                speed={500}
                slidesToShow={2} // Show two slides at once
                slidesToScroll={1} // Scroll one slide at a time
                responsive={[
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1, // 1 slide for smaller screens
                            slidesToScroll: 1,
                        },
                    },
                ]}
                arrows afterChange={onChange}>
                <div className='slider-content'>
                    <InfoCard width={'34.5rem'} >
                        <InsuranceInfo />
                    </InfoCard>
                </div>
                <div>
                    <InfoCard width={'34.5rem'} >
                        <InsuranceInfo />
                    </InfoCard>
                </div>
                <div>
                    <InfoCard width={'34.5rem'} >
                        <InsuranceInfo />
                    </InfoCard>
                </div>

            </Carousel>
            <CustomArrows
                onClickPrev={goToPrev}
                onClickNext={goToNext}
            /></>
    );
};

