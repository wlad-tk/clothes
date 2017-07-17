import React, {PureComponent, PropTypes, cloneElement} from 'react';
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