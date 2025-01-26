import './App.css';
import Icon from './assets/icon-header.png'

function App() {
  return (
    <div className="app">
      <div className="wrapper" >
      <div className="header">   
        <img className='logo' src={Icon} />
        <div className="logo-name">
          PBCRYPT
        </div>
      </div>
        <div className='main-card' >
          <div className='header-card-name' >Coming soon...</div>
        </div>
        <div className="cards">
          <div className='left-card' >
            <div className='header-card-name' >Coming soon...</div>
          </div>
          <div className='right-card'  >
            <div className='header-card-name' >Coming soon...</div>
          </div>
        </div>
        <div className='footer' >© 2023 PBCRYPT</div>
      </div>
    </div>
  );
}

export default App;
