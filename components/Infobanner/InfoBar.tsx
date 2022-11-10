import React from 'react'
import Icon from '../Icon';

type Props = {
    title: string;
    description: string;
    iconName: string;
}

export default function InfoBar(props: Props) {
    const { title, description, iconName } = props;
    return (
        <div className="mb-6 is-flex">
            <Icon iconName={iconName} />
            <div className="ml-3">
                <h4 className="is-size-4 has-text-weight-bold mb-2" style={{ color: '#31004a' }}>{title}</h4>
                <p className="subtitle">{description}</p>
            </div>
        </div>
    )
}
