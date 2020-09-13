// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
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
                <Form.Field>
                    <label>Location</label>
                    <input
                    type="number"
                    placeholder='Location'
                    onChange={this.props.handleChange('location')}
                    defaultValue={values.location}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Total Number of players including extras</label>
                    <input
                    type="number"
                    placeholder='No of players'
                    onChange={this.props.handleChange('noOfPlayers')}
                    defaultValue={values.noOfPlayers}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Captain Name</label>
                    <input
                    type="email"
                    placeholder='Caption Name'
                    onChange={this.props.handleChange('captionName')}
                    defaultValue={values.captionName}
                    />
                </Form.Field>
                {values.errorUser && <p className="error">Please Fill all the details</p>}
                <Button className="rounded" onClick={this.saveAndContinue}>Continue </Button>
            </Form>
        )
    }
}

export default UserDetails;