import React, { useState, useRef } from 'react';
import validator from 'validator';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import getConfig from 'next/config';
import { 
  Wrap, 
  FormControl, 
  FormLabel, 
  Input, 
  useToast, 
  Button, 
  FormErrorMessage, 
  Textarea, 
  SimpleGrid,
  VStack,
  useColorMode
} from '@chakra-ui/react';

const { publicRuntimeConfig } = getConfig();

const ContactSection = () =>
{
  const { colorMode } = useColorMode();
  const toast = useToast();
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
        duration: 4000,
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
    <form 
      key={1} 
      onSubmit={handleSubmit} 
      noValidate
      style={{ width: '100%' }}
    >
      <VStack
        spacing={4}
        alignItems="flex-start"
      >
        <SimpleGrid 
          width="100%"
          columns={2} 
          spacing={4}
        >
          <FormControl isRequired isInvalid={errors.email != null}>
            <FormLabel>Email</FormLabel>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter email"
              onChange={handleUserInput} 
              value={fields.email}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={errors.name != null}>
            <FormLabel>Name</FormLabel>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter name"
              onChange={handleUserInput} 
              value={fields.name}
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>
        <FormControl isRequired isInvalid={errors.message != null}>
          <FormLabel>Message</FormLabel>
          <Textarea 
            type="text" 
            id="message" 
            name="message" 
            placeholder="Enter message"
            rows={10}
            onChange={handleUserInput} 
            value={fields.message}
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={errors.captcha != null}>
          <ReCAPTCHA
            key={`captcha-${colorMode}`}
            theme={colorMode}
            ref={reCaptchaRef}
            sitekey={publicRuntimeConfig.RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
          <FormErrorMessage>{errors.captcha}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isSubmitting}
          loadingText="Submitting"    
          type="submit"
          variant="primary"
        >
          Send 
        </Button>
      </VStack>
    </form>
  );
};

export default ContactSection;