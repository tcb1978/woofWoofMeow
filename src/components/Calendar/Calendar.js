import React from 'react';
import Aux from '../../hoc/Aux';

const Calendar = (props) => {
    return (
        <Aux>
            { props.children }
        </Aux>
    )
}

export default Calendar;