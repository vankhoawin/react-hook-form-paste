import { Alert } from '@twilio-paste/core/alert';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import { Stack } from '@twilio-paste/core/stack';
import { useForm } from 'react-hook-form';

import { StorybookComponentWrapper } from '../../utils/StorybookComponentWrapper';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

interface ITestProps {
  emailAddress: string;
}

export const Basic: React.FC = () => {
  const useFormMethods = useForm<ITestProps>();
  const { register, handleSubmit } = useFormMethods;

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="Input">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Stack orientation="vertical" spacing="space80">
          <Box>
            <Label htmlFor="emailAddress">Email Address</Label>
            <Input type="email" placeholder="example@twilio.com" {...register('emailAddress')} />
          </Box>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </StorybookComponentWrapper>
  );
};

export const WithRules: React.FC = () => {
  const useFormMethods = useForm<ITestProps>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormMethods;

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="Input">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Stack orientation="vertical" spacing="space80">
          {errors.emailAddress?.message && <Alert variant="error">{errors.emailAddress.message}</Alert>}

          <Box>
            <Label htmlFor="emailAddress">Email Address</Label>
            <Input
              type="email"
              placeholder="example@twilio.com"
              {...register('emailAddress', { required: 'You must provide an email.' })}
            />
          </Box>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </StorybookComponentWrapper>
  );
};
