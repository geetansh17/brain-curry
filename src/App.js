import React, { Component } from "react";
import "./App.css";
import { Container, Progress } from "semantic-ui-react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

class App extends Component {
  state = {
    step: 1,
    teamName: null,
    location: null,
    noOfPlayers: null,
    captionName: null,
    date: "",
    percent: 0,
    exp: null,
    name: null,
    email: null,
    number: null,
    errorUser: false,
    emailError:false
  };

  validator = (step) => {
    switch (step) {
      case 1:
        if (
          this.state.teamName &&
          this.state.location &&
          this.state.noOfPlayers &&
          this.state.captionName
        )
          return true;
        this.setState({
          errorUser: true,
        });
        return false;
      case 2:
        if (this.state.date && this.state.exp) return true;
        this.setState({
          errorUser: true,
        });
        return false;
      case 3:
        if (this.state.name && this.state.email && this.state.number)
          return true;
          this.setState({
            errorUser: true,
          });
        return true;
      default:
    }
  };

  nextStep = () => {
    const { step } = this.state;
    if (!this.validator(step)) return;
    this.setState((prevState) => ({
      step: step + 1,
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 33.33,
      errorUser:false
    }));
  };

  prevStep = () => {
    const { step, percent } = this.state;
    this.setState({
      step: step - 1,
      percent: percent - 33.33,
      errorUser:false
    });
  };

  handleChange = (input) => (event) => {
    if (!event.target.value) return;
    if(input==='email')
        this.ValidateEmail(event.target.value);
    this.setState({ [input]: event.target.value, errorUser: false });
  };

  onChange = (date, text, mode) => {
    this.setState({
      date: text.value,
    });
  };


  onSelectChange = (date, text) => {
    this.setState({
      exp: text.value,
    });
  };

  ValidateEmail = (mail) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return this.setState({
        emailError: false,
      });
    }
    this.setState({
      emailError: true,
    });
  };

  component = (step, values) => {
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onSelectChange={this.onSelectChange}
            onChange={this.onChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Success values={values} />;
      default:
    }
  };

  render() {
    const { step } = this.state;
    const {
      teamName,
      location,
      name,
      noOfPlayers,
      email,
      number,
      date,
      exp,
      captionName,
      errorUser,
      emailError
    } = this.state;
    const values = {
      teamName,
      location,
      name,
      noOfPlayers,
      email,
      number,
      date,
      exp,
      captionName,
      errorUser,
      emailError
    };
    return (
      <Container textAlign="center">
        <Progress
          inverted
          color="blue"
          percent={this.state.percent}
          indicating
        />
        <h1>FOOTBALL REGISTRATION</h1>
        {this.component(step, values)}
      </Container>
    );
  }
}

export default App;
