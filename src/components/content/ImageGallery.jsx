import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Masonry from 'masonry-layout'

const galleryHome = {
    'vest': [
        "2.jpg",
        "3.jpg",
        "17.jpg",
        "17_1.jpg",
        "19.jpg",
        "19_1.jpg",
        "19_2.jpg",
        "20.jpg",
        "20_1.jpg",
        "22.jpg",
        "23.jpg",
        "28.jpg",
        "28_1.jpg",
        "28_1.jpg"
    ],
    't_shirts': [
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '9.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '16.jpg',
        '30.jpg'
    ],
    'sweatshirts': [
        '24.jpg',
        'promo_022.jpg',
        'promo_025.jpg'
    ],
    'baby_clothes': [
        'kid_promo_01.jpg',
        'kid_promo_02.jpg',
        'kid_promo_03.jpg',
        'kid_promo_04.jpg',
        'kid_promo_05.jpg',
        'kid_promo_06.jpg',
        'kid_promo_07.jpg',
        'kid_promo_08.jpg',
        'kid_promo_09.jpg',
        'kid_promo_10.jpg',
        'kid_promo_11.jpg',
        'kid_promo_12.jpg'
    ],
    'prints': [
        '27.jpg',
        '32.jpg',
        '36.jpg',
        '37.jpg',
        '38.jpg',
        'promo_009.jpg'
    ]
};

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
        if (!collection) {return _.map(galleryHome, (value, key) => this.getImages(key))}

        return _.map(galleryHome[collection], (value, key) =>
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