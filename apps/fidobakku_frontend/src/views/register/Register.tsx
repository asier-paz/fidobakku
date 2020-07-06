import * as React from "react";
import 'src/views/register/Register.scss';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {Logo} from "src/components/logo/Logo";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
    return (
        <div className="register-view">
            <Logo />
            <section className="white-box">
                <h1>Register</h1>

                <form className="register-form">
                    <TextField aria-label="Full name textfield" label="Full Name" variant="outlined" required placeholder="e.g. Jake The Dog" />
                    <TextField aria-label="Company textfield" label="Company" variant="outlined" placeholder="Evil Corp" />
                    <TextField aria-label="Email textfield" label="E-mail" variant="outlined" type="email" required placeholder="e.g. Jake The Dog" />
                    <TextField aria-label="Password textfield" label="Password" variant="outlined" type="password" required placeholder="e.g. Jake The Dog" />
                    <TextField aria-label="Confirm password textfield" label="Full Name" variant="outlined" type="password" required placeholder="e.g. Jake The Dog" />

                    <Button variant="contained" color="primary">Log In</Button>
                </form>
            </section>

            <section className="login">
                Already a member? <Link to="/login" aria-label="Sign in">Sign in</Link>
            </section>
        </div>
    );
};
