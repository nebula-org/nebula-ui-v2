import { Button } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { CSSProperties, ReactElement } from 'react'

import "./NebulaButton.scss"

type INebulaButton = {
    shape?: 'default' | 'round';
    size?: SizeType;
    type?: 'default' | 'primary';
    innerStyle?: CSSProperties;
    outerStyle?: CSSProperties;
    children: ReactElement | ReactElement[];
}
const NebulaButton = (props: INebulaButton) => {
    const { shape = 'round', type = 'primary', size = 'large', innerStyle = {}, outerStyle = {}, children } = props;
    return (
        <div className='Nebula-btn-outer' style={{ ...outerStyle }}>
            <Button className='btn-inner' type={type} shape={shape} size={size} style={{ ...innerStyle }}>{children}</Button>
        </div>
    )
}

export default NebulaButton