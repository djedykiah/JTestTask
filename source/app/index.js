// Core
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// Route
import { Private, Public } from '../navigation';

// Actions
import { initializeAsync } from '../store/reducers/ui/actions';

// Components
import { Loading } from '../components';

// Styles
const GlobalStylePublic = createGlobalStyle`
    html {
        background-color: #fff;
    }
`;
const GlobalStylePrivate = createGlobalStyle`
    html {
        background-color: #fff;
    }
`;

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
    isInitialized:   state.ui.get('isInitialized'),
    userLanguage:    state.ui.get('userLanguage'),
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
            userLanguage,
            isAuthenticated,
            isInitialized
        } = this.props;

        if (!isInitialized) {
            return (<Loading />);
        }

        return (
            isAuthenticated ?
                <Fragment>
                    <GlobalStylePrivate />
                    <Private userLanguage = { userLanguage } />
                </Fragment> :
                <Fragment>
                    <GlobalStylePublic />
                    <Public
                        userLanguage = { userLanguage }
                    />
                </Fragment>
        );
    }
}

export default App;
