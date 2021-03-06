import React from 'react'

function ProgressBar(props) {
    const { bgcolor, value } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${value}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',

    }

    const labelStyles = {
        padding: 5,
        color: 'black',
        fontWeight: 'bold'
    }
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${value}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar
