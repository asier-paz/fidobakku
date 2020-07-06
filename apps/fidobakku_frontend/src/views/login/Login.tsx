import * as React from "react";
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import 'src/views/login/Login.scss';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {Logo} from "src/components/logo/Logo";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
    return (
        <div className="login-view">
            <Logo />
            <section className="white-box">
                <h1>Login</h1>

                <form className="login-form">
                    <TextField aria-label="Username textfield" label="User" variant="outlined" required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>account_circle</Icon>
                            </InputAdornment>
                        )
                    }} placeholder="e.g. jake-the-dog@fun-adventures.com" />
                    <TextField aria-label="Password textfield" label="Password" variant="outlined" type="password" required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>vpn_key</Icon>
                            </InputAdornment>
                        )
                    }} placeholder="e.g. $bacon@pancakes!" />

                    <Button variant="contained" color="primary">Log In</Button>
                </form>
            </section>

            <section className="register">
                Not registered? <Link to="/register" aria-label="Register for free">Start for free</Link>
            </section>
        </div>
    );
};
