import { Col, Row, Collapse, Button } from 'antd';
import * as React from 'react';
import * as Icon from 'react-feather';
import { useAppContext } from '../../AppState/AppContext';
import { WizardStep } from '../../AppState/AppState';
import './ApplicationWizard.css';
import { ApplicantDetails } from './applicantDetails/ApplicantDetails';
import { PropertyDetails } from './propertyDetails/PropertyDetails';
import { CharacteristicsOfWorks } from './characteristicsOfWorks/CharacteristicsOfWorks';
import axios, { AxiosResponse } from 'axios';
import { DocumentContract } from './ApplicationDto';
import { apiUrl } from '../../App';

const { Panel } = Collapse;

export const ApplicationWizard = () => {
  const [activeStep, setActiveStep] = React.useState<WizardStep>(WizardStep.ApplicantDetails);
  const [state, actions] = useAppContext();
  const isCompleted = (wizardStep: WizardStep) => state.completedApplicationSteps.indexOf(wizardStep) >= 0;

  React.useEffect(() => {
    if (state.completedApplicationSteps.length === 0) return;

    setActiveStep(state.completedApplicationSteps[state.completedApplicationSteps.length - 1] + 1);
  }, [state.completedApplicationSteps.length]);

  const generateApplication = async () => {
    const x = await axios.post<DocumentContract, AxiosResponse<Blob>>(`${apiUrl}/forms`, state.application, { responseType: 'blob' });

    const url = window.URL.createObjectURL(new Blob([x.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'wniosek.zip');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="ApplicationWizard">
      <Row>
        <Col offset={4} span={16}>
          <h1 className="ApplicationWizard__title">Stop smog w Zduńskiej Woli</h1>
          <p className="ApplicationWizard__description">
            Wniosek o udzielenie dofinansowania na wymianę pieców węglowych na ekologiczne źródła ogrzewania
          </p>
          <Collapse
            accordion
            activeKey={[activeStep]}
            onChange={(key) => {
              key && setActiveStep(Number(key));
            }}
            ghost
          >
            <Panel
              header={
                <div className="ApplicationWizard__panelHeader">
                  <div>
                    <Icon.User /> Dane wnioskodawcy
                  </div>
                  {isCompleted(WizardStep.ApplicantDetails) && <Icon.Check />}
                </div>
              }
              key={WizardStep.ApplicantDetails}
            >
              <ApplicantDetails
                onCompleted={() => {
                  isCompleted(WizardStep.ApplicantDetails)
                    ? actions.uncompleteStep(WizardStep.ApplicantDetails)
                    : actions.completeStep(WizardStep.ApplicantDetails);
                }}
              />
            </Panel>
            <Panel
              header={
                <div className="ApplicationWizard__panelHeader">
                  <div>
                    <Icon.Home /> Dane nieruchomości
                  </div>
                  {isCompleted(WizardStep.PropertyDetails) && <Icon.Check />}
                </div>
              }
              key={WizardStep.PropertyDetails}
              disabled={!isCompleted(WizardStep.ApplicantDetails)}
            >
              <PropertyDetails
                onCompleted={() => {
                  isCompleted(WizardStep.PropertyDetails)
                    ? actions.uncompleteStep(WizardStep.PropertyDetails)
                    : actions.completeStep(WizardStep.PropertyDetails);
                }}
              />
            </Panel>
            <Panel
              header={
                <div className="ApplicationWizard__panelHeader">
                  <div>
                    <Icon.Tool /> Charakterystyka prac
                  </div>
                  {isCompleted(WizardStep.CharacteristicsOfWorks) && <Icon.Check />}
                </div>
              }
              key={WizardStep.CharacteristicsOfWorks}
              disabled={!isCompleted(WizardStep.PropertyDetails)}
            >
              <CharacteristicsOfWorks
                onCompleted={() => {
                  isCompleted(WizardStep.CharacteristicsOfWorks)
                    ? actions.uncompleteStep(WizardStep.CharacteristicsOfWorks)
                    : actions.completeStep(WizardStep.CharacteristicsOfWorks);
                }}
              />
            </Panel>
            <Panel
              header={
                <div className="ApplicationWizard__panelHeader">
                  <div>
                    <Icon.File /> Podsumowanie
                  </div>
                  {isCompleted(WizardStep.Summary) && <Icon.Check />}
                </div>
              }
              key={WizardStep.Summary}
              disabled={!isCompleted(WizardStep.CharacteristicsOfWorks)}
            >
              <div className="ApplicationWizard__summary">
                <h5 className="ApplicationWizard__subtitle">Twój wniosek jest gotowy</h5>
                <p>
                  Podpisany wniosek wraz z wszystkimi załącznikami złóż w Kancelarii Urzędu Miasta (budynek nr 2) przy ul. Złotnickiego 12.
                </p>

                <Row>
                  <Col offset={14} span={10}>
                    <Button
                      className="Button"
                      type="primary"
                      onClick={async () => {
                        await generateApplication();
                      }}
                    >
                      Pobierz wypełniony wniosek
                    </Button>
                  </Col>
                </Row>
              </div>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
