import React, {PureComponent, cloneElement} from 'react';
import PropTypes from 'prop-types';

import HeaderMenu from './header/header_menu';
import FooterMenu from './footer/foter';

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
                <HeaderMenu/>
                {cloneElement(this.props.children, {})}
                <FooterMenu/>
            </div>
        )
    }
}

export default RootBlock;