import React from 'react';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Aux from '../../hoc/Aux';

const Layout = (props) => {
    return(
        <Aux>
            <About />
            <Services />
        </Aux>
    )
}

export default Layout;