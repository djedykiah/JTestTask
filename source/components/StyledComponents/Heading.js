import styled from 'styled-components';
import { media } from 'helpers';

export const Heading = styled.p`
    font-weight: bold;
    line-height: 1.15;
    font-family: var(--primaryFont);
    margin-bottom: 1em;
    color: ${(props) => props.color || 'var(--primaryTextColor)'};
    font-size: ${({ size }) =>
        ({
            1: '50px',
            2: '30px',
            3: '20px',
            4: '17px',
            5: '14px',
            6: '12px',
        }[size])};
    @media ${media.md} {
        font-size: ${({ size }) =>
        ({
            1: 'calc( (100vw - 480px)/(1280 - 480) * (50 - 28) + 28px)',
            2: 'calc( (100vw - 480px)/(1280 - 480) * (30 - 22) + 22px)',
            3: 'calc( (100vw - 480px)/(1280 - 480) * (20 - 18) + 18px)',
            4: 'calc( (100vw - 480px)/(1280 - 480) * (17 - 15) + 15px)',
            5: 'calc( (100vw - 480px)/(1280 - 480) * (14 - 12) + 12px)',
            6: '12px',
        }[size])};
    }
`;
