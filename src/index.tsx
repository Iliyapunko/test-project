import React from 'react'
import ReactDOM from 'react-dom'

import 'styles/index.scss'

import i18n from 'config/i18next'
import { I18nextProvider } from 'react-i18next'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store from './store'
import history from './store/history'

import App from './App'

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
)

