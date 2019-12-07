import styled from 'styled-components';

export const Typography = styled.p`
    line-height: 1.15;
    font-family: var(--primaryFont);
    display: ${(props) => props.inline ? 'inline-block' : 'block'};
    font-weight: ${(props) => props.bold ? '600' : '500'};
    color: ${(props) => props.color || ''};
    text-transform: ${(props) => props.uppercase ? 'uppercase' : ''};
    font-size: ${({ size }) =>
        ({
            plain:   'var(--fontSizePlain)',
            caption: 'var(--fontSizeCaption)',
            input:   'var(--fontSizeInput)',
        }[size])};
    line-height: ${({ size }) =>
        ({
            plain:   'var(--lineHeightPlain)',
            caption: 'var(--lineHeightCaption)',
            input:   'var(--lineHeightInput)',
        }[size])};
`;
