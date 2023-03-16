// import s from './Form.module.css';
import React, { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    experiense: 'junior',
    license: false,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleLicenseChange = event => {
    this.setState({ license: event.currentTarget.checked });
  };
  reset = () => {
    this.setState({
      firstName: '',
      lastName: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Фамилия:
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <p>Уровень разработчика</p>
        <label>
          <input
            type="radio"
            name="experiense"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experiense === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experiense"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experiense === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experiense"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experiense === 'senior'}
          />
          Senior
        </label>
        <label>
          Согласен
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
        </label>
        <button type="submit" disabled={!this.state.license}>
          отправить
        </button>
      </form>
    );
  }
}
