import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'rsuite';
import deDE from './locales/rsuite_de_DE';
import format from 'date-fns/format';
import de from 'date-fns/locale/de';

import 'rsuite/dist/styles/rsuite-default.css';

function formatDate(data, formatStr) {
  return format(data, formatStr, { locale: de });
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={deDE} formatDate={formatDate}>
        <App />
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
