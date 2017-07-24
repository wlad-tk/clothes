import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Masonry from 'masonry-layout'

import { GALLERY_PROJECT } from '../Constants'

// let timeOut;

class ImageGallery extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'ImageGallery';
    static propTypes = {
        collection: PropTypes.string
    };

    componentDidMount() {
        ImageGallery.masonryReload()
    };


    static masonryReload() {
        new Masonry( '.isotopeWrapper', {
            itemSelector: '.isotopeItem',
            columnWidth: 0
        });
    }

    // masonryReload() {
    //     clearTimeout(timeOut);
    //     timeOut = setTimeout(() => {
    //         console.log('test');
    //
    //         new Masonry( '.isotopeWrapper', {
    //             itemSelector: '.isotopeItem',
    //             columnWidth: 0
    //         });
    //     }, 500);
    // }


    getImages(collection) {
        if (!collection) {return _.map(GALLERY_PROJECT, (value, key) => this.getImages(key))}

        return _.map(GALLERY_PROJECT[collection], (value, key) =>
            <article key={key} className={"col-sm-4 isotopeItem"} >
                <div className="portfolio-item">
                    <img src={require('../../img/portfolio/'+ collection +'/'+ value)} onLoad={ImageGallery.masonryReload}/>
                    <div className="portfolio-desc align-center">
                        <div className="folio-info">
                            <a href={require('../../img/portfolio/'+ collection +'/'+ value)} className="fancybox">
                                <h5>Project Title</h5>
                                <i className="fa fa-link fa-2x"/>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        )
    }

    render() {
        return (
            <div className="portfolio-items isotopeWrapper clearfix">
                {this.getImages(this.props.collection)}
            </div>
        );
    }
}

export default ImageGallery;