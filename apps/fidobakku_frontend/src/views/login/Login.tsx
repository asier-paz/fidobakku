import * as React from "react";
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import './Login.scss';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
    return (
        <div className="login-view">
            <div className="logo">Fido<span>Bakku</span></div>
            <section className="white-box">
                <h1>Login</h1>

                <form className="login-form">
                    <TextField label="User" variant="outlined" required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>account_circle</Icon>
                            </InputAdornment>
                        )
                    }} placeholder="e.g. jake-the-dog@fun-adventures.com" />
                    <TextField label="Password" variant="outlined" type="password" required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>vpn_key</Icon>
                            </InputAdornment>
                        )
                    }} placeholder="e.g. 5up3r-p455w0rd!" />

                    <Button variant="contained" color="primary">Log In</Button>
                </form>
            </section>

            <section className="register">
                Not registered? <Link to="/register">Start for free</Link>
            </section>
        </div>
    );
};
