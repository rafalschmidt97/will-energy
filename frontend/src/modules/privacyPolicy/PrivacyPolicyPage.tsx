import { Col, Row } from 'antd';
import * as React from 'react';
import { AppFooter } from '../../layout/footer/AppFooter';
import './PrivacyPolicyPage.css';
import imgLanding from '../../static/images/img-bushes.svg';
import logo from '../../static/images/logo.svg';

export const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="PrivacyPolicyPage">
        <Row>
          <Col offset={4} span={16}>
            <Row>
              <Col offset={4} span={16}>
                <h1 className="PrivacyPolicyPage__title">Polityka prywatności</h1>
                <section className="PrivacyPolicyPage__section">
                  <h1 className="PrivacyPolicyPage__sectionTitle">1. Wprowadzenie</h1>
                  <p>
                    Prywatność odwiedzających naszą stronę internetową jest dla nas bardzo ważna i dokładamy wszelkich starań, aby ją
                    chronić. Niniejsza polityka wyjaśnia, co robimy z Twoimi danymi osobowymi. Zgoda na korzystanie z plików cookie zgodnie
                    z warunkami niniejszej polityki podczas pierwszej wizyty na naszej stronie pozwala nam na korzystanie z plików cookie
                    przy każdej kolejnej wizycie na naszej stronie.
                  </p>
                  <h1 className="PrivacyPolicyPage__sectionTitle">2. Zbieranie danych osobowych</h1>
                  <p>
                    Następujące rodzaje danych osobowych mogą być gromadzone, przechowywane i wykorzystywane:
                    <br /> <br />
                    informacje o komputerze, w tym adres IP, lokalizacja geograficzna, typ i wersja przeglądarki oraz system operacyjny;
                    <br />
                    informacje o Twoich wizytach i korzystaniu z tej witryny, w tym źródło odesłań, długość wizyty, wyświetlenia stron i
                    ścieżki nawigacji w witrynie;
                    <br />
                    informacje, takie jak adres e-mail, które podajesz podczas rejestracji w naszej witrynie internetowej;
                    <br />
                    informacje wprowadzane podczas tworzenia profilu w naszej witrynie — na przykład imię i nazwisko, zdjęcia profilowe,
                    płeć, data urodzin, status związku, zainteresowania i hobby, dane edukacyjne i dane dotyczące zatrudnienia;
                    <br />
                    informacje, takie jak imię i nazwisko oraz adres e-mail, które podajesz w celu skonfigurowania subskrypcji naszych
                    e-maili lub biuletynów;
                    <br />
                    informacje wprowadzane podczas korzystania z usług na naszej stronie internetowej;
                    <br />
                    informacje, które są generowane podczas korzystania z naszej strony internetowej, w tym kiedy, jak często i w jakich
                    okolicznościach z niej korzystasz;
                    <br />
                    informacje dotyczące wszystkiego, co kupujesz, usług, z których korzystasz lub transakcji dokonywanych za pośrednictwem
                    naszej strony internetowej, w tym imię i nazwisko, adres, numer telefonu, adres e-mail i dane karty kredytowej;
                    <br />
                    informacje publikowane na naszej stronie internetowej z zamiarem opublikowania ich w Internecie, w tym nazwa
                    użytkownika, zdjęcia profilowe i treść umieszczanych postów;
                    <br />
                    informacje zawarte we wszelkiej korespondencji przesyłanej do nas e-mailem lub za pośrednictwem naszej strony
                    internetowej, w tym treści komunikacyjne i metadane;
                    <br />
                    wszelkie inne dane osobowe, które nam przesyłasz.
                    <br /> <br />
                    Zanim ujawnisz nam dane osobowe innej osoby, musisz uzyskać zgodę tej osoby na ujawnienie i przetwarzanie tych danych
                    osobowych zgodnie z niniejszymi zasadami
                  </p>

                  <h1 className="PrivacyPolicyPage__sectionTitle">3. Korzystanie z Twoich danych osobowych</h1>
                  <p>
                    Dane osobowe przesłane do nas za pośrednictwem naszej strony internetowej będą wykorzystywane do celów określonych w
                    niniejszej polityce lub na odpowiednich stronach witryny. Możemy wykorzystywać Twoje dane osobowe do celu:
                    <br /> <br />
                    administrowania naszą stroną internetową i biznesem; <br />
                    personalizowania naszej strony internetowej dla Ciebie; <br />
                    umożliwienia korzystania z usług dostępnych na naszej stronie internetowej; <br />
                    wysyłania towarów zakupionych za pośrednictwem naszej strony internetowej; <br />
                    świadczenia usług zakupionych za pośrednictwem naszej strony internetowej; <br />
                    wysyłania do ciebie wyciągów, faktur i przypomnień o płatnościach oraz odbioru płatności od Ciebie; <br />
                    przesyłania niemarketingowej komunikacji handlowej; <br />
                    wysyłania powiadomień e-mail, o które prosiłeś; <br />
                    wysyłania naszego newslettera e-mail, jeśli o to poprosiłeś (możesz nas w każdej chwili poinformować, jeśli nie chcesz
                    już otrzymywać newslettera); <br />
                    przesyłania informacji marketingowych dotyczących naszej działalności lub aktywności starannie wybranych stron trzecich,
                    które naszym zdaniem mogą Cię zainteresować, pocztą lub, jeśli wyraziłeś na to zgodę, pocztą elektroniczną lub podobną
                    technologią (możesz nas o tym poinformować w dowolnym momencie, jeśli nie chcesz już otrzymywać komunikatów
                    marketingowych); <br />
                    dostarczania stronom trzecim informacji statystycznych o naszych użytkownikach (ale te osoby trzecie nie będą w stanie
                    zidentyfikować żadnego konkretnego użytkownika na podstawie tych informacji); <br />
                    zajmowania się zapytaniami i skargami składanymi przez Ciebie lub dotyczącymi Ciebie w związku z naszą witryną; <br />
                    zapewnienia bezpieczeństwa naszej strony internetowej i zapobieganie oszustwom; <br />
                    weryfikacji zgodności z warunkami korzystania z naszej strony internetowej (w tym monitorowanie prywatnych wiadomości
                    wysyłanych za pośrednictwem naszej prywatnej usługi przesyłania wiadomości); i innych zastosowań.
                    <br /> <br />
                    Jeśli prześlesz dane osobowe do publikacji w naszej witrynie, opublikujemy je i wykorzystamy w inny sposób zgodnie z
                    udzieloną nam licencją.
                    <br /> <br />
                    Twoje ustawienia prywatności mogą być wykorzystane do ograniczenia publikacji Twoich informacji na naszej stronie
                    internetowej i mogą być dostosowane za pomocą kontroli prywatności na stronie. Nie będziemy bez Twojej wyraźnej zgody
                    przekazywać danych osobowych stronom trzecim, lub jakimkolwiek innym związanym z nimi stronom trzecim, w celach
                    marketingu bezpośredniego.
                  </p>
                </section>
              </Col>
            </Row>
          </Col>
        </Row>
        <img className="PrivacyPolicyPage__backgroundImage" src={imgLanding} alt="" />
      </div>

      <AppFooter />
    </>
  );
};
