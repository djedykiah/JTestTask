//Core
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Media
import Icon, { iconsNames } from 'components/Icon';

//Styles
import './index.scss';

const Input = (props) => {

    const {
        input,
        disabled,
        inputClassName,
        whiteMode,
        text,
        meta: { touched, error },
    } = props;

    const inputAttr = {
        ...input,
        disabled,
        type:      'checkbox',
        className: `field__body ${inputClassName}`,
    };

    const isError = touched && error;
    const isValid = touched && !error;

    return (
        <label
            className = 'check'>
            <input
                { ...inputAttr }
            />
            <div className = 'checkmark' />
            {text}
            {
                isError &&
                <span className = 'field__error-msg'>{error}</span>
            }
        </label>
    );
};

Input.propTypes = {
    containerClassName: PropTypes.string,
    whiteMode:          PropTypes.bool,
};

Input.defaultProps = {
    containerClassName: '',
    inputClassName:     '',
    whiteMode:          false,
};

export default Input;
