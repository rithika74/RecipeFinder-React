import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Recipe.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Intro from './Intro';
import Allitems from './Allitems';
import Favourites from './Favourites';
import Country from './Country';
import MenuItems from './MenuItems';
import CountryItem from './CountryItem';
import Ingredients from './Ingredients';
import { Provider } from 'react-redux';
import { Store } from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Intro />} />
            <Route path='/allitems' element={<Allitems />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/country' element={<Country />} />
            <Route path='/menuitems/:category' element={<MenuItems />} />
            <Route path='/countryitem/:area' element={<CountryItem />} />
            <Route path='/ingredients/:mealId' element={<Ingredients />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
