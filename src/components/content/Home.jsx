import React, {PureComponent} from 'react';
import _ from 'lodash';

const CONTENT = [
    {
        classStyle: "cogs",
        title: "Заказ на вчера",
        text: "Владея собственным технологическим парком, нам не надо кого-то искать, идти и уговаривать что-то сделать. Мы делаем всё сами. Поэтому если говорим клиенту, что продукт будет готов завтра в 9:00 утра, значит так и будет."
    },
    {
        classStyle: "leaf",
        title: "Клиентоориентированность",
        text: "Не стесняемся работать и в выходные, и в праздники, днем и ночью. И это не просто красивые слова, чтобы завлечь Вас. Приезжайте на нашу фабрику в любое время и убедитесь в этом лично."
    },
    {
        classStyle: "tachometer",
        title: "Изготовление образца",
        text: "На изготовление тестового образца мы потратим не больше семи дней."
    },
    {
        classStyle: "eye",
        title: "Комплексные решения",
        text: "Уникальность нашего предприятия заключается в том, что мы смогли собрать все существующие в природе технологии печати в одном месте. Мы не размещаем заказы на стороне. Подходим к решению любой задачи комплексно. А уже готовую продукцию прилично упакуем. У нас и для этого есть специальное оборудование."
    },
    {
        classStyle: "quote-right",
        title: "Логистика и цены",
        text: "Наш секрет в отлаженной системе логистики и гибкой ценовой политике. Мы знаем, как доставить готовую продукцию в целости и сохранности любым удобным для заказчика способом в любую точку Украины. Груз может быть доставлен в офис или на склад заказчика по его желанию. Формируя заявку, просто укажите, где и как Вы его хотите получить."
    },
    {
        classStyle: "arrows",
        title: "Огромный опыт",
        text: "У нас очень дружный коллектив, мы как одна семья. Люди очень любят свою работу и ответственно к ней относятся. Мы предоставляем каждому человеку уникальную возможность для самореализации, творчества и самосовершенствования. Высоко ценим профессионализм и надежность."
    }
];

const galleryHome = [
    "sh_p_001.jpg",
    "sh_p_003.jpg",
    "sh_p_004.jpg",
];

class Home extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Home Page';
    static propTypes = {};

    componentDidMount() {
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
        let groupelement = _.chunk(CONTENT, 3);

        return (
            <div>
                <header id="head">
                    <div className="container">
                        <div className="fluid_container">
                            <div className="camera_wrap camera_emboss pattern_1" id="camera_wrap_4">
                                {_.map(galleryHome, (value, key) =>
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
                                            <i className={"fa fa-"+ value.classStyle +" fa-2x"}/>
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