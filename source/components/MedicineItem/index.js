//Core
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';

//Styles
import styled from 'styled-components';

//Components
import { Typography } from 'components';

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
                <div className = 'item-info-item'>
                    <Typography as = 'div' color = 'var(--primaryTextColorLight)' size = 'caption'>Code</Typography>
                    <Typography color = 'var(--primaryTextColor)' size = 'h3'>{code}</Typography>
                </div>
                <div className = 'item-info-item'>
                    <Typography as = 'div' color = 'var(--primaryTextColorLight)' size = 'caption'>Name</Typography>
                    <Typography color = 'var(--primaryTextColor)' size = 'h3'>{name}</Typography>
                </div>
                <div className = 'item-info-item'>
                    <Typography as = 'div' color = 'var(--primaryTextColorLight)' size = 'caption'>Price</Typography>
                    <Typography color = 'var(--primaryTextColor)' size = 'h3'>{price}</Typography>
                </div>
            </div>
            <div className = 'item-actions'>
                <Button size = 'large' type = 'primary' onDoubleClick = { _handleEditClick }>Edit</Button>
                <Button size = 'large' type = 'danger' onClick = { _handleDeleteClick }>Delete</Button>
            </div>
        </div>
    );
}

const MedicineItem = styled(MedicineItemContainer)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 35px;
    margin-bottom: 25px;
    box-shadow: var(--Shadow);
    &:last-child {
        margin-bottom: 25px;
    }

    .item-info {
        display: flex;
        flex: 1;

        &-item {
            min-width: 20%;
        }
    }

    .item-actions {
        margin-left: auto;

        button {
            margin-left: 15px;
        }
    }
`;

MedicineItemContainer.propTypes = {
    className: PropTypes.string.isRequired,
    data:      PropTypes.shape({
        code:  PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }),
};

export default MedicineItem;
