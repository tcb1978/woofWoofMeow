import React from 'react';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Aux from '../../hoc/Aux';
import UserInfo from '../../components/UserInfo/UserInfo';
import DogInfo from '../../components/UserInfo/AnimalInfo';
import CaregiverInfo from '../../components/UserInfo/CaregiverInfo/CaregiverInfo';
import Signin from '../../components/Signin/Signin';
import routes from '../../routes/routes';

const Layout = (props) => {
    return(
        <Aux>
            { routes }
        </Aux>
    )
}

export default Layout;