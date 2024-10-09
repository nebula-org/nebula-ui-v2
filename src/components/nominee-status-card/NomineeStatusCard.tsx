import { Row, Col } from 'antd'
import ContentBlock from '../ui/content-block/ContentBlock'
import { ClaimCardIcon, ClaimListCardIcon } from '../icons/card-icons'


const NomineeStatusCard = () => {
    return (
        <div className='policy-claim-status-card'>
            <Row>
                <Col xs={24} sm={12} lg={12}>
                    <div style={{ display: 'flex' }}>
                        <ClaimCardIcon fill="white" marginRight='1rem' />
                        <ContentBlock title="Your Nominee" content='2' />

                    </div>
                </Col>
                <Col xs={24} sm={12} lg={12}>
                    <div style={{ display: 'flex' }}>

                        <ClaimListCardIcon fill="white" marginRight='1rem' />
                        <ContentBlock title="You as a Nominee" content='0' />

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default NomineeStatusCard