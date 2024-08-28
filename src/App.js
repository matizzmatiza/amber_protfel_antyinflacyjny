import React, {useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import Logo from './img/alogo.png';
import Logo2 from './img/amerlogo.png';
import img from './img/welcome.jpg';
import img2 from './img/2022-07-google-analytics-od-poczatku.png';
import img3 from './img/2022-07-zadowolony-klient-1.png';
import img4 from './img/2022-07-zdjecie-1.jpg';
import mailimg from './img/mail.png';
import Form from './Form'; 

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('form');
    formSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="App">
      <div>
        {isScrolled && (
          <button onClick={scrollToTop} className="scroll-to-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
          </button>
        )}
      </div>
      <header className='header'>
        <div className='header__inner'>
          <a className='header__wrapper' href="https://amerbroker.pl/portfel-antyinflacyjny/">
            <img className='header__logo' src={Logo} alt="Logo" />
            <p className='header__title'>Portfel Antyinflacyjny</p>
          </a>
          <a onClick={scrollToForm} className='header__button' href='#id'>Otrzymaj dostęp do PORTFELA ANTYINFLACYJNEGO</a>
        </div>
      </header>
      <section className="welcome">
        <div className='welcome__inner'>
          <h1 className='welcome__h1'>Portfel Antyinflacyjny</h1>
          <h2 className='welcome__h2'>ochroń swoje oszczędności przed szalejącą inflacją i<br />zacznij zarabiać na inwestycjach!</h2>
        </div>
      </section>
      <section className="what_section">
        <div className="what_inner">
          <h3 className="what_title">Co zrobisz, kiedy inflacja zamieni się w hiperinflację?</h3>
          <p className="what_subtitle">Wojna za wschodnią granicą, kolejne fale pandemii – w tych niepewnych czasach <strong>są potrzebne bezpieczne rozwiązania</strong>. Takie, które nie tylko pomogą Ci ochronić oszczędności przed spadkiem wartości pieniądza, ale zapewnią bezpieczeństwo finansowe na lata.</p>
          <p>&nbsp;</p>
          <p className="what_subtitle">Lokaty? Obligacje? Nieruchomości? Kryptowaluty? Waluty? <strong>To może nie wystarczyć, aby uniknąć konsekwencji hiperinflacji.</strong></p>
          <div className="what_line"></div>
          <div className="what_gridWrapper">
            <div className="what_gridItem">
              <h5 className="what_gridItemTitle">Potrzebujesz konkretnych, aktualnych wskazówek inwestycyjnych, które odpowiadają zmieniającym się trendom rynkowym.</h5>
              <div className="what_lineGrid"></div>
              <p>Informacji, o tym:</p>
              <p><ul><li>kiedy i w jakie instrumenty zainwestować,</li><li>po jakiej cenie,</li><li>kiedy się wycofać, aby zmaksymalizować zysk.</li></ul></p>
              <h3 className="what_gridH3">Dostarczy ich</h3>
              <h3 className="what_gridH3">Portfel Antyinflacyjny</h3>
              <p className="what_gridB">opracowany przez serwis amerbroker.pl</p>
            </div>
            <div className="what_gridItem" id="imgWrap">
              <div className="what_gridItem_ImgWrap">
                <img src={img} alt="welcome" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="txt_section">
        <h1>Portfel Antyinflacyjny to konkretne instrumenty finansowe, które pozwolą Ci świadomie inwestować w czasach inflacji</h1>
        <h2>Serwis giełdowy Amerbroker.pl to <strong> usługa, która pomoże Ci uchronić się przed nadchodzącą hiperinflacją. </strong></h2>
        <h3>To nie kolejne ogólne szkolenie!</h3>
        <h2><strong>To konkretne sygnały kupna/sprzedaży i instrumenty finansowe, dzięki którym możesz liczyć nawet na kilkudziesięcioprocentowe zyski.</strong></h2>
        <h2> To wszystko w ramach jednego, prostego <strong>abonamentu.</strong></h2>
        <div className="what_lineGrid"></div>
        <p className="txt_bTxt">Wskazówki inwestycyjne od ekspertów z ponad 20-letnim doświadczeniem na giełdzie</p>
        <div className="greenBlock">
          <p>Główny analityk serwisu, <strong>Grzegorz Nowak</strong> , to inwestor i analityk z 25 letnim doświadczeniem w branży inwestycji giełdowych – pracował w największych domach maklerskich w kraju. Był kierownikiem Działu Strategii i Rozwoju SDM S.A. i p.o. dyrektora departamentu w CDM S.A. Grupy PeKaO S.A., a także dyrektorem zarządzającym BP, odpowiadał m.in. za new business. Największe pasje to giełda i geopolityka.</p>
        </div>
      </section>
      <section className="info_section">
        <div className="info_sectionWrapper">
          <h1>Konkretne i sprawdzone informacje o szansach inwestycyjnych dostępne 24 h na dobę</h1>
          <p>Zyskujesz <strong>stały dostęp do konkretnych analiz trendów rynkowych</strong>. Takich, dzięki którym dowiesz się, <strong>kiedy i po jakiej cenie warto kupić/sprzedać określone akcje lub inne instrumenty finansowe</strong> (ETF, indeks, złoto itp.). Są aktualizowane na bieżąco – w trybie interwałów dziennych i tygodniowych. O wszystkich istotnych dla Ciebie zmianach uzyskasz powiadomienie, aby nie stracić szansy na zysk.</p>
          <p><strong>Optymalne wykorzystanie trendów na wszystkich rynkach</strong></p>
          <p>Nasi analitycy poszukują rokujących trendów w obszarze wielu instrumentów finansowych. Wskazujemy<strong> szanse na zarobek na wzrostach i spadkach, na akcjach, indeksach, obligacjach, giełdach surowcowych</strong> – przekazujemy<strong> sygnały inwestycyjne o wysokim potencjale zysku</strong>.</p>
          <p><strong>Sygnały inwestycyjne w oparciu o strategię średnioterminowej zmiany trendu </strong></p>
          <p>Świadomie stosujemy strategię średnioterminowej zmiany trendu na każdym analizowanym instrumencie. To pozwala<strong>  skutecznie zarządzać ryzykiem inwestycyjnym </strong> – znacznie efektywniej niż kilkudniowe spekulacje czy dalekosiężne analizy w niestabilnej sytuacji na świecie. To nasz<strong>  sposób na zyski dla klientów. Inwestorzy potwierdzają ich skuteczność!</strong> </p>
          <img src={img2} className="img_info_section" alt="2022-07-google-analytics-od-poczatku.png"/>
        </div>
      </section>
      <section className="info_section info_section2">
        <div className="info_sectionWrapper">
          <h1>Ponad 1,5 mln użytkowników w ciągu 15 lat istnienia serwisu</h1>
          <p>Z naszych <strong>wskazówek</strong>inwestycyjnych korzystają <strong> właściciele firm, kadra zarządzająca </strong>a nawet<strong> doradcy czołowych polskich instytucji finansowych</strong> – czyli ci, którzy poszukują bezpiecznych, a zarazem korzystnych szans na giełdzie. Takich, które nie tylko pozwolą<strong> ochronić majątek przed inflacją</strong>, ale pomnożyć kapitał na przyszłość. To zarówno osoby prowadzące własny biznes, jak i pełniące stanowiska kierownicze w różnych obszarach rynku. Jeżeli dysponujesz środkami na inwestycje – możesz dołączyć do tego grona.</p>
          <img src={img3} className="img_info_section" alt="2022-07-google-analytics-od-poczatku.png"/>
          <div className="info_sectionGrid">
            <div className="info_sectionGridItem">
              <img src={Logo} className="img_info_sectionGrid" alt="logo"/>
              <h2>15 lat</h2>
              <a className='info_sectionLink' href="https://amerbroker.pl" target="blank"  style={{ marginBottom: '20px'}}>
                amerbroker.pl
              </a>
              <a className='info_sectionLink' href="https://amerbroker.pl" target="blank">
                <svg viewBox="0 0 24 24"  style={{ width: '40px', height: '40px' }} fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/></svg>
              </a>
            </div>
            <div className="info_sectionGridItem">
              <img src={Logo} className="img_info_sectionGrid" alt="logo"/>
              <h2>1 600 000 użytkowników</h2>
              <a className='info_sectionLink' href="https://amerbroker.pl" target="blank"  style={{ marginBottom: '20px'}}>
                amerbroker.pl
              </a>
              <a className='info_sectionLink' href="https://amerbroker.pl" target="blank">
                <svg viewBox="0 0 24 24"  style={{ width: '40px', height: '40px' }} fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/></svg>
              </a>
            </div>
            <div className="info_sectionGridItem">
              <img src={Logo} className="img_info_sectionGrid" alt="logo"/>
              <h2>11 664 000 odsłon</h2>
              <a className='info_sectionLink' href="https://amerbroker.pl" target="blank"  style={{ marginBottom: '20px'}}>
                amerbroker.pl
              </a>
              <a className='info_sectionLink' href="https://amerbroker.pl" target="blank">
                <svg viewBox="0 0 24 24"  style={{ width: '40px', height: '40px' }} fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="payFor_section">
        <div className='payFor_sectionWrapper'>
          <div className='payFor_grid'>
            <div className='payFor_gridItem' id="payForImage">
              <div className='payFor_gridItem_imgBg'>
                <div className='payFor_img_wrap'>
                  <img src={img4} alt="zdjecie-1" />
                </div>
              </div>
            </div>
            <div className='payFor_gridItem'>
              <h1>Płacisz wyłącznie za efekty</h1>
              <p>Zasady są proste: <strong>opłacasz abonament raz na 6 miesięcy. Ale tylko, jeśli nasze wskazówki przekładają się na konkretne zyski.</strong> Jeżeli średnia uzyskana z 5 najlepszych podanych w serwisie sygnałów kupna/sprzedaży za ostatnie półrocze była mniejsza niż 10%, <u> automatycznie przedłużamy Ci dostęp do subskrypcji na kolejne 6 miesięcy bez dodatkowych opłat</u>. Tak zyskujesz pełne bezpieczeństwo inwestycji.</p>
            </div>
            <div className='payFor_gridItem'>
              <h1>Nie wierz zapewnieniom – postaw na twarde dane.
                Sprawdź wyniki sygnałów kupna/sprzedaży z naszego serwisu od 2011 roku i przekonaj się sam!</h1>
              <div className="what_line"></div>
              <a className='payFor_sectionLink' href="https://amerbroker.pl/?go=content&action=show&id=409" target="blank">
                Sprawdź wyniki
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='order_section'>
        <div className='order_sectionWrapper'>
          <h2>Portfel Antyinflacyjny – zamów dostęp już teraz!</h2>
          <h3>
            Jeśli:
          </h3>
          <ul><li><h5>masz kapitał do zainwestowania (min. rekomendowana wartość środków to 100&nbsp;000 zł),</h5></li><li><h5>nie masz czasu na długotrwałe śledzenie rynków,</h5></li><li><h5>szukasz konkretnych rozwiązań od doświadczonych analityków</h5></li></ul>
          <h3>
            nie zwlekaj i postaw na skuteczną ochronę przed inflacją.
          </h3>
          <div className="what_line" style={{ marginTop: '20px' }}></div>
        </div>
      </section>
      <section className='invest_section'>
        <div className='invest_sectionWrapper'>
          <h1>Inwestycje w czasie inflacji: zobacz, co zyskasz dzięki naszej usłudze</h1>
          <p>Serwis giełdowy Amerbroker.pl to <strong>kompleksowy zestaw narzędzi, które pomogą Ci ochronić kapitał przez inflacją</strong>. 6-miesięczny abonament Premium obejmuje:</p>
          <div className="what_line" style={{ marginTop: '20px' }}></div>
          <div className='invest_gridOne'>
            <div className='invest_gridItem' ref={ref1}>
              <p className='invest_gridItemTitle'>Portfel Antyinflacyjny</p>
              <h1>Instrumenty finansowe</h1>
              <p className='invest_gridItemDesc'>Konkretne instrumenty finansowe z precyzyjną wyceną w rzeczywistym systemie notowań. Gotowe do podjęcia inwestycji.</p>
              <div className='invest_gridItem_progressWrap'>
                <div className="progress-bar">
                  <div className={`progress ${inView1 ? 'animate' : ''}`}>Portfel</div>
                </div>
              </div>
            </div>
            <div className='invest_gridItem' ref={ref2}>
              <p className='invest_gridItemTitle'>Praktyczne raporty WIG20</p>
              <h1>Raporty WIG20</h1>
              <p className='invest_gridItemDesc'>co tydzień uzyskasz pogłębione informacje o trendach w warszawskim indeksie WIG20, aby lepiej zrozumieć trendy inwestycyjne.</p>
              <div className='invest_gridItem_progressWrap'>
                <div className="progress-bar">
                  <div className={`progress ${inView2 ? 'animate' : ''}`} style={{ width: inView2 ? '100%' : '0%' }}>Praktyczne raporty WIG20</div>
                </div>
              </div>
            </div>
          </div>
          <div className='invest_gridTwo'>
            <div className='invest_gridItem' ref={ref3}>
              <p className='invest_gridItemTitle'>Sygnały kupna/sprzedaży dla kontraktów na indeks WIG20</p>
              <h1>Sygnały WIG20</h1>
              <p className='invest_gridItemDesc'>Sygnały kupna/sprzedaży dla kontraktów na indeks WIG20</p>
              <div className='invest_gridItem_progressWrap2'>
                <div className="progress-bar">
                  <div className={`progress ${inView3 ? 'animate' : ''}`} style={{ width: inView3 ? '100%' : '0%' }}>Sygnały kupna/sprzedaży dla kontraktów na indeks WIG20</div>
                </div>
              </div>
            </div>
            <div className='invest_gridItem' ref={ref4}>
              <p className='invest_gridItemTitle'>Sygnały kupna/sprzedaży dla akcji notowanych na GPW</p>
              <h1>Sygnały na GPW</h1>
              <p className='invest_gridItemDesc'>Zarabiaj na wzrostach i spadkach</p>
              <div className='invest_gridItem_progressWrap2'>
                <div className="progress-bar">
                  <div className={`progress ${inView4 ? 'animate' : ''}`}>Graphic</div>
                </div>
              </div>
            </div>
            <div className='invest_gridItem' ref={ref5}>
              <p className='invest_gridItemTitle'>Sygnały kupna/sprzedaży dla innych rokujących instrumentów</p>
              <h1>Sygnały kupna/sprzedaży</h1>
              <p className='invest_gridItemDesc'><strong>dla innych rokujących instrumentów</strong>, np. indeksów, walut, surowców, metali szlachetnych (w tym złota i srebra) oraz artykułów rolnych.</p>
              <div className='invest_gridItem_progressWrap2'>
                <div className="progress-bar">
                  <div className={`progress ${inView5 ? 'animate' : ''}`}>Marketing
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='invest_lastItem'>
            <p className='invest_gridItemTitle'>Błyskawiczne powiadomienia o zmianach sygnałów lub w Portfelu Antyinflacyjnym</p>
            <h1>włącz je, aby być stale na bieżąco</h1>
            <p className='invest_gridItemDesc'></p>
            <div className='invest_gridItem_progressWrap3'>
              <div className="progress-bar">
                <div className={`progress ${inView5 ? 'animate' : ''}`} style={{ width: inView5 ? '100%' : '0%' }}>włącz je, aby być stale na bieżąco</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='form-section' id='form'>
        <div className='form-section__inner'>
          <div className='form-section__wrapper'>
            <p>Wypełnij formularz kontaktowy, aby uzyskać więcej informacji i złożyć zamówienie</p>
            <div className='form-line'></div>
            <Form />
            <div className='form-line'></div>
            <a class="form-mail" href="mailto:kontakt@amerbroker.pl">
              <img src={mailimg} alt="mail"/>
              kontakt@amerbroker.pl
            </a>
          </div>
        </div>
      </section>
      <section className='footer'>
        <div className='footer_wrap'>
          <p style={{fontSize: '15px', textAlign: 'center'}}>Copyright © 2022 Portfel Antyinflacyjny</p>
          <a href='https://amerbroker.pl/'><img src={Logo2} alt="logo" /></a>
          <a href="https://amerbroker.pl/?go=content&action=show&id=363">Regulamin</a>
        </div>
      </section>
    </div>
  );
}

export default App;