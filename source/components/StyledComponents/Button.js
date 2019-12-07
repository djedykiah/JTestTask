// Core
import styled from 'styled-components';

export const Button = styled.button`
    width: ${({ block }) => block ? '100%' : 'auto'};
    margin: 15px 0;
    padding: 15px 18px;
    line-height: 1;
    border-radius: 0;

    svg {
        margin-right: 10px;
    }
    div {
        display: flex;
        align-items: center;
    }

    background-color: ${({ theme }) =>
        ({
            primary:   'var(--primaryColor)',
            secondary: 'transparent',
            light:     'transparent',
            white:     'var(--white)',
        }[theme])};

    color: ${({ theme }) =>
        ({
            primary:   'var(--white)',
            secondary: 'var(--primaryTextColor)',
            light:     'var(--white)',
            white:     'var(--primaryTextColor)',
        }[theme])};
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    border: ${({ theme }) =>
        ({
            primary:   'var(--primaryColor) 1px solid',
            secondary: 'var(--primaryTextColor) 1px solid',
            light:     'var(--white) 1px solid',
            white:     'var(--white) 1px solid',
        }[theme])};
    user-select: none;
    text-transform: uppercase;
    transition: all 0.2s;

    &:hover {
        background-color: ${({ theme }) =>
        ({
            primary:   'var(--primaryColorLight)',
            secondary: '',
            light:     'var(--white)',
            white:     'var(--white)',
        }[theme])};
        border: ${({ theme }) =>
        ({
            primary:   'var(--primaryColorLight) 1px solid',
            secondary: 'var(--primaryColor) 1px solid',
            light:     'var(--white) 1px solid',
            white:     'var(--white) 1px solid',
        }[theme])};
        color: ${({ theme }) =>
        ({
            primary:   'var(--white)',
            secondary: 'var(--primaryColor)',
            light:     'var(--primaryColor)',
            white:     'rgba(var(--white))',
        }[theme])};
        text-decoration: none;
    }

    &:focus {
        outline: none;
    }

    &:active {
        outline: none;
        background-color: ${({ theme }) =>
        ({
            primary:   'var(--primaryColorDark)',
            secondary: '',
            light:     '',
            white:     'var(--white)',
        }[theme])};
        border: ${({ theme }) =>
        ({
            primary:   'var(--primaryColorDark) 1px solid',
            secondary: 'var(--primaryColor) 1px solid',
            light:     'var(--primaryColor) 1px solid',
            white:     'var(--white) 1px solid',
        }[theme])};
        color: ${({ theme }) =>
        ({
            primary:   'var(--white)',
            secondary: 'var(--primaryColor)',
            light:     'var(--primaryColor)',
            white:     'var(--primaryTextColor)',
        }[theme])};
    }
`;
