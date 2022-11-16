import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

export const ContactForm = () => {
  const form = useRef();

  const serviceid = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
  const templateid = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceid, templateid, form.current, "3Kfp25amvpJXfbaFZ")
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Name
          <input type="text" name="user_name" />
        </label>
        <label>
          Email
          <input type="email" name="user_email" />
        </label>
        <label>
          Message
          <textarea name="message" />
        </label>
        <Button
          mt={2}
          pt={1}
          variant="outline"
          colorScheme="teal"
          fontSize={15}
          type="submit"
          value="Send"
        >
          Send
        </Button>
      </form>
    </StyledContactForm>
  );
};
export default ContactForm;

const StyledContactForm = styled.div`
  width: 100%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      transition: all 0.1s ease-in-out;
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea,
    input {
      background-color: #2b2b2b;
      width: 100%;
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 200px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      transition: all 0.1s ease-in-out;
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;
