// Confirmation.jsx
import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react';

class Confirmation extends Component {

  constructor(){
    super();
    this.state = {
        errors: {}
    }
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    if(this.validate())
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  validate() {
    let fields = this.props.values;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your team name.";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["number"]) {
      formIsValid = false;
      errors["number"] = "*Please enter your mobile no.";
    }

    if (typeof fields["number"] !== "undefined") {
      if (fields["number"] && !fields["number"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["number"] = "*Please enter valid mobile no.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

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
              onChange={this.props.handleChange("name")}
              defaultValue={values.name}
            />
          </Form.Field>
          <div className="error">{this.state.errors.name}</div>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              onChange={this.props.handleChange("email")}
              defaultValue={values.email}
            />
          </Form.Field>
          <div className="error">{this.state.errors.email}</div>
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
          <div className="error">{this.state.errors.number}</div>
          <div className="rounded-button" onClick={this.saveAndContinue}>Continue </div>
        </Form>
    );
  }
}

export default Confirmation;
