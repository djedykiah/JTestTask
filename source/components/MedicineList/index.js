//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Actions
import { setMedicines } from 'store/reducers/medicines/actions';

//Components
import { Typography, MedicineItem } from 'components';

//Instruments
import { api } from 'API';

const mapStateToProps = (state) => {
    return {
        items: state.medicines.get('items'),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            setMedicines,
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
            return <Typography size = 'h3'>no items found</Typography>;
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
