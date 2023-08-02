import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app/App';
import { store } from './app/store';
import './styles/normalize.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
