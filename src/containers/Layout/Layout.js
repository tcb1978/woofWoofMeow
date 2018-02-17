import React from 'react';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Aux from '../../hoc/Aux';
import routes from '../../routes/routes';

const Layout = (props) => {
    return(
        <Aux>
            { routes }
        </Aux>
    )
}

export default Layout;