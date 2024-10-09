import React from 'react'

const ContentBlock = (props: { title: string, content: string, extraClasses?: string }) => {
    const { title, content, extraClasses } = props;
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='body-medium-regular'>{title}</div>
            <div className={`${extraClasses ? extraClasses : 'title-medium-bold'}`}>{content}</div>
        </div>
    )
}

export default ContentBlock