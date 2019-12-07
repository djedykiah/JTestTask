import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactTextarea from 'react-textarea-autosize';

const Textarea = ({
    input, disabled,
    meta: { touched, error },
    placeholder, containerClassName, inputClassName, whiteMode,
}) => {

    const inputAttr = { ...input, placeholder, disabled, className: `field__body ${inputClassName}` };

    const isError = touched && error;
    const isValid = touched && !error;

    return (
        <label
            className = { classNames(`field field--textarea ${containerClassName}`, {
                'field--white': whiteMode,
            }) }>
            <div className = 'field__label'>{placeholder}</div>
            <ReactTextarea
                { ...inputAttr }
            />
            {
                isError &&
                <span className = 'field__error-msg'>{error}</span>
            }
        </label>
    );
};

Textarea.propTypes = {
    containerClassName: PropTypes.string,
    disabled:           PropTypes.bool,
    inputClassName:     PropTypes.string,
    placeholder:        PropTypes.string,
    whiteMode:          PropTypes.bool,
};

Textarea.defaultProps = {
    containerClassName: '',
    inputClassName:     '',
    whiteMode:          false,
};

export default Textarea;
