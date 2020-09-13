// PersonalDetails.jsx
import React, { Component } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

const levelOptions = [
  { key: "nb", value: "nb", text: "Newbie" },
  { key: "pr", value: "pr", text: "Pro" },
  { key: "ex", value: "ex", text: "Expert" },
  { key: "cc", value: "cc", text: "Coach" },
];

class PersonalDetails extends Component {
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
      <Form color="blue">
        <div className="back" onClick={this.back}>
          {"<-- Back"}
        </div>
        <h1 className="ui centered">Joining Date and Location Details</h1>
        <Form.Field>
          <label>Date of Joining</label>
          <DateInput
            name="date"
            placeholder="Date"
            value={values.date}
            iconPosition="right"
            onChange={this.props.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Level of Experince</label>
          <Select
            placeholder="Select level"
            value={values.exp}
            options={levelOptions}
            onChange={this.props.onSelectChange}
          />
        </Form.Field>
        {values.errorUser && <p className="error">Please Fill all the details</p>}
        <Button className="rounded" onClick={this.saveAndContinue}>
          Continue
        </Button>
      </Form>
    );
  }
}

export default PersonalDetails;
