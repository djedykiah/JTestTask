// Core
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Styles
import 'antd/dist/antd.css';

// Route
import { Public } from 'navigation';

// Actions
import { initializeAsync } from 'store/reducers/ui/actions';

// Components
import { Loading } from 'components';
import ModalContainer from 'components/Modals/ModalContainer';

const mapStateToProps = (state) => ({
    isInitialized: state.ui.get('isInitialized'),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            initializeAsync,
        },
        dispatch
    ),
});

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

    componentDidMount () {
        this.props.actions.initializeAsync();
    }

    render () {
        const {
            isInitialized,
        } = this.props;

        if (!isInitialized) {
            return (<Loading />);
        }

        return (
            <Fragment>
                <ModalContainer />
                <Public />
            </Fragment>
        );
    }
}

export default App;
