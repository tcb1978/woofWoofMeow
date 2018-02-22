import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import PetBio from '../../../components/Petowner/PetBio/PetBio';
import CareGiverSearch from '../../../components/Petowner/CareGiverSearch/CareGiverSearch';
import Requests from '../../../components/Petowner/Requests/Requests';


export default class Petowner extends Component {
  render() {
    return (
      <Aux>
        <PetBio />
        <CareGiverSearch />
        <Requests />
      </Aux>
    );
  }
}