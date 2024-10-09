import { Col, Divider, Row } from 'antd'
import "./InsuranceInfo.scss"
import ContentBlock from '../ui/content-block/ContentBlock'
import { InsuranceIcon } from '../icons/card-icons'

const InsuranceInfo = () => {
    return (
        <div className='NB-InsuranceInfo'>
            <div className="heading">
                <div className="icon">
                    <InsuranceIcon fill='white' marginRight='1rem' />
                </div>
                <div className="title body-large-medium">Term Life Insurance</div>
            </div>
            <div className="id headline-small-medium">11234051744240976</div>
            <Row gutter={16}>
                <Col span={8}>
                    <ContentBlock
                        extraClasses="body-large-medium"
                        title="Policy Started" content="12 May 2023" />
                </Col>
                <Col span={8}>
                    <ContentBlock
                        extraClasses="body-large-medium"
                        title="Policy Exipry" content="11 May 2027" /></Col>
                <Col span={8}>
                    <ContentBlock extraClasses="body-large-medium" title="Renewal On" content="11 May 2027" /></Col>
            </Row>
            <Divider style={{ background: '#2D2C32' }} />
            <Row gutter={16}>
                <Col span={8}>
                    <ContentBlock extraClasses="body-large-medium" title="Sum Assured" content="$800k" /></Col>
                <Col span={8}>
                    <ContentBlock extraClasses="body-large-medium" title="Premium Amount" content="$80/Month" />
                </Col>
                <Col span={8}>
                    <ContentBlock extraClasses="body-large-medium" title="Claim Status" content="Nil" />
                </Col>



            </Row>
            <Row gutter={16} style={{ marginTop: '1rem' }}>
                <Col span={8}>
                    <ContentBlock extraClasses="body-large-medium" title="Nominee" content="Spouse" />
                </Col>
                <Col span={8}>
                    <ContentBlock extraClasses="body-large-medium" title="Wallet Address" content="0xB4ed...1B740" />
                </Col>
            </Row>
        </div>
    )
}

export default InsuranceInfo