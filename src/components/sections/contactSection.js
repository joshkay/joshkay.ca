import React, { useState, useRef } from 'react';
import validator from 'validator';
import axios from 'axios';
import { ReCAPTCHA } from 'react-google-recaptcha';
import getConfig from 'next/config';
import { toast } from '@chakra-ui/react';

const { publicRuntimeConfig } = getConfig();

const ContactSection = () =>
{
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [fields, setFields] = useState({
    email: '',
    name: '',
    message: '',
    captchaToken: null,
  });
  const [errors, setErrors] = useState({
    email: null,
    name: null,
    message: null,
    captcha: null
  });

  const reCaptchaRef = useRef();

  const handleCaptchaChange = (value) => 
  {
    setFields(prevFields => ({
      ...prevFields,
      captchaToken: value
    }));

    if (showErrors)
    {
      validateForm({
        captchaToken: value
      });
    }
  }

  const verifyCallback = (recaptchaToken) =>
  {
    setFields(prevFields => ({
      ...prevFields,
      captchaToken: recaptchaToken
    }));
  }

  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    if (isSubmitting)
    {
      return;
    }

    const valid = validateForm();
    if (!valid)
    {
      if (!showErrors)
      {
        setShowErrors(true);
      }

      return;
    }
    
    const {
      email, 
      name, 
      message,
      captchaToken
    } = fields;

    try 
    {
      setIsSubmitting(true);

      const res = await axios.post(`https://eo45pn0nq6.execute-api.us-east-1.amazonaws.com/v1/contact`,
      {
        email,
        name,
        message,
        captchaToken
      });

      reCaptchaRef.current.reset();

      setIsSubmitting(false);
      setShowErrors(false);
      setFields({
        email: '',
        name: '',
        message: '',
        captchaToken: null
      });
    
      toast({
        description: "Thanks for reaching out!  I will be in touch shortly.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    catch (err) 
    {
      setIsSubmitting(false);

      toast({
        description: err.response ? err.response.data.message : err.message,
        status: "error",
        isClosable: true,
      });
    }
  }

  const validateForm = (changedField) =>
  {
    const updatedState = {
      fields: {
        ...fields,
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
    } = errors;

    if (emailError != prevEmailError || 
        nameError != prevNameError || 
        messageError != prevMessageError ||
        captchaError != prevCaptchaError)
    {
      setErrors({
        email: emailError,
        name: nameError,
        message: messageError,
        captcha: captchaError
      });
    }

    return (
      emailError === null && 
      nameError === null && 
      messageError === null &&
      captchaError === null
    );
  }

  const handleUserInput = (e) => 
  {
    const name = e.target.name;
    const value = e.target.value;

    setFields(prevFeilds => ({
      ...prevFeilds,
      [name]: value
    }));

    if (showErrors)
    {
      validateForm({[name]: value});
    }
  }

  const hasFormErrors = () =>
  {
    const {
      email, 
      name,
      message,
      captcha
    } = errors;

    return (
      email !== null || 
      name !== null || 
      message !== null ||
      captcha !== null
    );
  }

  const formValidationMessage = (field) =>
  {
    const error = errors[field];
    
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

  const formClass = (field) =>
  {
    const error = errors[field];
    
    return (showErrors) ? (error === null) ? 'is-valid' : 'is-invalid' : '';
  }

  return (
    <form key={1} onSubmit={handleSubmit} noValidate
      className="needs-validation">
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter email"
            className={`form-control ${formClass('email')}`} 
            onChange={handleUserInput} value={fields.email} />
          {formValidationMessage('email')}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter name"
            className={`form-control ${formClass('name')}`} 
            onChange={handleUserInput} value={fields.name} />
          {formValidationMessage('name')}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea type="text" id="message" name="message" 
          placeholder="Enter message" rows={10}
          className={`form-control ${formClass('message')}`} 
          onChange={handleUserInput} value={fields.message}>
        </textarea>
        {formValidationMessage('message')}
      </div>
      <div className="form-group">
        <ReCAPTCHA
          className={`${formClass('captcha')}`}
          ref={reCaptchaRef}
          sitekey={publicRuntimeConfig.RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
        />
        {formValidationMessage('captcha')}
      </div>
      <button type="submit" className="btn btn-primary">
      {isSubmitting ? 
      (
        <div>
          <span className="mr-2 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Sending
        </div>
      ) 
      : "Submit"}
      </button>
    </form>
  );
};

export default ContactSection;