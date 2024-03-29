import React from 'react';

import { useTranslation } from 'react-i18next';

import './i18n';
import logo from './logo.svg';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { t('my-app') }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          { t('learn-react') }
        </a>
      </header>
    </div>
  );
}

export default App;
