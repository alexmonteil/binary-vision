import React from 'react';

// Signin component
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    // Updates state with email for signin
    onEmailChange = event => {
        this.setState({ signInEmail: event.target.value });
    }

    // Updates state with password for signin
    onPasswordChange = event => {
        this.setState({ signInPassword: event.target.value });
    }

    // Calls Signin endpoint and returns user. Loads + routes user.
    onSubmitSignIn = () => {
        fetch('https://binary-vision-api.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(resp => resp.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
            .catch(error => console.log(error));
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-70 mw6 shadow-5 center">
                <main className="pa4">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 light-blue center">Sign In</legend>
                            <div className="mt3">
                                <p className="navy b">Demo username: <span className="light-blue b">demo</span></p>
                                <p className="navy b">Demo password: <span className="light-blue b">Demo123!</span></p>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 light-blue" htmlFor="email-address">Email</label>
                                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-navy hover-white w-100 b--navy" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 light-blue" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-navy hover-white w-100 b--navy" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib light-blue b--navy" 
                                type="submit" 
                                value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link dim light-blue db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }   
};

export default SignIn;