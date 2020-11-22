import * as React from 'react';
import './ContactPage.css';
import { Button, Checkbox, Col, Popover, Row, Spin } from 'antd';

import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../../shared/forms/Input/InputField';
import img from '../../static/images/img-city.svg';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

type FormValues = {
  title: string;
  message: string;
  // email: string;
  // phoneNumber: string;
};

const FormSchema = Yup.object().shape<FormValues>({
  title: Yup.string().required(),
  message: Yup.string().required(),
  // email: Yup.string().required(),
  // phoneNumber: Yup.string().required(),
});

export const ContactPage = () => {
  const [isPrivacyPolicyAccepted, setPrivacyPolicy] = React.useState(false);

  const onSubmit = (form: FormValues) => {
    const { title, message } = form;

    const mailToLink = `mailto:urzad_miasta@zdunskawola.pl?subject=${title}&body=${message}`;
    window.location.href = mailToLink;
  };

  return (
    <div className="ContactPage">
      <Row>
        <Col offset={4} span={16}>
          <Row>
            <Col offset={4} span={16}>
              <h1 className="ContactPage__title">Masz pytania dotyczące dopłat?</h1>
              <p className="ContactPage__description">Skontaktuj się z nami, służymy Ci naszą pomocą.</p>
              <div className="ContactPage__form">
                <Row>
                  <Col offset={2} span={16}>
                    <Formik
                      validationSchema={FormSchema}
                      validateOnMount={true}
                      initialValues={{
                        title: '',
                        message: '',
                        email: '',
                        phoneNumber: '',
                      }}
                      onSubmit={onSubmit}
                    >
                      {({ values, setFieldValue, setFieldTouched, isValid }: FormikProps<FormValues>) => (
                        <Form>
                          <InputField
                            id="title"
                            type="text"
                            value={values.title}
                            name="title"
                            onChange={setFieldValue}
                            onFocus={setFieldTouched}
                          >
                            Temat wiadomości
                          </InputField>

                          <InputField
                            id="message"
                            type="textarea"
                            value={values.message}
                            className=""
                            name="message"
                            onChange={setFieldValue}
                            onFocus={setFieldTouched}
                          >
                            Treść
                          </InputField>

                          {/* <InputField
                            id="email"
                            type="text"
                            value={values.email}
                            name="email"
                            onChange={setFieldValue}
                            onFocus={setFieldTouched}
                          >
                            Twój email
                          </InputField>

                          <InputField
                            id="phoneNumber"
                            type="text"
                            value={values.phoneNumber}
                            name="phoneNumber"
                            onChange={setFieldValue}
                            onFocus={setFieldTouched}
                          >
                            Twój numer telefonu
                          </InputField> */}
                          <Checkbox onChange={(e) => setPrivacyPolicy(e.target.checked)}>
                            Znam i akcjeptuję <Link to={routes.privacyPolicy}>Politykę prywatności</Link>
                          </Checkbox>

                          <Row>
                            <Col offset={14} span={10}>
                              <Button disabled={!isValid || !isPrivacyPolicyAccepted} className="Button" type="primary" htmlType="submit">
                                Wyślij
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      )}
                    </Formik>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
