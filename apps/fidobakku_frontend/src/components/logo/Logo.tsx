import * as React from "react";
import 'src/components/logo/Logo.scss';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
    return (
        <div className="logo">Fido<span>Bakku</span></div>
    );
};
