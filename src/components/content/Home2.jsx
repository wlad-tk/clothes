import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Home2 extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Home Page2';
    static propTypes = {};

    render() {
        return (
            <div ref="Home2" id="Home2">
                <p>Element</p>
            </div>
        )
    }
}
export default Home2;