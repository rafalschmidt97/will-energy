import { Button, Layout } from 'antd';
import React from 'react';
import * as Icon from 'react-feather';
import ReactGA from 'react-ga';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import { AppProvider } from './AppState/AppContext';
import { AppFooter } from './layout/footer/AppFooter';
import { AppHeader } from './layout/header/AppHeader';
import { ApplicationWizard } from './modules/applicationWizard/ApplicationWizard';
import { ChangeFurnacePage } from './modules/changeFurnace/ChangeFurnacePage';
import { ContactPage } from './modules/contact/ContactPage';
import { FillFormPage } from './modules/fillForm/FillFormPage';
import { PrivacyPolicyPage } from './modules/privacyPolicy/PrivacyPolicyPage';
import { WelcomePage } from './modules/welcome/WelcomePage';
import { routes } from './routes';
import { smoothScrollToSection } from './shared/utils';
import logo from './static/images/logo.svg';

const { Content, Header } = Layout;

const BackContextWrapper = (props: { children: React.ReactNode; backTo: string }) => {
  const history = useHistory();

  const location = useLocation();
  React.useEffect(() => {
    smoothScrollToSection('root');

    ReactGA.pageview(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Header className="AppHeader">
        <Button className="AppHeader__backButton" onClick={() => history.push(props.backTo)} type="text">
          <Icon.ArrowLeft /> Wróć na poprzednią stronę
        </Button>
      </Header>
      <Content className="App__content">{props.children}</Content>
    </>
  );
};

const isProd = process.env.NODE_ENV == 'production';
export const apiUrl = isProd ? 'https://wolniodsmogu.azurewebsites.net/api' : 'http://localhost:5000/api';

const App = () => {
  return (
    <HelmetProvider>
      <Router basename={isProd ? '/will-energy' : undefined}>
        <AppProvider>
          <Layout className="App">
            <Switch>
              <Route exact path={routes.applicationWizard}>
                <BackContextWrapper backTo={routes.fillForm}>
                  <ApplicationWizard />
                </BackContextWrapper>
              </Route>
              <Route exact path={routes.privacyPolicy}>
                <BackContextWrapper backTo={'/'}>
                  <PrivacyPolicyPage />
                </BackContextWrapper>
              </Route>
              <Route path="/">
                <AppHeader logoImage={logo} />
                <Content className="App__content">
                  <Switch>
                    <Route exact path="/">
                      <WelcomePage />
                    </Route>
                    <Route exact path={routes.changeFurnace}>
                      <ChangeFurnacePage />
                    </Route>
                    <Route exact path={routes.fillForm}>
                      <FillFormPage />
                    </Route>
                    <Route exact path={routes.contact}>
                      <ContactPage />
                    </Route>
                  </Switch>
                </Content>
                <AppFooter />
              </Route>
            </Switch>
          </Layout>
        </AppProvider>
      </Router>
    </HelmetProvider>
  );
};

export default App;
