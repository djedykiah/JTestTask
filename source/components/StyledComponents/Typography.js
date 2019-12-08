import styled from 'styled-components';
import { media } from 'helpers';

export const Typography = styled.p`
    line-height: 1.15;
    font-family: var(--primaryFont);
    display: ${(props) => props.inline ? 'inline-block' : 'block'};
    font-weight: ${(props) => props.bold ? '600' : '500'};
    color: ${(props) => props.color || ''};
    text-transform: ${(props) => props.uppercase ? 'uppercase' : ''};
    font-size: ${({ size }) =>
        ({
            h1:      'var(--fontSizeH1)',
            h2:      'var(--fontSizeH2)',
            h3:      'var(--fontSizeH2)',
            plain:   'var(--fontSizePlain)',
            caption: 'var(--fontSizeCaption)',
            input:   'var(--fontSizeInput)',
        }[size])};
    line-height: ${({ size }) =>
        ({
            h1:      'var(--lineHeightH1)',
            h2:      'var(--lineHeightH2)',
            h3:      'var(--lineHeightH2)',
            plain:   'var(--lineHeightPlain)',
            caption: 'var(--lineHeightCaption)',
            input:   'var(--lineHeightInput)',
        }[size])};
    @media ${media.md} {
        font-size: ${({ size }) =>
        ({
            h1:      'calc( (100vw - 480px)/(1280 - 480) * (50 - 28) + 28px)',
            h2:      'calc( (100vw - 480px)/(1280 - 480) * (30 - 22) + 22px)',
            h3:      'calc( (100vw - 480px)/(1280 - 480) * (20 - 18) + 18px)',
            plain:   'var(--lineHeightPlain)',
            caption: 'var(--lineHeightCaption)',
            input:   'var(--lineHeightInput)',
        }[size])};
    }
`;
