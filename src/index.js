import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore();

const renderApp = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <div className='app'>
                    <Component />
                </div>
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    )
};

renderApp(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const nextApp = require('./containers/App').default;
        renderApp(nextApp);
    })
}