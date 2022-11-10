import React from 'react'
import { LinkOutline, QrCodeOutline, ScanOutline, SearchOutline } from 'react-ionicons';

type Props = {
    iconName: string
}

export default function Icon(props: Props) {
    const WIDTH = 50;
    const HEIGHT = 50;
    const COLOR = '#31004a';
    switch(props.iconName) {
        case 'ScanOutline':
            return (
                <ScanOutline 
                    color={COLOR} 
                    height={`${HEIGHT}px`}
                    width={`${WIDTH}px`}
                />
            )
        case 'LinkOutline':
            return (
                <LinkOutline
                    color={COLOR} 
                    height={`${HEIGHT}px`}
                    width={`${WIDTH}px`}
                />
            )
        case 'SearchOutline':
            return (
                <SearchOutline 
                    color={COLOR} 
                    height={`${HEIGHT}px`}
                    width={`${WIDTH}px`}
                />
            );
        case 'QrCodeOutline':
            return (
                <QrCodeOutline 
                    color={COLOR} 
                    height={`${HEIGHT}px`}
                    width={`${WIDTH}px`}
                />
            )
        default:
            return null;
    }
}
