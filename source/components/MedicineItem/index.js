//Core
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';

//Styles
import styled from 'styled-components';

//Actions
import { showModal } from 'store/reducers/modals/actions';
import { deleteMedicine, editMedicine } from 'store/reducers/medicines/actions';

//Instruments
import { api } from 'API';

function MedicineItemContainer ({ className, ...data }) {
    const dispatch = useDispatch();

    const { id, code, name, price } = data;

    const _handleEditClick = () => {
        dispatch(editMedicine(data));
        dispatch(showModal({ type: 'MODAL_EDIT' }));
    };

    const _handleDeleteClick = () => {
        api.med.deleteMedicine(id).then(() => {
            dispatch(deleteMedicine(id));
        });
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
