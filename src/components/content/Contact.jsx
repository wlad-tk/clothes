import React, {PureComponent} from 'react';

class Contact extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Contact';
    static propTypes = {};

    componentDidMount() {document.title = "Контакты";};

    render() {
        return (
            <div>
                <header id="head" className="secondary-contact"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="section-title">Украина</h3>
                            <div className="contact-info">
                                <h5>Адрес</h5>
                                <p>Ул. Жукова, 9 Запорожье </p>

                                <h5>CEO & FOUNDER</h5>
                                <p>Козляковский Максим</p>

                                <h5>Email</h5>
                                <p>max@promomaster.biz</p>

                                <h5>Телефон</h5>
                                <p>+38 067 614 2930</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="section-title">Украина</h3>
                            <div className="contact-info">
                                <h5>Адрес</h5>
                                <p>Ул. Жукова, 9 Запорожье </p>

                                <h5>Начальник производства</h5>
                                <p>Харченко Юлия</p>

                                <h5>Email</h5>
                                <p>poshiv@promomaster.biz</p>

                                <h5>Телефон</h5>
                                <p>+38 095 549 6704</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="section-title">Украина</h3>
                            <div className="contact-info">
                                <h5>Адрес</h5>
                                <p>Ул. Жукова, 9 Запорожье </p>

                                <h5>Шеф дизайн-студии</h5>
                                <p>Тарасов Евгений</p>

                                <h5>Email</h5>
                                <p>design@promomaster.biz</p>

                                <h5>Телефон</h5>
                                <p>+38 067 735 9246</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;