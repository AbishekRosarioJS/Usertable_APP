import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BeerTable from './components/BeerTable';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mt-4">
        <h1>Uesr Log App</h1>
        <BeerTable />
      </div>
    </Provider>
  );
};

export default App;
