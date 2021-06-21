import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import { Stack } from '@twilio-paste/core/stack';
import { useForm } from 'react-hook-form';

import { StorybookComponentWrapper } from '../../utils/StorybookComponentWrapper';
import { Option } from '../Option';
import { Select } from './Select';

export default {
  title: 'Select',
};

interface ITestProps {
  callbackMethod: string;
}

export const Basic: React.FC = () => {
  const useFormMethods = useForm<ITestProps>({
    defaultValues: { callbackMethod: 'get' },
  });
  const { register, handleSubmit } = useFormMethods;

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="RadioGroup">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Stack orientation="vertical" spacing="space80">
          <Label htmlFor="callbackMethod">Callback Method</Label>
          <Select {...register('callbackMethod')} id="callbackMethod" required={true}>
            <Option value="get">GET</Option>
            <Option value="post">POST</Option>
            <Option value="put">PUT</Option>
          </Select>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </StorybookComponentWrapper>
  );
};
