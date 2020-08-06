import React from 'react';
import { Route, Redirect } from '@reach/router';

export default ({ component: Component, ...rest }) => {

    if (localStorage.getItem('user')) {
        return <Component {...rest} />
    } else {
        return <Redirect to='/signin' noThrow/>;
    }

}