import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
    <footer className="footer fixed-bottom">
            <div className="fixed-bottom">
                <p>Contact information:
                    <a href="mailto:katt@gmail.com">
                        katt@gmail.com</a></p>
            </div>
    </footer>
);

ReactDOM.render([
        <App key="1"/>,
        <Footer key='2'/>],
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
