import React, { Component } from 'react';
import Input from '../Common/Input';
import { login } from '../../api/remote';
import { withRouter } from 'react-router';


class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();

        const res = await login(this.state.email, this.state.password);

        if(!res.success){
            this.setState({error: res});
            return;
        }

        //save token from server
        localStorage.setItem('authToken', res.token);

        //redirect
        this.props.history.push('/');
        
    }

    

    render() {

        return (
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Login</h1>
                </div>
            </div>
            <div className="container">
            <form id="contact" onSubmit={this.onSubmitHandler}>
            <h3>Login Form</h3>
                <div className="row space-top">
                    <div className="col-md-4">
                    <fieldset>
                        <Input 
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                            label="E-mail"
                        />
                    </fieldset>

                    <fieldset>
                        <Input 
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            label="Password"
                        />
                        </fieldset>
						<input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </div>
            </form>
            </div>
        </div>
        );
    }
}


export default withRouter(LoginPage);
