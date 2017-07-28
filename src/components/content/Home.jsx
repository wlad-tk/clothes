import React, {PureComponent} from 'react';
import _ from 'lodash';

import {Carousel} from 'react-responsive-carousel';
import '../../style/css/carousel/carousel.less';

import {CONTENT_CHUNK, GALLERY_HOME} from "../Constants"

class Home extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Home Page';
    static propTypes = {};

    componentDidMount() {
        document.title = "Главная страница";
    };

    render() {
        let groupelement = _.chunk(CONTENT_CHUNK, 3);

        return (
            <div>
                <Carousel interval={2500}
                          showArrows={true}
                          showStatus={false}
                          showThumbs={false}
                          autoPlay
                          infiniteLoop
                          dynamicHeight
                          emulateTouch
                >
                    {_.map(GALLERY_HOME, (value, key) =>
                        <div key={key} className="home-galery">
                            <img src={require('../../img/slider_home/'+ value)}/>
                            <div style={{ backgroundImage: "url(" + require('../../img/slider_home/'+ value) + ")" }}/>
                        </div>
                    )}
                </Carousel>

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