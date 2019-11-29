import React from 'react';
import {Route} from 'react-router';
import NavBar from './NavBar';
import Welcome from './Welcome';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails'

export default function App (props) {
    return (
        <div>
            <NavBar> </NavBar>
            <Route path = '/' exact={true} component = {Welcome} />
            <Route path = '/products' exact={true} component = {ProductList} />
            <Route path = '/products/:id' component = {ProductDetails} />
        </div>
    );
}