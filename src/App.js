import Logo from './img/alogo.png';

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
    </div>
  );
}

export default App;
