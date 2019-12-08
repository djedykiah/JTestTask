//Core
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Field } from "react-final-form";

//Components
import { Input, Textarea, Typography } from 'components';
import Wizard from "./Wizard";

//Actions
import { addMedicine, updateMedicine } from 'store/reducers/medicines/actions';
import { hideModal } from 'store/reducers/modals/actions';

//Instruments
import { api } from 'API';

const required = (value) => value ? undefined : "Required";

const Form = (props) => {
    const dispatch = useDispatch();
    const editItem = useSelector((state) => state.medicines.get('editItem'));

    const _addMedicine = (values) => {
        api.med.addMedicine(values).then((item) => {
            values.id = item.id;

            return values;
        }).then((newItem) => {
            dispatch(addMedicine(newItem));
        }).then(dispatch(hideModal()));
    };

    const _editMedicine = (values) => {
        api.med.editMedicine(values).then(() => {
            dispatch(updateMedicine(values));
        }).then(dispatch(hideModal()));
    };

    const onSubmit = (values) => {
        if (props.type === 'add') {
            _addMedicine(values);
        } else {
            _editMedicine(values);
        }
    };

    return (
        <Wizard
            initialValues = { props.type === 'edit' ? { ...editItem } : null }
            onSubmit = { onSubmit }>
            <Wizard.Page type = { props.type }>
                <div className = 'input-group'>
                    <Typography as = 'label' color = 'var(--primaryTextColorLight)' size = 'plain' >Code</Typography>
                    <Field
                        component = { Input }
                        name = 'code'
                        type = 'text'
                        validate = { required }
                    />
                </div>
                <div className = 'input-group'>
                    <Typography as = 'label' color = 'var(--primaryTextColorLight)' size = 'plain' >Name</Typography>
                    <Field
                        component = { Input }
                        name = 'name'
                        type = 'text'
                        validate = { required }
                    />
                </div>
                <div className = 'input-group'>
                    <Typography as = 'label' color = 'var(--primaryTextColorLight)' size = 'plain' >
                        Price
                    </Typography>
                    <Field
                        component = { Input }
                        name = 'price'
                        type = 'text'
                        validate = { required }
                    />
                </div>
                <div className = 'input-group'>
                    <Typography as = 'label' color = 'var(--primaryTextColorLight)' size = 'plain' >ShelfLife</Typography>
                    <Field
                        component = { Input }
                        name = 'shelfLife'
                        type = 'text'
                        validate = { required }
                    />
                </div>
            </Wizard.Page>
            <Wizard.Page type = { props.type }>
                <div className = 'input-group'>
                    <Typography as = 'label' color = 'var(--primaryTextColorLight)' size = 'plain' >
                        CompositionAndFormOfRelease
                    </Typography>
                    <Field
                        component = { Textarea }
                        name = 'compositionAndFormOfRelease'
                        type = 'text'
                        validate = { required }
                    />
                </div>
                <div className = 'input-group'>
                    <Typography as = 'label' color = 'var(--primaryTextColorLight)' size = 'plain' >
                        Indication
                    </Typography>
                    <Field
                        component = { Textarea }
                        name = 'indication'
                        type = 'text'
                        validate = { required }
                    />
                </div>
                <div className = 'input-group'>
                    <Typography as = 'label' color = 'var(--primaryTextColorLight)' size = 'plain' >
                        Contraindications
                    </Typography>
                    <Field
                        component = { Textarea }
                        name = 'сontraindications'
                        type = 'text'
                        validate = { required }
                    />
                </div>
            </Wizard.Page>
        </Wizard>
    );
};

export default Form;
