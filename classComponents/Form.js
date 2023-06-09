import React, { Component, useState, useEffect } from 'react';
import Input from './Input';
import uniqid from 'uniqid';


export default class Form2 extends Component {
    constructor(props) {
      super(props);
  
      const { formType } = this.props;
  
      this.state = {
        inputStates: [],
        id: uniqid(),
        role: formType,
        isHidden: false,
        toggleFormVis: this.toggleFormVis.bind(this),
      };
      this.updateFormState = this.updateFormState.bind(this);
    }
  
    toggleFormVis() {
      this.setState({isHidden: !!this.isHidden});
    }
  
    updateFormState(childState) {
      console.log(childState);
      const { inputStates } = this.state;
      const inputIDs = inputStates.map((input) => input.id);
  
      // * Updating input state if already exists
      if (inputIDs.includes(childState.id)) {
        const updatedInputs = inputStates.map((state) => {
          if (state.id === childState.id) return childState;
          return state;
        });
        this.setState({ inputStates: updatedInputs });
        return;
      }
  
      // * Adding input if new
      this.setState({ inputStates: [...inputStates, childState] });
    }
  
    render() {
      const { formType, updateCVState } = this.props;
      const {isHidden} = this.state;
      const formState = this.state;
  
      const basicDataForm = (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({isHidden: true});
            updateCVState(formState);
          }}
          className={isHidden ? 'hidden' : ''}
        >
          <legend>Name and contact information:</legend>
          <Input
            updateFormState={this.updateFormState}
            type="text"
            name="first-name"
          />
          <Input
            updateFormState={this.updateFormState}
            type="text"
            name="last-name"
          />
          <Input
            updateFormState={this.updateFormState}
            type="email"
            name="email-address"
          />
          <Input
            updateFormState={this.updateFormState}
            type="tel"
            name="phone-number"
          />
          <button type="submit">Done</button>
        </form>
      );
  
      const educationDataForm = (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({isHidden: true});
            updateCVState(formState);
          }}
          className={isHidden ? 'hidden' : ''}
        >
          <Input
            updateFormState={this.updateFormState}
            type="text"
            name="school-name"
          />
          <Input
            updateFormState={this.updateFormState}
            type="text"
            name="title-of-study"
          />
          <Input
            updateFormState={this.updateFormState}
            type="number"
            name="start-of-studies"
          />
          <Input
            updateFormState={this.updateFormState}
            type="number"
            name="finish-of-studies"
          />
          <button type="submit">Done</button>
        </form>
      );
  
      const workDataForm = (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({isHidden: true});
            updateCVState(formState);
          }}
          className={isHidden ? 'hidden' : ''}
        >
          <Input
            updateFormState={this.updateFormState}
            type="text"
            name="company-name"
          />
          <Input
            updateFormState={this.updateFormState}
            type="text"
            name="position-title"
          />
          <Input
            updateFormState={this.updateFormState}
            type="textarea"
            name="role-description"
          />
          <Input
            updateFormState={this.updateFormState}
            type="number"
            name="start-of-work"
          />
          <Input
            updateFormState={this.updateFormState}
            type="number"
            name="finish-of-work"
          />
          <button type="submit">Done</button>
        </form>
      );
  
      switch (formType) {
        case 'basicDataForm':
          return basicDataForm;
        case 'educationDataForm':
          return educationDataForm;
        case 'workDataForm':
          return workDataForm;
  
        default:
          throw new Error('Something is not working')
      }
    }
  }
  