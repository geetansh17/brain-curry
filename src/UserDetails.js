// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    constructor(){
        super();
        this.state = {
            errors: {}
      }
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        if(this.validate())
        this.props.nextStep()
    }
    
    validate() {
        let fields = this.props.values;
        let errors = {};
        let formIsValid = true;

        if (!fields["teamName"]) {
          formIsValid = false;
          errors["teamName"] = "*Please enter your team name.";
        }

        if (!fields["location"]) {
            formIsValid = false;
            errors["location"] = "*Please enter the location.";
        }


        if (fields["location"]<0) {
            formIsValid = false;
            errors["location"] = "*Please enter the correct value.";
        }
  
        if (!fields["noOfPlayers"]) {
            formIsValid = false;
            errors["noOfPlayers"] = "*Please enter the no Of Players.";
        }


        if (fields["noOfPlayers"]<0) {
            formIsValid = false;
            errors["noOfPlayers"] = "*Please enter the correct value.";
        }
        
        if (!fields["captionName"]) {
            formIsValid = false;
            errors["captionName"] = "*Please enter the caption name.";
        }

        this.setState({
          errors: errors
        });

        return formIsValid;
  
    }
  

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h3 className="ui centered">List your team information</h3>
                <Form.Field>
                    <label>Team Name</label>
                    <input
                    type="text"
                    placeholder='Team Name'
                    onChange={this.props.handleChange('teamName')}
                    defaultValue={values.teamName}
                    />
                </Form.Field>
                <div className="error">{this.state.errors.teamName}</div>
                <Form.Field>
                    <label>Location</label>
                    <input
                    type="number"
                    placeholder='Location'
                    onChange={this.props.handleChange('location')}
                    defaultValue={values.location}
                    />
                </Form.Field>
                <div className="error">{this.state.errors.location}</div>
                <Form.Field>
                    <label>Total Number of players including extras</label>
                    <input
                    type="number"
                    placeholder='No of players'
                    onChange={this.props.handleChange('noOfPlayers')}
                    defaultValue={values.noOfPlayers}
                    />
                </Form.Field>
                <div className="error">{this.state.errors.noOfPlayers}</div>
                <Form.Field>
                    <label>Captain Name</label>
                    <input
                    type="email"
                    placeholder='Caption Name'
                    onChange={this.props.handleChange('captionName')}
                    defaultValue={values.captionName}
                    />
                </Form.Field>
                <div className="error">{this.state.errors.captionName}</div>
                <div className="rounded-button" onClick={this.saveAndContinue}>Continue </div>
            </Form>
        )
    }
}

export default UserDetails;