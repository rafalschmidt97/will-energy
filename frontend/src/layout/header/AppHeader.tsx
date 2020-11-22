import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import './AppHeader.css';
import { routes } from '../../routes';
import { smoothScrollToSection } from '../../shared/utils';
import ReactGA from 'react-ga';

const { Header } = Layout;

export const AppHeader = (props: { logoImage: string }) => {
  const location = useLocation();
  React.useEffect(() => {
    smoothScrollToSection('root');

    ReactGA.pageview(location.pathname);
  }, [location.pathname]);
  return (
    <Header className="AppHeader">
      <div className="AppHeader__inner">
        <Link to={routes.landing} className="AppHeader__logo">
          <img src={props.logoImage} alt="Logo wolnych od smogu" className="AppHeader__logoInner" />
        </Link>
        <Menu mode="horizontal" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key={routes.changeFurnace}>
            <Link to={routes.changeFurnace}>Proces kalkulacji</Link>
          </Menu.Item>
          <Menu.Item key={routes.fillForm}>
            <Link to={routes.fillForm}>Dofinansowanie</Link>
          </Menu.Item>
          <Menu.Item key={routes.contact}>
            <Link to={routes.contact}>Kontakt</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};
