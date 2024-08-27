import Logo from './img/alogo.png';
import img from './img/helou.jpg';

function App() {
  return (
    <div className="App">
        <header className='header'>
          <div className='header__inner'>
            <a className='header__wrapper' href="https://amerbroker.pl/portfel-antyinflacyjny/">
              <img className='header__logo' src={Logo} alt="Logo" />
              <p className='header__title'>Portfel Antyinflacyjny</p>
            </a>
            <a className='header__button' href='#/'>Otrzymaj dostęp do PORTFELA ANTYINFLACYJNEGO</a>
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
              <div className="what_line">

              </div>
              <div className="what_gridWrapper">
                <div className="what_gridItem">
                    <h5 className="what_gridItemTitle">Potrzebujesz konkretnych, aktualnych wskazówek inwestycyjnych, które odpowiadają zmieniającym się trendom rynkowym.</h5>
                    <div className="what_lineGrid">

                    </div>
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
          <div className="what_lineGrid">

          </div>
          <p className="txt_bTxt">Wskazówki inwestycyjne od ekspertów z ponad 20-letnim doświadczeniem na giełdzie</p>
          <div className="greenBlock">
          <p>Główny analityk serwisu, <strong>Grzegorz Nowak</strong> , to inwestor i analityk z 25 letnim doświadczeniem w branży inwestycji giełdowych – pracował w największych domach maklerskich w kraju. Był kierownikiem Działu Strategii i Rozwoju SDM S.A. i p.o. dyrektora departamentu w CDM S.A. Grupy PeKaO S.A., a także dyrektorem zarządzającym BP, odpowiadał m.in. za new business. Największe pasje to giełda i geopolityka.</p>
          </div>
        </section>
    </div>
  );
}

export default App;
