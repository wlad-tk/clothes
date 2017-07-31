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

    componentDidMount() {
        let widget_id = 'vy9cavgAjm',
            d=document,
            w=window;
        const l = () => {
                let s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//code.jivosite.com/script/widget/'+widget_id;
                let ss = document.getElementsByTagName('script')[0];
                ss.parentNode.insertBefore(s, ss);
            };
        if(d.readyState==='complete'){l();}
        else{
            if(w.attachEvent){w.attachEvent('onload',l);}
            else{w.addEventListener('load',l,false);}
        }
    }

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