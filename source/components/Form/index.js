/* eslint-disable jsx-a11y/accessible-emoji */
//Core
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Field } from "react-final-form";
import Wizard from "./Wizard";

//Components
import Input from 'components/StyledComponents/Input.js';
import Textarea from 'components/StyledComponents/Textarea.js';

//Actions
import { addMedicine, editMedicine, updateMedicine } from 'store/reducers/medicines/actions';

//Instruments
import { api } from 'API';

const required = value => (value ? undefined : "Required");

const Form = (props) => {
    const dispatch = useDispatch();
    const editItem = useSelector((state) => state.medicines.get('editItem'));

    const _addMedicine = (values) => {
        api.med.addMedicine(values).then(item =>  {
            values.id = item.id;
            return values
        }).then((newItem) => {
            return dispatch(addMedicine(newItem))
        })
    }

    const _editMedicine = (values) => {
        api.med.editMedicine(values).then(item =>  {
            dispatch(updateMedicine(values))
        })
    }

    const onSubmit = (values) => {
        if(props.type === 'add') {
            _addMedicine(values)
        } else {
            _editMedicine(values)
        }
    }
    return (
    
        <Wizard
            initialValues = {props.type === 'edit' ? {...editItem} : null}
            onSubmit = { onSubmit }
        >
            <Wizard.Page>
                <div>
                    <label>Codee</label>
                    <Field
                        name = "code"
                        component = { Input }
                        type = "text"
                        placeholder = "Code"
                        validate = { required }
                    />
                </div>
                <div>
                    <label>Name</label>
                    <Field
                        name = "name"
                        component = { Input }
                        type = "text"
                        placeholder = "Name"
                        validate = {required}
                    />
                </div>
                <div>
                    <label>price</label>
                    <Field
                        name="price"
                        component={Input}
                        type="text"
                        placeholder="price"
                        validate = {required}
                    />
                </div>
                <div>
                    <label>shelfLife</label>
                    <Field
                        name="shelfLife"
                        component={Input}
                        type="text"
                        placeholder="shelfLife"
                        validate = {required}
                    />
                </div>
                </Wizard.Page>
            
                <Wizard.Page>
                <div>
                    <label>compositionAndFormOfRelease</label>
                    <Field
                        name="compositionAndFormOfRelease"
                        component={Textarea}
                        type="text"
                        placeholder="compositionAndFormOfRelease:"
                        validate={required}
                    />
                </div>
                <div>
                    <label>indication:</label>
                    <Field
                        name="indication:"
                        component={Textarea}
                        type="text"
                        placeholder="indication:"
                        validate={required}
                    />
                </div>
                <div>
                    <label>сontraindications:</label>
                    <Field
                        name="сontraindications:"
                        component={Textarea}
                        type="text"
                        placeholder="сontraindications:"
                    />
                </div>
            </Wizard.Page>
        </Wizard>
    )
}

   

export default Form;
