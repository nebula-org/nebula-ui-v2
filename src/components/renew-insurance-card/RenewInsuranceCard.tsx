import { Row, Col } from 'antd'

import NebulaButton from '../ui/button/NebulaButton'

//need props to display due days
// Renew button
const RenewInsuranceCard = () => {
    return (
        <div className='NB-renew-insurance-card'>
            <Row className='renew-card'>
                <Col xs={24} sm={16} lg={16}>
                    <div>
                        <p className='zero-margin title-medium-bold'>Term Life Insurance</p>
                        <p className='zero-margin body-medium-regular'>Due in 19 days</p>
                    </div>
                </Col>
                <Col xs={24} sm={8} lg={8}>
                    <div>
                        <p className='zero-margin'><span className='title-medium-bold'>$23</span><span className='body-medium-regular'>/month</span></p>
                        <div style={{ marginTop: '1rem' }}>
                            <NebulaButton
                                innerStyle={{ padding: '0.8125rem 1.25rem' }}
                                outerStyle={{ width: '7.4375rem', height: '2.25rem' }}>
                                <span className='body-medium-bold'>Renew</span>
                            </NebulaButton>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RenewInsuranceCard