import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// const ProductList = () => {
//     return ( 
//         <React.Fragment>
//             <h1>Product Catalog</h1>
//             <hr />
//             <div>Product gallery</div>
//         </React.Fragment>
//      );
// }
 
const FETCHING_PRODUCTS = 1;
const FETCHED_PRODUCTS = 2;
const ERROR_FETCHING_PRODUCTS = 3;

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            error: null,
            status: ''
        }
    }

    render() {
        let el;
        switch(this.state.status) {
            
            case FETCHING_PRODUCTS:
                el = (
                    <div class="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Products are being fetched</strong>
                    </div>
                );
                break;
            case FETCHED_PRODUCTS:
                console.log( 2);
                el = (
                    <div class="row">
                        {
                            this.state.products.map(product => (
                                <div class="col-3">
                                    <Link to = {'/products/'+product.id} >
                                        <div class="card">
                                            <img class="card-img-top" src={product.imageUrl} alt="" />
                                            <div class="card-body">
                                                <h4 class="card-title">{product.name}</h4>
                                                <p class="card-text">{product.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))

                        }   
                    </div>
                );
                break;
            case ERROR_FETCHING_PRODUCTS:
                el = (
                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>{this.state.error.message}</strong>
                    </div>
                );
        }

        return (
            <React.Fragment>
            <div className= "container">
                <h1>Product Catalog</h1>
                <hr />
                {el}
            </div>
        </React.Fragment>
        )
            
        
    }

    componentDidMount() {
        this.setState(
            {
                status: FETCHING_PRODUCTS
            },
            () => {
                axios.get('https://awesome-store-server.herokuapp.com/products')
                .then(response => response.data)
                .then( products => {
                    this.setState({
                        products: products,
                        status: FETCHED_PRODUCTS
                    })
                })
                .catch(error =>  {
                    this.setState({
                        error: error,
                        status: ERROR_FETCHING_PRODUCTS
                    })
                });
            });

    }


};