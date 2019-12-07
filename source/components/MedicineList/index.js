//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Firebase
import { getMedicines } from 'firebase/firebase.js';

//Actions
import { setMedicines } from 'store/reducers/medicines/actions';

//Components
import MedicineItem from 'components/MedicineItem/index.js';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            setMedicines,
        },
        dispatch
    ),
});

@connect(null, mapDispatchToProps)
class MedicineList extends Component {

    componentDidMount () {
        const { props } = this;

        getMedicines().then((data) => props.actions.setMedicines(data));
    }

    render () {
        return (
            <div>
                <MedicineItem />
            </div>
        );
    }
}

export default MedicineList;
