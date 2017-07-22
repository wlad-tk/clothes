import React, {PureComponent} from 'react';

class Gallery extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Gallery';
    static propTypes = {};

    render() {
        return (
            <div>
                <p>Element</p>
            </div>
        )
    }
}
export default Gallery;