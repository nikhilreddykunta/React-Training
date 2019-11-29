import React from 'react';
import store from '../store';
import { updateNameAC } from '../Actions/creators';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeOfName = (event) => {
        const name = event.target.value;
        store.dispatch(updateNameAC(name));
    }

    render() {
        return (
            <div>
                Name: <input type="text" id="name" onChange={this.onChangeOfName} value={store.getState().form.name} />
                {store.getState().form.name}
            </div>
            
        )
    }

    componetDidMount() {
        store.subscribe(this.forceUpdate.bind(this));
    }
    
}