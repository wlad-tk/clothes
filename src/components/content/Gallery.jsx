import React, {PureComponent} from 'react';

import ImageGallery from "./ImageGallery"

class Gallery extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Gallery';
    static propTypes = {};

    render() {
        return (
            <div>
                <header id="head" className="progect">
                    {/*<div className="container">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-sm-8"/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </header>
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <section id="portfolio" className="page-section section appear clearfix">
                                <br />
                                <p>«ПромоМастерУкраина» предлагает комплексные решения – от разработки дизайна одежды, подбора тканей, фасонов и размеров и до нанесения логотипа Вашего предприятия. При этом мы можем нанести Ваш логотип на ткань любым из способов, применяемых в современной практике.</p>
                                <br />

                                <div className="row">
                                    <nav id="filter" className="col-md-12 text-center">
                                        <ul>
                                            <li><a href="#" className="current btn-theme btn-small" data-filter="*">Всё</a></li>
                                            <li><a href="#" className="btn-theme btn-small" data-filter=".vest">Жилеты и куртки</a></li>
                                            <li><a href="#" className="btn-theme btn-small" data-filter=".t_shirts">Футболки и фартуки</a></li>
                                            <li><a href="#" className="btn-theme btn-small" data-filter=".sweatshirts">Кофты и регланы</a></li>
                                            <li><a href="#" className="btn-theme btn-small" data-filter=".baby_clothes">Детская одежда</a></li>
                                            <li><a href="#" className="btn-theme btn-small" data-filter=".prints">Виды нанесения</a></li>
                                        </ul>
                                    </nav>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="portfolio-items isotopeWrapper clearfix" id="3">
                                                <ImageGallery/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Gallery;