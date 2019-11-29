import React from 'react';
import {Link} from 'react-router-dom';


export default function Welcome(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Everything Store</h1>
            <p className="lead">A place where you can find from A to Z</p>
            <hr className="my-2"/>
            <p>Welcome to the React training</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/products" role="button">Browse Products</Link>
            </p>
        </div>
    );
}