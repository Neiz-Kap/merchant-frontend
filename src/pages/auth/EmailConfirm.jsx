import React from 'react';
import { Redirect } from '@reach/router';

export default class EmailConfirm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { token } = this.props;

        fetch(`http://13.74.170.114:3001/api/v1/auth/confirm/${token}`, { method: 'GET' })
            .then(data => {
                console.log(data);
            });
    }

    render() {
        return (
            <Redirect to='/signin' noThrow/>
        );
    }

}