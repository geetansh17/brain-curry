import React, { Component } from "react";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    date: new Date(),
    percent:25,
    exp: null,
    name: null,
    email: null,
    number: null
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
    this.setState((prevState) => ({
      step: step + 1,
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 25,
      errorUser:false
    }));
  };

  prevStep = () => {
    const { step, percent } = this.state;
    this.setState({
      step: step - 1,
      percent: percent - 25,
      errorUser:false
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value, errorUser: false });
  };

  onChange = (date) => {
    this.setState({
      date: date,
    });
  };


  onSelectChange = (date, text) => {
    this.setState({
      exp: text.value,
    });
  };

  // ValidateEmail = (mail) => {
  //   if (
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
  //       mail
  //     )
  //   ) {
  //     return this.setState({
  //       emailError: false,
  //     });
  //   }
  //   this.setState({
  //     emailError: true,
  //   });
  // };

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
      captionName
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
      captionName
    };
    return (
      <div>
        <Progress
          inverted
          color="blue"
          percent={this.state.percent}
          indicating
        />
      <Container textAlign="center">
        <h1>FOOTBALL REGISTRATION</h1>
        {this.component(step, values)}
      </Container>
      </div>
    );
  }
}

export default App;
