import React from 'react'; //Импортим сам реакт
import ReactDOM from 'react-dom';  //Подключаем библиотеку ReactDOM
import {BrowserRouter} from 'react-router-dom';
import './scss/App.css';
import App from './App'; // Подключаем входной компоннент app
import reportWebVitals from './reportWebVitals';// определяет ошибки в приложении
import {Provider} from "react-redux";
import {store} from "./store/index";
ReactDOM.render( // Рендерим входной компоннент с помощью  ReactDOM
  <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
