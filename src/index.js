import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { Provider } from 'react-redux';
import Notify from '../src/pages/shared/Notify'

import store from './store';

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
			<Notify />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
