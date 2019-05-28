/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import InputForm from '../containers/InputForm';
import OutputSignature from '../containers/OutputSignature';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-7">
          <InputForm />
        </div>
        <div className="col-md-5">
          <OutputSignature />
        </div>
      </div>
    );
  }
}
export default App;
