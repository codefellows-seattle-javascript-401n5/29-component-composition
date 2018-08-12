import React, {Component, Fragment} from 'react';

import '../../style/app.scss';

export default class Landing extends Component {
    render() {
        return (
            <Fragment>
                <h2>Notes App</h2>
                <p>This is an app for creating and updating notes. Go to Dashboard to get started.</p>
            </Fragment>
        );
    }
}

