// Core
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';
import { PersistGate } from 'redux-persist/lib/integration/react';

//Components
import { Loading } from 'components';

// Intro
import App from './app';

// Styles
import Reset from 'styled-reset';

// Store
import { store, history, persistor } from './store';

const GlobalStyle = createGlobalStyle`
    ${Reset}
    :root {
        /* HEX */
        --primaryColor: #108064;
        --primaryColorLight: #58CA71;
        --primaryColorDark: #0B664F;
        --primaryTextColor: #3E3E59;
        --primaryTextColorLight: #999;
        --errorColor: #FF6363;
        --white: #fff; 
        --borderColor: #E0E1E2;
        --paletteColor1: #5044bd;
        --MineShaft: #333333;
        --White: #ffffff;
        --Alabaster: #F9F9F9;
        --BlueBell: #99A2CD;
        --BrightSun: #FECB45;
        --Valencia: #D73649;
        --MountainMeadow: #0FBFA5;
        --Victoria: #4e4c93;
        --Deluge: #835ead;
        --Purple: #6000B4;
        --CodGray: #1a1a1a;
        --Monza: #d0021b;
        --DustyGray: #9b9b9b;
        --AzureRadiance: #0076ff;
        --Alto: #cfcfcf;
        --PurpleHeart: #712dc3;
        --Iris: #5d51c4;
        --BlueMarguerite: #6F64CA;
        --BlueViolet: #4D40BC;
        
        /* RGBA */
        --rgbaColor1: rgba(0, 0, 0, 0.1);
        --Boulder: rgba(125, 125, 125, 0.5);

        /* Gradients */
        --gradient1: linear-gradient(var(--paletteColor1), var(--paletteColor1));
        --navGradient: linear-gradient(132deg, var(--Deluge), var(--Victoria)); 
        
        /* Shadows */
        --Shadow: 0px 8px 32px rgba(62, 62, 89, 0.12);

        /* Typography */
        --primaryFont: 'Roboto', sans-serif;
        --fontSizePlain: 15px;
        --lineHeightPlain: 2.1;
        --fontSizeCaption: 11px; 
        --lineHeightCaption: 1.6; 
        --fontSizeInput: 13px;
        --lineHeightInput: 1.34; 

        /* z-index */ 
        --z-element: 100;
        --z-dropdown: 200;
        --z-footer: 300;
        --z-header: 400;
        --z-modal: 500;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: var(--primaryFont);
        font-size: 15px;
        line-height: 1.5;
        overflow-x: hidden
    } 

    html {
        position: relative;
        box-sizing: border-box;
        min-height: 100%; 
    }   

    *, *::before, *::after {
        box-sizing: inherit
    }
    ::-ms-clear {
        display: none
    } 

    img {
        max-width: 100%;
    }

    p {
        margin-bottom: 0.5em;
        
        &:last-child {
            margin-bottom: 0;
        }
    }

    .l-wrapper {
        margin: 0 auto;
        max-width: 1190px;
        padding: 0 15px
    } 

    .d-flex {
        display: flex;
        justify-content: space-between;
    }

    a {
        color: inherit; 
        text-decoration:  none
    }
    }
`;

render(
    <Provider context = { ReactReduxContext } store = { store }>
        <ConnectedRouter context = { ReactReduxContext } history = { history }>
            <Fragment>
                <GlobalStyle />
                <PersistGate loading = { <Loading /> } persistor = { persistor }>
                    <App />
                </PersistGate>
            </Fragment>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
