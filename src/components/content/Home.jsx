import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Home extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Home Page';
    static propTypes = {};

    render() {
        return (
            <div ref="Home" id="Home">
                <p>Element</p>
            </div>
        )
    }
}
export default Home;