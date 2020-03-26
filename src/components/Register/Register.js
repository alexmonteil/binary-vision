import React from 'react';

// Register component 
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerEmail: '',
            registerPassword: '',
            registerName: ''
        }
    }

    // Updates state with name for registration
    onNameChange = event => {
        this.setState({ registerName: event.target.value });
    }

    // Updates state with email for registration
    onEmailChange = event => {
        this.setState({ registerEmail: event.target.value });
    }

    // Updates state with password for registration
    onPasswordChange = event => {
        this.setState({ registerPassword: event.target.value });
    }

    // Calls Register endpoint and returns user. Loads + routes user.
    onSubmitRegister = () => {
        fetch('https://binary-vision-api.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.registerEmail,
                password: this.state.registerPassword,
                name: this.state.registerName
            })
        })
            .then(resp => resp.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            });
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-70 mw6 shadow-5 center">
                <main className="pa4">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 light-blue">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 light-blue" htmlFor="name">Name</label>
                                <input
                                    onChange={this.onNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-navy hover-white w-100 b--navy" 
                                    type="text" 
                                    name="name" 
                                    id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 light-blue" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onEmailChange} 
                                    className="pa2 input-reset ba bg-transparent hover-bg-navy hover-white w-100 b--navy" 
                                    type="email" 
                                    name="email-address" 
                                    id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 light-blue" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onPasswordChange} 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-navy hover-white w-100 b--navy" 
                                    type="password" 
                                    name="password" 
                                    id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitRegister}
                                className="b ph3 pv2 input-reset ba b--navy bg-transparent grow pointer f6 dib light-blue" 
                                type="submit" 
                                value="Register" />
                        </div>
                    </div>
                </main>
            </article>
        );
    }  
};

export default Register;