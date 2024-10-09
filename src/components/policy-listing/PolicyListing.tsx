
import { useState } from 'react'
import { CarouselSlider } from '../ui/carousel-slider/CarouselSlider'
import "./PolicyListing.scss"

const PolicyListing = () => {
    const [active, setActive] = useState(1)
    return (

        <div className='policy-listing'>
            <div className='policy-listing__options-outer'>
                <div className='policy-listing__options'>
                    <div className='policy-listing__option-outer' style={{ marginRight: '1rem' }}>
                        <div onClick={() => setActive(1)}
                            className={`body-large-bold policy-listing__option ${active === 1 ? 'active' : ''}`}>
                            <p> My Policies (2)</p>
                        </div>
                    </div>
                    <div className='policy-listing__option-outer'>
                        <div onClick={() => setActive(2)}
                            className={`body-large-bold policy-listing__option ${active === 2 ? 'active' : ''}`}>
                            <p>Other Policies (1)</p>
                        </div>
                    </div>
                </div>
            </div>

            <CarouselSlider />

        </div>

    )
}

export default PolicyListing