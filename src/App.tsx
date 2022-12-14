import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// TODO (1) Amplify Libraries を使ってPinpointを導入する
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Home from './containers/Home';
import ProductDetail from './containers/ProductDetail';
import Confirmation from './containers/Confirmation';
import Billing from './containers/Billing';
import Order from './containers/Order';
import './App.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="confirmation/:id" element={<Confirmation />} />
          <Route path="billing" element={<Billing />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
