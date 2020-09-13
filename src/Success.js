// Success.jsx
import React, { Component } from "react";

class Success extends Component {
  render() {
    const { values } = this.props;
    return (
      <div>
        <h1 className="ui centered">Details Successfully Saved</h1>
        {Object.keys(values).map((arow) => (
          <p>
            {arow}:{values[arow]}
          </p>
        ))}
      </div>
    );
  }
}

export default Success;
