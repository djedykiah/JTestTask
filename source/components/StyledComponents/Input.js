//Core
import React from 'react';

//Components
import { Typography } from 'components';

//Styles
import styled from 'styled-components';

const InputContainer = (props) => {

    const {
        input,
        placeholder,
        type,
        className,
        disabled,
        meta: { touched, error },
    } = props;

    const inputAttr = {
        ...input,
        placeholder,
        disabled,
        type: input.type || type,
    };

    const isError = touched && error;

    return (
        <label
            className = { className }>
            <input { ...inputAttr } className = { isError ? 'error' : null } />
            {
                isError &&
                <Typography as = 'span' color = 'var(--errorColor)' size = 'caption' >{error}</Typography>
            }
        </label>
    );
};

const Input = styled(InputContainer)`
    input {
        width: 100%;
        padding: 5px 10px;

        font-size: var(--fontSizeInput);

        outline: none;
        border-radius: 3px;
        border: 1px solid var(--BlueBell);
        
        &.error {
            border: 1px solid var(--errorColor);
        }
    }
    
`;

export default Input;
