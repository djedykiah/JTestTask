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
import { media } from 'helpers';

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

    @media ${media.xs} {
        padding: 15px 10px;
        flex-direction: column;
        align-items: flex-start;
    }

    .item-info {
        display: flex;
        flex: 1;
        width: 100%;

        @media ${media.xs} {
            flex-wrap: wrap
        }

        &-item {
            min-width: 20%;
            margin-right: 10px;
            p {
                text-overflow: ellipsis;
                overflow: hidden;
            }
            @media ${media.xs} {
                min-width: 30%;

                &:nth-child(2) {
                    order: 1;
                    min-width: 100%
                }
            } 
        }
    }

    .item-actions {
        margin-left: auto;
        white-space: nowrap;

        button {
            margin-left: 15px;
        }

        @media ${media.xs} {
            margin-left: 0;
            margin-top: 20px;
            button {
                margin-left: 0;
                margin-right: 5px;
            }
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
