import React from 'react';
import {render} from '@testing-library/react';
import {withMemoryRouter} from "src/shared/tests/router";
import {Login} from "src/views/login/Login";

describe('Login view', () => {

    describe('Renders the form', () => {
        it('Username field', () => {
            const { findByRole } = render(
                withMemoryRouter(<Login/>)
            );

            const usernameField = findByRole('TextField', {id: 'username-field'});
            expect(usernameField).toBeInTheDocument(); //
        });
    });

    it('renders the username', () => {
        const {getByText} = render(
            withMemoryRouter(<Login/>)
        );
        const linkElement = getByText(/Start for free/i);
        expect(linkElement).toBeInTheDocument();
    });
});
