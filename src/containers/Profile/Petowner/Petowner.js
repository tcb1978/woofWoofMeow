import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import PetBio from '../../../components/PetBio/PetBio'

export default class Petowner extends Component {
  render() {
    return (
      <Aux>
        <PetBio />

      </Aux>
    );
  }
}