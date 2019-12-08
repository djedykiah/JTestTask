//Core
import React from 'react';
import ReactTextarea from 'react-textarea-autosize';

//Styles
import styled from 'styled-components';

//Components
import { Typography } from 'components';

const TextareaContainer = ({
    className,
    input,
    disabled,
    meta: { touched, error },
    placeholder,
}) => {

    const inputAttr = { ...input, placeholder, disabled };

    const isError = touched && error;

    const errorClassName = isError ? 'error' : null;

    return (
        <label
            className = { className }>
            <ReactTextarea
                { ...inputAttr }
                className = { errorClassName }
                minRows = { 4 }
            />
            {
                isError &&
                <Typography as = 'span' color = 'var(--errorColor)' size = 'caption' >{error}</Typography>
            }
        </label>
    );
};

const Textarea = styled(TextareaContainer)`
    textarea {
        width: 100%;
        padding: 5px 10px;
        height: 70px;
        resize: none;

        font-size: var(--fontSizeInput);

        outline: none;
        border-radius: 3px;
        border: 1px solid var(--BlueBell);
        &.error {
            border: 1px solid var(--errorColor);
        }
    }
    
`;

export default Textarea;
