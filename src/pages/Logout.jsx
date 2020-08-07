import React from 'react';

import { Redirect } from '@reach/router';
import { logout } from '../store/actions/authentication';
import { connect } from 'react-redux';

class LogoutPage extends React.Component {

    componentWillMount() {
        this.props.dispatch(logout());
    }

    render() {
        return (
            <Redirect to="/signin" noThrow />
        );
    }

}

export default connect()(LogoutPage);