// Types
import { types } from './types';

export const showModal = (payload) => {
    return (
        {
            type: types.SHOW_MODAL,
            payload,
        }
    );
};

export const showModalAdd = () => {
    return {
        type: types.SHOW_MODAL_ADD,
    };
};
export const showModalEdit = () => {
    return {
        type: types.SHOW_MODAL_EDIT,
    };
};

export const hideModal = () => {
    return {
        type: types.HIDE_MODAL,
    };
};
