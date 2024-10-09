import { Row, Col } from 'antd'
import { ClaimCardIcon, ClaimListCardIcon } from '../icons/card-icons'
import ContentBlock from '../ui/content-block/ContentBlock'

const PolicyClaimStatusCard = () => {
    return (
        <div className='policy-claim-status-card'>
            <Row>
                <Col xs={24} sm={12} lg={12}>
                    <div style={{ display: 'flex' }}>
                        <ClaimCardIcon fill="white" marginRight='1rem' />
                        <ContentBlock title="Active Policies" content='2' />

                    </div>
                </Col>
                <Col xs={24} sm={12} lg={12}>
                    <div style={{ display: 'flex' }}>

                        <ClaimListCardIcon fill="white" marginRight='1rem' />
                        <ContentBlock title="Claims" content='0' />

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default PolicyClaimStatusCard