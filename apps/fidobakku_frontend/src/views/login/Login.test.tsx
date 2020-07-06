import React from 'react';
import {render} from '@testing-library/react';
import {withMemoryRouter} from "src/shared/tests/router";
import {Login} from "src/views/login/Login";

describe('Login view', () => {

    describe('renders the form', () => {
        it('username field', async () => {
            expect.assertions(1);
            const { findByLabelText } = render(
                withMemoryRouter(<Login/>)
            );

            const usernameField = await findByLabelText('Username textfield', {selector: '.MuiTextField-root'});
            expect(usernameField).toBeInTheDocument();
        });

        it('password field', async () => {
            expect.assertions(1);
            const { findByLabelText } = render(
                withMemoryRouter(<Login/>)
            );

            const usernameField = await findByLabelText('Password textfield', {selector: '.MuiTextField-root'});
            expect(usernameField).toBeInTheDocument();
        });
    });

    describe('registration', function () {
        it('renders the link', async () => {
            expect.assertions(1);
            const { findByRole } = render(
                withMemoryRouter(<Login/>)
            );

            const linkElement = await findByRole('link', {name: 'Register for free'});
            expect(linkElement).toBeInTheDocument();
        });

        it('points to /register', async () => {
            expect.assertions(1);
            const { findByRole } = render(
                withMemoryRouter(<Login/>)
            );

            const linkElement = await findByRole('link', {name: 'Register for free'});
            expect(linkElement).toHaveAttribute('href', '/register');
        });
    });
});
