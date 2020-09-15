// Success.jsx
import React, { Component } from "react";

class Success extends Component {
  render() {
    const { values } = this.props;
    return (
      <div>
        <h1 className="ui centered">Details Successfully Saved</h1>
        {console.log(values)}
      </div>
    );
  }
}

export default Success;
