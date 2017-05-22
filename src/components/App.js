import React from 'react';

export default class App extends React.Component{
    constructor (props, state) {
        super(props, state);

        this.state = {
            color: 'black'
        }

        this.getAllUsers = this.getAllUsers.bind(this);
    }

    shouldComponentUpdate () {
        //return this.scuKey
        return true;
    }

    getAllUsers () {
        this.setState({
            color: 'blue'
        });
    }
    
    render() {
        return <div>
            <input style={{backgroundColor: this.state.color}} id="getUsers" type="button" name="getUsers" value="Get All Users"
                onClick={this.getAllUsers} scuKey={this.name + '_' + this.id} />
        </div>
    }
}