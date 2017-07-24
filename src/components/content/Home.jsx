import React, {PureComponent} from 'react';
import _ from 'lodash';

import {CONTENT_CHUNK, GALLERY_HOME} from "../Constants"

class Home extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Home Page';
    static propTypes = {};

    componentDidMount() {
        document.title = "Главная страница";
        (function($) {
            $('#camera_wrap_4').camera({
                height: '600',
                loader: 'bar',
                pagination: false,
                thumbnails: false,
                hover: false,
                opacityOnGrid: false,
            });
        }) (jQuery)
    };

    render() {
        let groupelement = _.chunk(CONTENT_CHUNK, 3);

        return (
            <div>
                <header id="head">
                    <div className="container">
                        <div className="fluid_container">
                            <div className="camera_wrap camera_emboss pattern_1" id="camera_wrap_4">
                                {_.map(GALLERY_HOME, (value, key) =>
                                    <div key={key} data-src={require('../../img/slider_home/'+ value)}/>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                <section className="container">
                    <div className="row">
                        <div className="section-heading">
                            <h2>Почему с нами?</h2>
                        </div>
                        {_.map(groupelement, (valuechunk, keychunk) =>
                            <div key={keychunk} className="row">
                                {_.map(valuechunk, (value, key) =>
                                    <div key={key} className="col-md-4">
                                        <div className="featured-box">
                                            <i className={"fa fa-2x"}>
                                                <img src={require("../../img/ico/" + value.imageStyle)}/>
                                            </i>
                                            <div className="text">
                                                <h3>{value.title}</h3>
                                                <p>{value.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>

                <section className="news-box">
                    <div className="container">
                        <div className="row">
                            <div className="section-heading">
                                <h2>НАМ ОЧЕНЬ ВАЖНО ВАШЕ МНЕНИЕ!</h2>
                                <p>
                                    Руководство компании «ПромоМастер Украина» всегда открыто для диалога.
                                    Мы всегда готовы выслушать от Вас любые предложения или критические замечания, дорогие наши партнеры и клиенты!
                                    Дорожим своей репутацией и стремимся к тому, чтобы наше сотрудничество было максимально комфортным.
                                    Давайте сотрудничать! Вы будете довольны результатом.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Home;