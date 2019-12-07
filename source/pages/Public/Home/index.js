// Core
import React, { Component } from 'react';

//Components

import MedicineList from 'components/MedicineList/index.js';

class Home extends Component {

    render () {
        return (
            <>
                <h1>Medicine list</h1>
                <MedicineList />
            </>
        );
    }
}

export default Home;
