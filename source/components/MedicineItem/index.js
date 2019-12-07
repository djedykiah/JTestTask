//Core
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';

//Styles
import styled from 'styled-components';

//Actions
import { showModal } from '../../store/reducers/modals/actions';

function MedicineItemContainer ({ className, code, name, price }) {
    const dispatch = useDispatch();

    const _handleEditClick = () => {
        dispatch(showModal({ type: 'MODAL_EDIT' }));
    };

    const _handleDeleteClick = () => {
        console.log('delete');
    };

    return (
        <div className = { className }>
            <div className = 'item-info'>
                <div>{code}</div>
                <div>{name}</div>
                <div>{price}</div>
            </div>
            <div className = 'item-actions'>
                <Button type = 'primary' onDoubleClick = { _handleEditClick }>Edit</Button>
                <Button type = 'danger' onClick = { _handleDeleteClick }>Delete</Button>
            </div>
        </div>
    );
}

const MedicineItem = styled(MedicineItemContainer)`
    display: flex;

    .item-info {
        display: flex;
    }
`;

MedicineItem.propTypes = {

};

export default MedicineItem;
