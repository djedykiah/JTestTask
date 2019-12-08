// Core
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

//Components
import MedicineList from 'components/MedicineList/index.js';

//Actions
import { showModal } from 'store/reducers/modals/actions';

const Home = (props) => {
    const dispatch = useDispatch();

    const _handleAddClick = () => {

        dispatch(showModal({ type: 'MODAL_ADD' }));
    };

    return (
        <>
            <h1>Medicine list</h1>
            <MedicineList />
            <Button type = 'primary' onClick = { _handleAddClick }>add</Button>
        </>
    );
};

export default Home;
