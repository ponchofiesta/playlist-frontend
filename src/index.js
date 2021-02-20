import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'rsuite';
import deDE from './locales/rsuite_de_DE';
import format from 'date-fns/format';
import de from 'date-fns/locale/de';
import ConfigContext from './ConfigContext';
import config from './config';

import 'rsuite/dist/styles/rsuite-default.css';

function formatDate(data, formatStr) {
  return format(data, formatStr, { locale: de });
}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={deDE} formatDate={formatDate}>
        <ConfigContext.Provider value={{config, station: config.stations[0]}}>
          <App />
        </ConfigContext.Provider>
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
