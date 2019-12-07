// Core
import React, { Component } from 'react';
import styled from 'styled-components';
import { Menu, Dropdown as DropdownAnt } from 'antd';
import PropTypes from 'prop-types';

//Components
import { Typography } from 'components';
import Icon, { iconsNames } from 'components/Icon';

//Styles
import './style.css';

class DropdownContiner extends Component {
    handleClickItem = (selected) => {
        const { props } = this;

        if (typeof props.onChange === 'function') {
            props.onChange(selected);
        }
    };

    renderItems = () => {
        const { props } = this;

        return (
            <Menu className = 'dropdown__list'>
                {props.options.map((option) => (
                    <Menu.Item
                        className = { 'dropdown__item' }
                        key = { option.attr }
                        onClick = { ({ key }) => this.handleClickItem(key) }>
                        {option.url && (
                            <a className = 'dropdown__element' href = { option.url }>
                                {option.title}
                            </a>
                        )}
                        {!option.url && (
                            <span className = 'dropdown__element'>
                                {option.title}
                            </span>
                        )}
                    </Menu.Item>
                ))}
            </Menu>
        );
    };

    render () {
        const { props } = this;

        return (
            <DropdownAnt
                className = { `${props.className}` }
                overlay = { this.renderItems }
                overlayClassName = { 'dropdown' }
                trigger = { [ 'click' ] }>
                <div className = 'dropdown__title-container'>
                    <span className = 'dropdown__title'>
                        <Typography size = { 'h3' }>{props.value}</Typography>
                    </span>
                    <span className = 'dropdown__arrow'>
                        <Icon strictSize name = { iconsNames.ARROW_DOWN } />
                    </span>
                </div>
            </DropdownAnt>
        );
    }
}

const Dropdown = styled(DropdownContiner)`
    color: #555555;
    font-size: 16px;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
        width: 25px !important;
        height: 25px !important;
    }

    cursor: pointer;

    &:focus {
        outline: none;
    }

    .dropdown__arrow {
        display: inline-flex;
        margin-top: 2px;
        margin-bottom: 3px;
    }
`;

Dropdown.propTypes = {
    options:   PropTypes.array.isRequired,
    value:     PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange:  PropTypes.func,
};

Dropdown.defaultProps = {
    value:     '',
    options:   [],
    className: '',
};

export default Dropdown;
