// Core
import React from 'react';
import { number, string } from 'prop-types';

const EmailSvg = (props) => {
    const { color, height, width } = props;

    return (
        <svg
            height = { height }
            viewBox = { `0 0 ${width} ${height}` }
            width = { width }>
            <g
                fill = 'none'
                fillRule = 'evenodd'
                stroke = 'none'
                strokeWidth = '1'>
                <g
                    fill = { color }
                    fillRule = 'nonzero'
                    stroke = { color }
                    strokeWidth = '0.5'
                    transform = 'translate(1.000000, 1.000000)'>
                    <path d = 'M20,0 L0,0 L0,13 L20,13 L20,0 Z M18.5555556,0.672413793 L9.88888889,7.17241379 L1.42222222,0.672413793 L18.5555556,0.672413793 Z M19.3333333,12.3275862 L0.666666667,12.3275862 L0.666666667,0.918965517 L9.88888889,8.00172414 L19.3333333,0.918965517 L19.3333333,12.3275862 Z' />
                </g>
            </g>
        </svg>
    );
};

EmailSvg.propTypes = {
    color:  string,
    height: number,
    width:  number,
};

EmailSvg.defaultProps = {
    color:  '#9B9B9B',
    height: 15,
    width:  22,
};

export default EmailSvg;
