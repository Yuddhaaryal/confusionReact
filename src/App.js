import React, { Component } from 'react';
import Main from './components/MainComponent.js'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConfigStore } from './redux/ConfigureStore.js';
const store =ConfigStore();
class App extends Component{
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div>
       <Main/>
      </div>
      </BrowserRouter>
      </Provider>
    );  
}
}
export default App;
