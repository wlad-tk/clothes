import React, {PureComponent} from 'react';

class Printing extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Printing';
    static propTypes = {};

    componentDidMount() {document.title = "Печать на ткани";};

    render() {
        return (
            <div>
                {/*<header id="head" className="secondary"/>*/}

                <img src={require("../../img/images_header/silk_001.jpg")} className="header-images prints"/>
                <img src={require("../../img/images_header/silk_001.jpg")} className="header-images-mobile prints"/>

                <div className="container">
                    <div className="row">
                        <section className="col-sm-12 maincontent">
                            <br/>
                            <br/>
                            <p>
                                Печать на тканевых материалах выполняется вытравными красками на водной основе,
                                водными и пластизолевыми красками.
                                Достоинства и недостатки присуще каждому виду красок.
                                В работе, наша компания использует только высококачественные и безвредные для
                                человеческого здоровья материалы. Декорирование одежды реализуется двумя методами –
                                прямой печатью и термотрансферным переносом.
                                Первый способ выполняется нанесением краски на ткань с помощью трафаретной печати.
                                Второй вариант задействует в процесс печати промежуточный носитель – краска
                                наносится на трансферную бумагу, а затем, под воздействием термотрансферного пресса,
                                переносит изображение с бумаги на ткань.
                                Преимущества и недостатки присутствуют у обоих способов печати.
                            </p>
                            <p>
                                Термотрансфер снижает риски финансовых потерь при отсутствии спроса на товар,
                                ведь напечатанное на носитель изображение легко перенести на другой товар.
                                Пуговицы, молнии, выступающие элементы на одежде – не помеха для
                                трансферного переноса, как не важен и материал одежды.
                            </p>
                        </section>
                    </div>
                </div>

                <section className="container">
                    <div className="row flat">
                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <ul className="plan plan1">
                                <li className="plan-name">Краски на водной основе</li>
                                <li className="plan-price">
                                    <strong>
                                        <b>Преимущества:</b>
                                        <br/>
                                        •  мягкость отпечатка (для светлых тканей).<br/>
                                        •  высокая стойкость к стирке. <br/>
                                        •  можно гладить по рисунку.<br/>

                                        <b>Недостатки:</b>
                                        <br/>
                                        •  мягкость отпечатка, заметна только на светлых футболках. <br/>
                                        •  недостаточное качество растровой печати.<br/>
                                    </strong>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <ul className="plan plan1">
                                <li className="plan-name">Пластизолевые краски</li>
                                <li className="plan-price">
                                    <strong>
                                        <b>Преимущества:</b>
                                        <br/>
                                        •  яркие, насыщенные цвета красок.<br/>
                                        •  более быстрый и бюджетный способ печати.<br/>
                                        •  отличные результаты при печати на темных изделиях.<br/>
                                        •  хорошее воспроизведение цветов по PANTONE.<br/>

                                        <b>Недостатки:</b>
                                        <br/>
                                        •  нельзя гладить по рисунку<br/>
                                    </strong>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <ul className="plan plan1">
                                <li className="plan-name">Вытравные краски на водной основе</li>
                                <li className="plan-price">
                                    <strong>
                                        <b>Преимущества:</b>
                                        <br/>
                                        •  мягкость отпечатка (даже на темных изделиях). <br/>
                                        •  можно гладить по рисунку.<br/>

                                        <b>Недостатки:</b>
                                        <br/>
                                        •  трудно подобрать цвет по PANTONE (т.к. цвет во многом зависит от красителя
                                        используемого в изделии). <br/>
                                        •  недостаточное качество растровой печати.
                                        <br/>
                                    </strong>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <ul className="plan plan1">
                                <li className="plan-name">Термотрансфер</li>
                                <li className="plan-price">
                                    <strong>
                                        <p>У популярнейшего типа переноса изображений на ткань нет недостатков.
                                            Рисунки на одежде устойчивы к глажке и стирке, 100% передают цвета
                                            по PANTONE, нет проблем с насыщенностью даже на темных изделиях.
                                            Найти отличие между термотрансфером и прямой печатью сможет только эксперт.
                                        </p>
                                    </strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Printing;