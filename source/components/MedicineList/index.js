//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Firebase
import { getMedicines } from 'firebase/firebase.js';

//Actions
import { setMedicines } from 'store/reducers/medicines/actions';
import { showModal } from 'store/reducers/modals/actions';

//Components
import MedicineItem from 'components/MedicineItem/index.js';
import Loading from 'components/Loading';

//Instruments
import { api } from 'API';
import { update } from 'immutable';

const mapStateToProps = (state) => {
    return {
        items: state.medicines.get('items'),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            setMedicines,
            showModal,
        },
        dispatch
    ),
});

@connect(mapStateToProps, mapDispatchToProps)
class MedicineList extends Component {

    componentDidMount () {
        const { props } = this;

        api.med.getMedicines().then((data) => props.actions.setMedicines(data));
    }

    render () {
        const { props } = this;

        if (props.items.length === 0) {
            return <div>no items found</div>;
        }

        return (
            <div>
                {props.items.map((item, index) => {
                    return (<MedicineItem
                        key = { Number(new Date().getTime()) + index }
                        { ...item }
                    />);
                })}

            </div>
        );
    }
}

export default MedicineList;
