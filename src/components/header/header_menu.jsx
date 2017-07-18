import React, {PureComponent} from 'react';
import { Link } from 'react-router'

class HeaderMenu extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Header Menu';
    static propTypes = {};

    render() {
        return (
            <div>
                <div id="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-7">
                                <div className="text">
                                    <p>Всегда с Вами : (067) 614 2930</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-5">
                                <div className="social text-center pull-right">
                                    <a href="#"><i className="fa fa-twitter"/></a>
                                    <a href="#"><i className="fa fa-facebook"/></a>
                                    <a href="#"><i className="fa fa-google-plus"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <Link to='/' className="navbar-brand">
                                <img src={require('../../img/ico/logo.png')}/>
                            </Link>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav pull-right mainNav">
                                <li>
                                    <Link to='/' activeClassName="active">Галерея</Link>
                                </li>
                                <li><a href="projects.html">Галерея</a></li>
                                <li><a href="services.html">Пошив одежды</a></li>
                                <li><a href="price.html">Печать на ткани</a></li>
                                <li><a href="contact.html">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderMenu;