import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
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