import React from 'react';
import About from '../../components/About/About';
import About from '../../components/Services/Services';

export const Layout = (props) => {
    return(
        <Aux>
            <About />
            <Services />
        </Aux>
    )
}

export default Layout