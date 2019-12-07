// Core
import React, { Component } from 'react';
import styled from 'styled-components';

class InputRadio extends Component {

    state = { checked: true };

    checkRadioChecked = (e) => {

    }

    render () {

        const { className, checked, name, children } = this.props;

        return (
            <label className = { className } >
                <input name = { name } type = 'radio' onChange = { this.checkRadioChecked } />
                <span className = 'checkmark' />
                { children }
            </label>
        );
    }
}

export const RadioButton = styled(InputRadio)`

    font-family: var(--primaryFont);
    font-size: 14px;
    font-weight: 500;
    position: relative;
    padding: 10px 10px 10px 25px;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;

    .checkmark {
        width: 16px;
        height: 16px;
        display: block;
        border-radius: 50%;
        border: 1px solid #999;
        box-shadow: 0px 4px 8px rgba(62, 62, 89, 0.12);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        &:after {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background-color: var(--primaryColor);
            border-radius: 50%;
            display: none;
        }
    }

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked {
            & ~ .checkmark {
                &:after {
                    display: block;
                }
            }
        }
    }
    
    &:focus {
        outline: none;
    }
`;
