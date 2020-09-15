// PersonalDetails.jsx
import React, { Component } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import DatePicker from 'react-datepicker';

const levelOptions = [
  { key: "nb", value: "nb", text: "Newbie" },
  { key: "pr", value: "pr", text: "Pro" },
  { key: "ex", value: "ex", text: "Expert" },
  { key: "cc", value: "cc", text: "Coach" },
];

class PersonalDetails extends Component {

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

    if (!fields["date"]) {
      formIsValid = false;
      errors["date"] = "*Please select a date.";
    }

    if (!fields["exp"]) {
      formIsValid = false;
      errors["exp"] = "*Please select the level.";
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  render() {
    const { values } = this.props;
    return (
      <Form color="blue">
        <div className="back" onClick={this.back}>
          {"<-- Back"}
        </div>
        <h1 className="ui centered">Joining Date and Location Details</h1>
        <Form.Field>
          <label>Date of Joining</label>
          <DatePicker
              selected={ values.date }
              onChange={ this.props.onChange }
              name="startDate"
              dateFormat="MM/dd/yyyy"
          />
        </Form.Field>
        <div className="error">{this.state.errors.date}</div>
        <Form.Field>
          <label>Level of Experince</label>
          <Select
            placeholder="Select level"
            value={values.exp}
            options={levelOptions}
            onChange={this.props.onSelectChange}
          />
        </Form.Field>
        <div className="error">{this.state.errors.exp}</div>
        <div className="rounded-button" onClick={this.saveAndContinue}>Continue </div>
      </Form>
    );
  }
}

export default PersonalDetails;
