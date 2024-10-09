import { Card } from 'antd'
import { CSSProperties, ReactElement } from 'react';

import "./InfoCard.scss";

type IInfoCardProps = {
    title?: string;
    width: string;
    outerStyle?: CSSProperties,
    innerStyle?: CSSProperties;
    children: ReactElement | ReactElement[];
}
const InfoCard = ({ title = "", width, children, outerStyle = {}, innerStyle = {} }: IInfoCardProps) => {
    return (

        <div className='Nebula-Info'
            style={{ width, ...outerStyle }}
        >
            <Card
                bordered={false}
                className='Nebula-Info__card'
                style={{ ...innerStyle }}
                title={title}


            >
                {children}
            </Card>
        </div>

    )
}

export default InfoCard