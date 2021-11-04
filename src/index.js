import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import { ToastContainer } from 'react-toastify'
import store from './redux/store'
import { Provider } from 'react-redux';
ReactDOM.render(
        <Provider store={store}>
            <App />
            <ToastContainer/>
        </Provider>,
document.getElementById('root'))
