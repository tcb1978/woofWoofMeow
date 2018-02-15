import React from 'react';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Aux from '../../hoc/Aux';
import CaregiverInfo from '../../components/UserInfo/Caregiver/CaregiverInfo'

const Layout = (props) => {
    return(
        <Aux>
            <CaregiverInfo />
        </Aux>
    )
}

export default Layout;