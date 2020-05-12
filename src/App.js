import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/pages/main/MainPage'
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <body className="App">
    <Provider store={store()}>
      <MainPage/>
      </Provider>
    </body>
  );
}

export default App;
