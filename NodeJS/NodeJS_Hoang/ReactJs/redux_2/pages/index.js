import React from 'react';
import ReactDOM from 'react-dom';
// import '../src/index.css';
import App from '../src/App';
// import registerServiceWorker from '../src/registerServiceWorker';
import {Provider} from 'react-redux';
//store
import {createStore} from 'redux';
import myReducer from '../src/reducers';
const store = createStore(myReducer)









ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>,
document.getElementById('root'));
// registerServiceWorker();
