import { Alert } from '@twilio-paste/core/alert';
import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import { Text } from '@twilio-paste/core/text';
import { Separator } from '@twilio-paste/core/separator';
import { useForm } from 'react-hook-form';

import { Input } from './Input';

export default {
  title: 'Input',
};

interface ITestProps {
  emailAddress: string;
}

export const Basic: React.FC = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        window.alert(JSON.stringify(payload));
      })}
    >
      <Label htmlFor="emailAddress">Email Address</Label>
      <Input<ITestProps>
        id="emailAddress"
        name="emailAddress"
        type="email"
        placeholder="example@twilio.com"
        registerRef={register}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export const WithRules: React.FC = () => {
  const { register, handleSubmit, errors, watch } = useForm<ITestProps>();
  const currentValue = watch('emailAddress');

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        window.alert(JSON.stringify(payload));
      })}
    >
      <Text as="p">Current Value: {currentValue}</Text>
      <Separator orientation="horizontal" verticalSpacing="space30" />

      {errors.emailAddress?.message && <Alert variant="error">{errors.emailAddress.message}</Alert>}

      <Label htmlFor="emailAddress">Email Address</Label>
      <Input<ITestProps>
        id="emailAddress"
        name="emailAddress"
        type="email"
        placeholder="example@twilio.com"
        registerRef={register({ required: 'You must provide an email.' })}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};
