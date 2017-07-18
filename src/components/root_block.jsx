import React, {PureComponent, cloneElement} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class RootBlock extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    };
    static displayName = 'Root Block';
    static propTypes = {
        children: PropTypes.element
    };

    render() {
        return (
            <div>
                <p>Hello world</p>
                {cloneElement(this.props.children, {})}
            </div>
        )
    }
}

export default RootBlock;