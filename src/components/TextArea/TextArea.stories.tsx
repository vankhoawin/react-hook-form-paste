import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import { Text } from '@twilio-paste/core/text';
import { useForm } from 'react-hook-form';
import * as React from 'react';

import { TextArea } from './TextArea';

export default {
  title: 'TextArea',
};

interface ITestProps {
  message: string;
}

export const Basic: React.FC = () => {
  const { control, handleSubmit, watch } = useForm<ITestProps>({
    defaultValues: {
      message: '',
    },
  });
  const message = watch('message');

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        window.alert(JSON.stringify(payload));
      })}
    >
      <Label htmlFor="message" required={true}>
        Message (at least 40 characters)
      </Label>
      <TextArea<ITestProps> id="message" name="message" placeholder="Enter message" control={control} />
      <Text as="p">{message.length} characters</Text>

      <Button variant="primary" type="submit" disabled={message.length < 40}>
        Submit
      </Button>
    </form>
  );
};
