import * as React from 'react';
import { Col, Layout, Row, Space } from 'antd';
import './AppFooter.css';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import logoImage from '../../static/images/logo-white.svg';

const { Footer } = Layout;

export const AppFooter = () => {
  return (
    <Footer className="AppFooter">
      <div className="AppFooter__links">
        <Row className="AppFooter__links">
          <Col span={6}>
            <img src={logoImage} alt="" className="AppFooter__logo" />
          </Col>
          <Col className="AppFooter__item" offset={6} span={4}>
            <div>
              <b>Dotacje</b>
            </div>
            <div>
              <a href="http://zdunskawola.pl/pl/menu-mieszkancy/programy-miejskie/stop-smog">Stop Smog</a>
            </div>
            <div>
              <a href="https://czystepowietrze.gov.pl/">Czyste powietrze</a>
            </div>
          </Col>
          <Col className="AppFooter__item" span={4}>
            <div>
              <b>Informacje prawne</b>
            </div>
            <div>
              <Link to={routes.privacyPolicy}>Politykę prywatności</Link>
            </div>
            <div>
              <a href={'https://www.zdunskawola.pl/pl/'}>Politykę cookies</a>
            </div>
          </Col>
          <Col className="AppFooter__item" span={4}>
            <div>
              <b>Bądź na bieżąco</b>
            </div>
            <div>
              <a href="https://www.facebook.com/ZdunskaWolaNM/">
                <div className="AppFooter__iconLink">
                  <span className="AppFooter__iconLinkText">Facebook</span>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </div>

      <div className="AppFooter__description">Hackathon dla Miast</div>
    </Footer>
  );
};
