import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xrgdrrln");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <FormControl onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" type="name" name="email" mb={2} />
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <Input id="email" type="email" name="email" mb={4} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Textarea placeholder="Send me a message" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button
        type="submit"
        variant="outline"
        colorScheme="gray"
        mt={2}
        pt={1}
        disabled={state.submitting}
        fontSize={15}
      >
        Submit
      </Button>
    </FormControl>
  );
}

export default ContactForm;
