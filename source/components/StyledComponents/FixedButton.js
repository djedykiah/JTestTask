// Core
import React from 'react';
import styled from 'styled-components';

const FixedButtonContainer = (props) => {
    return <div className = { props.className }>{props.children}</div>;
};

export const FixedButton = styled(FixedButtonContainer)`
   position: fixed;
   bottom: 50px;
   right: 50px;
`;
