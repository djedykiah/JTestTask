// Core
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'antd';

//Components
import { MedicineList, Container, Typography, FixedButton } from 'components';

//Actions
import { showModal } from 'store/reducers/modals/actions';

const Home = () => {
    const dispatch = useDispatch();

    const _handleAddClick = () => {

        dispatch(showModal({ type: 'MODAL_ADD' }));
    };

    return (
        <Container>
            <Typography as = 'h1' size = 'h1'>Medicines list</Typography>
            <MedicineList />
            <FixedButton>
                <Button
                    shape = 'circle'
                    size = 'large'
                    type = 'primary'
                    onClick = { _handleAddClick }>
                    <Icon type = 'plus' />
                </Button>
            </FixedButton>
        </Container>
    );
};

export default Home;
