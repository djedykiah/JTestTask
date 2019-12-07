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
        placeholder,
        type,
        disabled,
        containerClassName,
        inputClassName,
        icon,
        whiteMode,
        meta: { touched, error },
    } = props;

    const inputAttr = {
        ...input,
        placeholder,
        disabled,
        type:      input.type || type,
        className: `field__body ${inputClassName}`,
    };

    const isError = touched && error;
    const isValid = touched && !error;

    return (
        <label
            className = {
                classNames(`field ${containerClassName}`,
                    {
                        'field--white':    whiteMode,
                        'field--withicon': icon,
                    })
            }>
            <input { ...inputAttr } />
            {icon}
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
    type:               'text',
    whiteMode:          false,
};

export default Input;
