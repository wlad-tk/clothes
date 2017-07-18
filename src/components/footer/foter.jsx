import React, {PureComponent} from 'react';
import { Link } from 'react-router'

class FooterMenu extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Footer';
    static propTypes = {};

    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="social text-center">
                        <a href="#"><i className="fa fa-twitter"/></a>
                        <a href="#"><i className="fa fa-facebook"/></a>
                        <a href="#"><i className="fa fa-google-plus"/></a>
                    </div>
                    <div className="clear"/>
                </div>
                <div className="footer2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 panel">
                                <div className="panel-body">
                                    <p className="simplenav">
                                        <a href="index.html">Главная</a> |
                                        <a href="projects.html">Галерея</a> |
                                        <a href="services.html">Пошив одежды</a> |
                                        <a href="price.html">Печать на ткани</a> |
                                        <a href="contact.html">Контакты</a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 panel">
                                <div className="panel-body">
                                    <p className="text-right">
                                        Copyright &copy; 2015. Template by <a href="http://webthemez.com/" rel="develop">WebThemez.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterMenu;