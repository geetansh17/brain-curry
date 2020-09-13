// Confirmation.jsx
import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react';

class Confirmation extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
        <Form>
        <div className='back' onClick={this.back}>{'<-- Back'}</div>
          <h3 className="ui centered">Contact Details</h3>
          <Form.Field>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              onChange={this.props.handleChange("Name")}
              defaultValue={values.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              onChange={this.props.handleChange("email")}
              defaultValue={values.email}
            />
          </Form.Field>
          {values.emailError && <p className="error">Email Format is not correct</p>}
          <Form.Field>
            <label>Telephone Number</label>
            <input
              type="number"
              placeholder="Number"
              max={10}
              onChange={this.props.handleChange("number")}
              defaultValue={values.number}
            />
          </Form.Field>
          {values.errorUser && <p className="error">Please Fill all the details</p>}
        <Button className="rounded" onClick={this.saveAndContinue}>Confirm</Button>
        </Form>
    );
  }
}

export default Confirmation;
