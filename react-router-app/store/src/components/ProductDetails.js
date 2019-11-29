import React from 'react';
import axios from 'axios';

const FETCHING_PRODUCTDETAILS = 1;
const FETCHED_PRODUCTDETAILS = 2;
const ERROR_FETCHING_PRODUCTDETAILS = 3; 

export default class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            product: null,
            status: null,
            error: ''
        }
    }

    render() {
        let el;
        switch(this.state.status) {
            case FETCHING_PRODUCTDETAILS :
                el = (
                    <div class="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Loading...</strong>
                    </div>
                );
                break;
            
            case FETCHED_PRODUCTDETAILS:
                    el = (
                        <div className="row">
                            <div className="col-3">
                                <img src={this.state.product.imageUrl} />
                            </div>
                            <div class="col-9">
                                <div>{this.state.product.name}</div>
                                <div>{this.state.product.description}</div>
                                <div>{this.state.product.price}</div>
                            </div>
                        </div>
                    )
                break;

            case ERROR_FETCHING_PRODUCTDETAILS:
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
            <div className= "container">
                <h1>Product Details</h1>
                <hr />
                {el}
            </div>
        );
    }

    componentDidMount() {
        this.setState( 
            {
                status: FETCHED_PRODUCTDETAILS
            },
            () => {
                axios.get(`https://awesome-store-server.herokuapp.com/products/${this.props.match.params.id}`)
                    .then(response => response.data)
                    .then(product => {
                        //console.log(product);
                        this.setState( {
                            product: product,
                            status: FETCHED_PRODUCTDETAILS
                        })
                    })
                    .catch(error => {
                        this.setState({
                            status: ERROR_FETCHING_PRODUCTDETAILS,
                            error: error
                        })
                    });
            }
        );
    }
}