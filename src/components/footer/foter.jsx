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
                                        <Link to='/' activeClassName="active">Главная</Link> |
                                        <Link to='/gallery' activeClassName="active">Галерея</Link> |
                                        <Link to='/tailoring' activeClassName="active">Пошив одежды</Link> |
                                        <Link to='/print' activeClassName="active">Печать на ткани</Link> |
                                        <Link to='/contact' activeClassName="active">Контакты</Link>
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