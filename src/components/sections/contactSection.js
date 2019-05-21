import React, { Component } from 'react';
import validator from 'validator';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import getConfig from 'next/config';
import { Alert } from 'reactstrap';

const { publicRuntimeConfig } = getConfig();

class ContactSection extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      isSubmitting: false,
      showErrors: false,
      fields: 
      {
        email: '',
        name: '',
        message: '',
        captchaToken: null,
      },
      errors:
      {
        email: null,
        name: null,
        message: null,
        captcha: null
      },
      alert:
      {
        visible: false,
        style: '',
        message: '',
        allowClose: false
      }
    };

    this.reCaptchaRef = React.createRef();

    this.alertShown = this.alertShown.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleCaptchaChange = this.handleCaptchaChange.bind(this);
  }

  componentDidMount()
  {
    
  }

  alertShown(dismissTimeSeconds)
  {
    this.alertTimer = setTimeout(() => this.setState({
      alert: {
        visible: false
      }
    }), dismissTimeSeconds * 1000);
  }
  
  dismissAlert()
  {
    this.setState({
      alert: {
        visible: false
      }
    });
  }

  handleCaptchaChange(value) 
  {
    console.log(value);
    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        captchaToken: value
      }
    }));

    if (this.state.showErrors)
    {
      this.validateForm({
        captchaToken: value
      });
    }
  }

  verifyCallback(recaptchaToken)
  {
    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        captchaToken: recaptchaToken
      }
    }));
  }

  async handleSubmit(e)
  {
    e.preventDefault();

    if (this.state.isSubmitting)
    {
      return;
    }

    const valid = this.validateForm();
    if (!valid)
    {
      if (!this.state.showErrors)
      {
        this.setState({
          showErrors: true
        });
      }

      return;
    }
    
    const {
      email, 
      name, 
      message,
      captchaToken
    } = this.state.fields;

    try 
    {
      this.setState({
        isSubmitting: true
      });

      const res = await axios.post(`https://eo45pn0nq6.execute-api.us-east-1.amazonaws.com/v1/contact`,
      {
        email,
        name,
        message,
        captchaToken
      });

      this.reCaptchaRef.current.reset();

      this.setState(prevState => ({
        isSubmitting: false,
        showErrors: false,
        fields: {
          email: '',
          name: '',
          message: '',
          captchaToken: null
        },
        alert: {
          color: 'success',
          visible: true,
          message: 'Thanks for reaching out!  I will be in touch shortly.',
          allowClose: false
        }
      }));

      this.alertShown(publicRuntimeConfig.SUCCESS_ALERT_TIMEOUT);
    }
    catch (err) 
    {
      this.setState({
        isSubmitting: false,
        alert: {
          color: 'danger',
          visible: true,
          message: err.response ? err.response.data.message : err.message,
          allowClose: true
        }
      });

      this.alertShown(publicRuntimeConfig.ERROR_ALERT_TIMEOUT);
    }
  }

  validateForm(changedField)
  {
    const updatedState = {
      fields: {
        ...this.state.fields,
        ...changedField
      }
    };

    const {
      email, 
      name, 
      message,
      captchaToken,
    } = updatedState.fields;

    const emailError = validator.isEmpty(email) ? 'Please enter your email.' :
      !validator.isEmail(email) ? 'Please enter a valid email.' : null;
    const nameError = validator.isEmpty(name) ? 'Please enter your name.' : null;
    const messageError = validator.isEmpty(message) ? 'Please enter a message.': null;
    const captchaError = captchaToken === null ? 'Please prove you are human.' : null;

    const {
      email: prevEmailError, 
      name: prevNameError, 
      message: prevMessageError,
      captcha: prevCaptchaError
    } = this.state.errors;

    if (emailError != prevEmailError || 
        nameError != prevNameError || 
        messageError != prevMessageError ||
        captchaError != prevCaptchaError)
    {
      this.setState({
        errors: {
          email: emailError,
          name: nameError,
          message: messageError,
          captcha: captchaError
        }
      });
    }

    return (
      emailError === null && 
      nameError === null && 
      messageError === null &&
      captchaError === null
    );
  }

  handleUserInput(e) 
  {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        [name]: value
      }
    }));

    if (this.state.showErrors)
    {
      this.validateForm({[name]: value});
    }
  }

  hasFormErrors()
  {
    const {
      email, 
      name,
      message,
      captcha
    } = this.state.errors;

    return (
      email !== null || 
      name !== null || 
      message !== null ||
      captcha !== null
    );
  }

  formValidationMessage(field)
  {
    const error = this.state.errors[field];
    
    if (error !== null)
    {
      return (
        <div className="d-block invalid-feedback">{error}</div>
      );
    }

    return (
      <div className="valid-feedback"></div>
    );
  }

  formClass(field)
  {
    const error = this.state.errors[field];
    
    return (this.state.showErrors) ? (error === null) ? 'is-valid' : 'is-invalid' : '';
  }

  render()
  {
    return (
      <form key={1} onSubmit={this.handleSubmit} noValidate
        className="needs-validation">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email"
              className={`form-control ${this.formClass('email')}`} 
              onChange={this.handleUserInput} value={this.state.fields.email} />
            {this.formValidationMessage('email')}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter name"
              className={`form-control ${this.formClass('name')}`} 
              onChange={this.handleUserInput} value={this.state.fields.name} />
            {this.formValidationMessage('name')}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea type="text" id="message" name="message" 
            placeholder="Enter message" rows={10}
            className={`form-control ${this.formClass('message')}`} 
            onChange={this.handleUserInput} value={this.state.fields.message}>
          </textarea>
          {this.formValidationMessage('message')}
        </div>
        <div className="form-group">
          <ReCAPTCHA
            className={`${this.formClass('captcha')}`}
            ref={this.reCaptchaRef}
            sitekey={publicRuntimeConfig.RECAPTCHA_SITE_KEY}
            onChange={this.handleCaptchaChange}
          />
          {this.formValidationMessage('captcha')}
        </div>
        <button type="submit" className="btn btn-primary">
        {this.state.isSubmitting ? 
        (
          <div>
            <span className="mr-2 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Sending
          </div>
        ) 
        : "Submit"}
        </button>
        <Alert color={this.state.alert.color} isOpen={this.state.alert.visible}
          toggle={this.state.alert.allowClose ? this.dismissAlert : undefined}>
          {this.state.alert.message}
        </Alert>
      </form>
    );
  }
};

export default ContactSection;