import * as React from "react";
import {MemoryRouter} from "react-router";

export const withMemoryRouter = (component: any) => (
    <MemoryRouter>{ component }</MemoryRouter>
);
